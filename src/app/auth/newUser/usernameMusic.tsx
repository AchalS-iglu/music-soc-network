import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { commonStyles } from '../../../styles/common';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { colours } from '../../../styles/colours';
import { useRouter } from 'expo-router';

const newUser = () => {
  const router = useRouter();

  const [username, setUsername] = useState<string>('');
  const [err, setErr] = useState<string>('');

  useEffect(() => {
    if (username.length === 0) {
      setErr('');
    } else if (username.length < 3) {
      setErr('Username must be at least 3 characters');
    } else if (username.length > 20) {
      setErr('Username must be less than 20 characters');
    } else if (username === 'test') {
      setErr('Username is already taken');
    } else {
      setErr('');
    }
  }, [username]);
  return (
    <SafeAreaView
      style={{
        ...commonStyles.standardContainer,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 64,
      }}
    >
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
          Select a username
        </Text>
      </View>
      <View
        style={{
          width: '90%',
          paddingHorizontal: 24,
          paddingVertical: 12,
          backgroundColor: '#E5E5E5',
          borderRadius: 8,
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TextInput
          style={{
            fontSize: 20,
            fontFamily: 'monospace',
            color: colours.GreenNiceBG,
            fontWeight: '400',
            width: '90%',
          }}
          placeholder={'Username'}
          onChangeText={(text) => {
            setUsername(text);
          }}
          value={username}
        />
        <IconAntDesign
          name={
            err.length > 0
              ? 'exclamationcircle'
              : username.length > 0
              ? 'checkcircle'
              : 'questioncircle'
          }
          size={24}
          color={colours.GreenNiceBG}
          style={{
            marginLeft: 12,
            marginTop: 4,
          }}
        />
      </View>
      <View
        style={{
          width: '99%',
          alignItems: 'flex-end',
        }}
      >
        <Text
          style={{
            fontSize: 12,
            paddingHorizontal: 24,
            fontFamily: 'monospace',
            color: colours.Red,
            fontWeight: '400',
            marginTop: 8,
          }}
        >
          {err}
        </Text>
      </View>
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
          Select songs you like
        </Text>
      </View>
      <View
        style={{
          width: '99%',
          alignItems: 'flex-end',
        }}
      >
        <Text
          style={{
            fontSize: 16,
            paddingHorizontal: 24,
            fontFamily: 'monospace',
            color: colours.GreenNiceBG,
            fontWeight: '400',
            marginTop: 8,
          }}
        >
          Pick atleast 3
        </Text>
      </View>
      <View
        style={{
          height: 400,
          marginTop: 12,
          borderWidth: 1,
          borderColor: colours.GreenNiceBG,
          borderRadius: 8,
          paddingVertical: 8,
          paddingHorizontal: 8,
        }}
      >
        <ScrollView
          style={{
            height: '100%',
          }}
        >
          <View style={styles.musicRow}>
            <View style={styles.musicContainer}>
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b27336ab788f78d5026d26a5fe85',
                }}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.musicContainer}>
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b27336ab788f78d5026d26a5fe85',
                }}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.musicContainer}>
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b27336ab788f78d5026d26a5fe85',
                }}
                style={styles.imageStyle}
              />
            </View>
          </View>
          <View style={styles.musicRow}>
            <View style={styles.musicContainer}>
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b27336ab788f78d5026d26a5fe85',
                }}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.musicContainer}>
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b27336ab788f78d5026d26a5fe85',
                }}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.musicContainer}>
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b27336ab788f78d5026d26a5fe85',
                }}
                style={styles.imageStyle}
              />
            </View>
          </View>
          <View style={styles.musicRow}>
            <View style={styles.musicContainer}>
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b27336ab788f78d5026d26a5fe85',
                }}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.musicContainer}>
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b27336ab788f78d5026d26a5fe85',
                }}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.musicContainer}>
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b27336ab788f78d5026d26a5fe85',
                }}
                style={styles.imageStyle}
              />
            </View>
          </View>
          <View style={styles.musicRow}>
            <View style={styles.musicContainer}>
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b27336ab788f78d5026d26a5fe85',
                }}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.musicContainer}>
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b27336ab788f78d5026d26a5fe85',
                }}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.musicContainer}>
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b27336ab788f78d5026d26a5fe85',
                }}
                style={styles.imageStyle}
              />
            </View>
          </View>
          <View style={styles.musicRow}>
            <View style={styles.musicContainer}>
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b27336ab788f78d5026d26a5fe85',
                }}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.musicContainer}>
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b27336ab788f78d5026d26a5fe85',
                }}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.musicContainer}>
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b27336ab788f78d5026d26a5fe85',
                }}
                style={styles.imageStyle}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <TouchableHighlight
        style={{
          width: '90%',
          paddingHorizontal: 24,
          paddingVertical: 12,
          backgroundColor: '#E5E5E5',
          borderRadius: 8,
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 24,
        }}
        onPress={() => {
          router.push('/');
        }}
        underlayColor={'#D1D1D1'}
      >
        <Text
          style={{
            fontSize: 24,
          }}
        >
          Submit
        </Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default newUser;

const styles = StyleSheet.create({
  musicContainer: {
    backgroundColor: 'black',
  },
  musicRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 6,
    marginBottom: 6,
  },
  imageStyle: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
