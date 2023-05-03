import React, { createContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';
import { User_t } from '../models';
import { getUserData } from '../spotify/user';
import { createUser, getUserWithSpotifyID, updateUser } from '../firebase/user';
import { randomUUID } from 'expo-crypto';
import { makeRedirectUri } from 'expo-auth-session';
import { generateRandomString, getSearchParamFromURL } from '../utilities';
import { SPOTIFY_CLIENT_ID, apiUrl } from '../constants';
import * as WebBrowser from 'expo-web-browser';
import axios from 'axios';

type AuthContextType = {
  user: User_t;
  setUser: React.Dispatch<React.SetStateAction<User_t>>;
  loginWithSpotify: () => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: {},
  setUser: () => {},
  loginWithSpotify: async () => {},
  logout: async () => {},
  loading: false,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User_t>({});
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      setLoading(true);
      const userUnparsed = await SecureStore.getItemAsync('user');
      const accessToken = await SecureStore.getItemAsync('access-token');
      const refreshToken = await SecureStore.getItemAsync('refresh-token');
      if (!userUnparsed || !accessToken || !refreshToken) {
        router.replace('/auth/welcome');
        return;
      }
      const user = JSON.parse(userUnparsed) as User_t;
      setUser(user);
      if (user.username === 'null') {
        router.replace('/auth/newUser/usernameMusic');
      } else {
        router.replace('/app');
      }
      setLoading(false);
    };

    loadUser();
  }, []);

  const loginWithSpotify = async () => {
    try {
      const redirectUri = makeRedirectUri({
        scheme: 'musicsn',
      });

      let state = generateRandomString(16);
      const scope = 'user-read-private user-read-email';

      const args = new URLSearchParams({
        response_type: 'code',
        client_id: SPOTIFY_CLIENT_ID,
        scope: scope,
        redirect_uri: redirectUri,
        state: state,
      });

      const authUrl = `https://accounts.spotify.com/authorize?${args}`;

      const result: any = await WebBrowser.openAuthSessionAsync(
        authUrl,
        redirectUri
      );

      if (result.type === 'success') {
        setLoading(true);
        if (!result.url) {
          return;
        }

        const code = getSearchParamFromURL(result.url, 'code') ?? '';
        const state = getSearchParamFromURL(result.url, 'state') ?? '';

        if (state !== state) {
          throw Error('bruh got hacked');
        }

        const res = await axios.post(apiUrl + `api/spotifyToken`, null, {
          params: { code, redirectUri },
        });

        const data: {
          access_token: string;
          expires_in: number;
          refresh_token: string;
          scope: string[];
          token_type: string;
        } = res.data;

        const userData = await getUserData(data.access_token);
        const getRes = await getUserWithSpotifyID(userData.id);
        let user: User_t;
        let newUser: Boolean = false;
        if (getRes) {
          user = getRes;
          if (!user.uid) return;
          user.lastLogin = new Date().getTime();
          user.lastActivity = new Date().getTime();
          await updateUser(user.uid, {
            lastLogin: user.lastLogin,
            lastActivity: user.lastActivity,
          });
        } else {
          user = {
            uid: randomUUID(),
            username: 'null',
            type: 'SPOTIFY',
            dp: userData.images[0].url,
            providerId: userData.id,
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
            deletedAt: null,
            lastActivity: new Date().getTime(),
            lastLogin: new Date().getTime(),
          };
          await createUser(user);
          newUser = true;
        }
        setUser(user);
        await SecureStore.setItemAsync('user', JSON.stringify(user));
        await SecureStore.setItemAsync('access-token', data.access_token);
        await SecureStore.setItemAsync('refresh-token', data.refresh_token);
        console.log(`
          user: ${JSON.stringify(user)}
          access-token: ${data.access_token}
          refresh-token: ${data.refresh_token}`);
        if (newUser) {
          router.replace('/auth/newUser/usernameMusic');
        } else {
          router.replace('/home');
        }
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const logout = async () => {
    setLoading(true);
    await SecureStore.deleteItemAsync('user');
    await SecureStore.deleteItemAsync('access-token');
    await SecureStore.deleteItemAsync('refresh-token');
    setUser({});
    router.replace('/auth/welcome');
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, loginWithSpotify, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
