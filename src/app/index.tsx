import { useRootNavigationState, useRouter, Redirect } from 'expo-router';
import { Fragment, useContext, useEffect } from 'react';
import { AuthContext } from '../lib/auth/context';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { colours } from '../styles/colours';
import { commonStyles } from '../styles/common';

export default function App() {
  const router = useRouter();
  const navigationState = useRootNavigationState();
  const { loadUser, user, loading } = useContext(AuthContext);
  // useEffect(() => {
  //   loadUser();
  // }, []);

  return (
    <View style={commonStyles.standardContainer}>
      {/* <View
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
        }}
      >
        <Image
          source={require('../../assets/logo.png')}
          style={{
            width: 100,
            height: 100,
          }}
        />
      </View> */}
      {loading ? (
        <View style={commonStyles.standardContainer}>
          <ActivityIndicator size="large" color={colours.GreenDark} />
        </View>
      ) : (
        <>
          <View
            style={{
              width: '100%',
            }}
          >
            <Text
              style={{
                fontSize: 48,
                paddingHorizontal: 24,
                fontFamily: 'monospace',
                lineHeight: 48,
                color: colours.GreenNiceBG,
                fontWeight: '400',
              }}
            >
              Welcome To
            </Text>
            <Text
              style={{
                fontSize: 64,
                paddingHorizontal: 24,
                fontFamily: 'monospace',
                fontWeight: '500',
                lineHeight: 70,
                color: colours.GreenDark,
              }}
            >
              BRUH
            </Text>
          </View>
          <TouchableHighlight
            style={{
              width: '90%',
              paddingHorizontal: 24,
              paddingVertical: 12,
              backgroundColor: '#E5E5E5',
              borderRadius: 8,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 24,
            }}
            onPress={() => {
              router.push('/auth/login');
            }}
            underlayColor={'#D1D1D1'}
          >
            <Fragment>
              <Text
                style={{
                  fontSize: 24,
                }}
              >
                Let's Get Started
              </Text>
              <Text
                style={{
                  fontSize: 24,
                }}
              >
                {' //>'}
              </Text>
            </Fragment>
          </TouchableHighlight>
        </>
      )}

      {user?.uid ? (
        user?.username === 'null' ? (
          <Redirect href="/auth/newUser/usernameMusic" />
        ) : (
          <Redirect href="/home" />
        )
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
