import React, { createContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useRootNavigationState, useRouter } from 'expo-router';
import { User_t } from '../models';
import { getUserData } from '../spotify/user';
import {
  createUser,
  getUserWithSpotifyID,
  updateUserDoc,
} from '../firebase/user';
import { randomUUID } from 'expo-crypto';
import { makeRedirectUri } from 'expo-auth-session';
import { generateRandomString, getSearchParamFromURL } from '../utilities';
import { SPOTIFY_CLIENT_ID, apiUrl } from '../constants';
import * as WebBrowser from 'expo-web-browser';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';

type AuthContextType = {
  user: User_t;
  setUser: React.Dispatch<React.SetStateAction<User_t>>;
  loginWithSpotify: () => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  updateUser: (data: Partial<User_t>) => Promise<void>;
  loadUser: () => Promise<void>;
  accessToken: string | null;
};

export const AuthContext = createContext<AuthContextType>({
  user: {},
  setUser: () => {},
  loginWithSpotify: async () => {},
  logout: async () => {},
  loading: false,
  updateUser: async () => {},
  loadUser: async () => {},
  accessToken: null,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User_t>({});
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const loadUser = async () => {
    setLoading(true);
    const userUnparsed = await AsyncStorage.getItem('user');
    const accessToken = await SecureStore.getItemAsync('access-token');
    // const refreshToken = await SecureStore.getItemAsync('refresh-token');
    if (!userUnparsed || !accessToken) {
      // router.replace('/auth/welcome');
      setLoading(false);
      return;
    }
    const user = JSON.parse(userUnparsed) as User_t;
    setUser(user);
    setAccessToken(accessToken);
    // if (user.username === 'null') {
    //   router.replace('/auth/newUser/usernameMusic');
    // } else {
    //   router.replace('/home');
    // }
    setLoading(false);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const loginWithSpotify = async () => {
    setLoading(true);
    try {
      const redirectUri = makeRedirectUri({
        scheme: 'musicsn',
      });

      let state = generateRandomString(16);
      const scope =
        'ugc-image-upload user-read-playback-state user-modify-playback-state user-read-currently-playing app-remote-control streaming playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public user-follow-modify user-follow-read user-read-playback-position user-top-read user-read-recently-played user-library-modify user-library-read user-read-email user-read-private';

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
        if (!result.url) {
          setLoading(false);
          return;
        }

        const code = getSearchParamFromURL(result.url, 'code') ?? '';
        const state = getSearchParamFromURL(result.url, 'state') ?? '';

        if (state !== state) {
          throw Error('bruh got hacked');
        }

        const res = await axios
          .post(apiUrl + `api/spotifyToken`, null, {
            params: { code, redirectUri },
          })
          .catch((err) => {
            console.log(`
            error getting access token: ${err}`);
          });

        if (!res) {
          setLoading(false);
          return;
        }
        const data: {
          access_token: string;
          expires_in: number;
          refresh_token: string;
          scope: string[];
          token_type: string;
        } = res.data;

        setAccessToken(accessToken);
        const userData = await getUserData(data.access_token);
        if (!userData) {
          console.log('error getting user data');
          alert('error getting user data');
          setLoading(false);
          return;
        }
        const getRes = await getUserWithSpotifyID(userData.id);
        let user: User_t;
        let newUser: Boolean = false;
        if (getRes) {
          user = getRes;
          if (!user.uid) return;
          user.lastLogin = new Date().getTime();
          user.lastActivity = new Date().getTime();
          await updateUserDoc(user.uid, {
            lastLogin: user.lastLogin,
            lastActivity: user.lastActivity,
          });
        } else {
          user = {
            uid: randomUUID(),
            username: 'null',
            type: 'SPOTIFY',
            dp: userData.images[0]?.url ?? '',
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
        await AsyncStorage.setItem('user', JSON.stringify(user));
        await SecureStore.setItemAsync('access-token', data.access_token);
        await SecureStore.setItemAsync('refresh-token', data.refresh_token);
        console.log(`
          // user: ${user.username}
          access-token: ${data.access_token}
          refresh-token: ${data.refresh_token}`);
        if (newUser) {
          router.replace('/auth/newUser/usernameMusic');
        } else {
          router.replace('/home');
        }
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
    setLoading(false);
  };

  const logout = async () => {
    setLoading(true);
    await AsyncStorage.removeItem('user');
    await SecureStore.deleteItemAsync('access-token');
    await SecureStore.deleteItemAsync('refresh-token');
    setUser({});
    setAccessToken(null);
    router.replace('/');
    setLoading(false);
  };

  const updateUser = async (data: Partial<User_t>) => {
    if (!user.uid) return;
    await updateUserDoc(user.uid, data);
    setUser({ ...user, ...data });
    await AsyncStorage.setItem('user', JSON.stringify({ ...user, ...data }));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginWithSpotify,
        logout,
        loading,
        updateUser,
        loadUser,
        accessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
