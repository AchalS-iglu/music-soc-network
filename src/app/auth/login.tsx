import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import { colours } from '../../styles/colours';
// antdesign icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { commonStyles } from '../../styles/common';

// welcome > login to spotify  > select username > select genre > songs - recommendation > profile

export default function LogIn() {
  const router = useRouter();
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
        onPress={() => {
          router.push('/auth/newUser/usernameMusic');
        }}
        underlayColor={'#fff'}
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
