import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import { colours } from '../styles/colours';
// antdesign icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

// welcome > login to spotify  > select username > select genre > songs - recommendation > profile

export default function LogIn() {
  console.log('test');
  return (
    <View style={styles.container}>
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
            color: '#44403C',
            fontWeight: '400',
          }}
        >
          Connect either your Spotify or Apple Music
        </Text>
      </View>
      <TouchableHighlight
        style={{
          width: '90%',
          alignItems: 'center',
          borderRadius: 8,
          marginTop: 24,
          marginBottom: 12,
        }}
        onPress={() => {
          console.log('test');
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
      <TouchableHighlight
        style={{
          width: '90%',
          alignItems: 'center',
          borderRadius: 8,
        }}
        onPress={() => {
          console.log('test');
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.BaseA,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
