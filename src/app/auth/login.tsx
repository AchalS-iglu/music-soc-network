import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Linking,
} from 'react-native';
import { colours } from '../../styles/colours';
// antdesign icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter, useSearchParams } from 'expo-router';
import { commonStyles } from '../../styles/common';
import * as WebBrowser from 'expo-web-browser';
import { SPOTIFY_CLIENT_ID, apiUrl } from '../../lib/constants';
import { makeRedirectUri, startAsync } from 'expo-auth-session';
import {
  generateCodeChallenge,
  generateRandomString,
  getSearchParamFromURL,
} from '../../lib/utilities';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { base64encode } from '../../lib/utilities';

// welcome > login to spotify  > select username > select genre > songs - recommendation > profile

export default function LogIn() {
  const handleLogin = async () => {
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
    }
  };

  return (
    <View style={commonStyles.standardContainer}>
      <View
        style={{
          width: '100%',
        }}
      >
        <Text
          style={{
            fontSize: 32,
            paddingHorizontal: 24,
            fontFamily: 'monospace',
            color: colours.GreenNiceBG,
            fontWeight: '400',
          }}
        >
          Login with
        </Text>
      </View>
      <TouchableHighlight
        style={{
          width: '90%',
          alignItems: 'center',
          borderRadius: 8,
          marginTop: 24,
        }}
        underlayColor={'#fff'}
        onPress={() => {
          handleLogin();
        }}
      >
        <LinearGradient
          colors={['#1ed760', '#1db954']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 } /* 0.25, 0.25, 0.75, 0.75 */}
          style={{
            width: '100%',
            paddingHorizontal: 24,
            paddingVertical: 12,
            borderRadius: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 24,
              color: '#191414',
              fontWeight: '600',
            }}
          >
            SPOTIFY
          </Text>
          <IconAntDesign
            name="link"
            size={24}
            color="#191414"
            style={{
              marginHorizontal: 8,
            }}
          />
        </LinearGradient>
      </TouchableHighlight>
      <View
        style={{
          width: '80%',
          marginTop: 10,
          marginBottom: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: colours.GreenDark,
            width: '30%',
            marginHorizontal: 6,
          }}
        ></View>
        <Text>OR</Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: colours.GreenDark,
            width: '30%',
            marginHorizontal: 6,
          }}
        ></View>
      </View>
      <TouchableHighlight
        style={{
          width: '90%',
          alignItems: 'center',
          borderRadius: 8,
        }}
        onPress={() => {
          alert('APPLE MUSIC NOT IMPLEMENTED YET, PLEASE USE SPOTIFY!');
        }}
        underlayColor={'#fff'}
      >
        <LinearGradient
          colors={['#fc3c44', '#f94c57', '#c2cad7']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 } /* 0.25, 0.25, 0.75, 0.75 */}
          locations={[0, 0.1, 1] /* [0, 0.25, 0.5, 0.75, 1] */}
          style={{
            width: '100%',
            paddingHorizontal: 24,
            paddingVertical: 12,
            borderRadius: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 24,
              color: '#fff',
              fontWeight: '600',
            }}
          >
            APPLE MUSIC
          </Text>
          <IconAntDesign
            name="link"
            size={24}
            color="#fff"
            style={{
              marginHorizontal: 8,
            }}
          />
        </LinearGradient>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({});
