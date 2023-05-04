import {
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { commonStyles } from '../styles/common';
import { colours } from '../styles/colours';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../lib/auth/context';
import { useRouter } from 'expo-router';

const editProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const router = useRouter();
  const [username, setUsername] = useState(user?.username ?? '');
  const [tagline, setTagline] = useState(user?.tagline ?? '');

  const handleSubmit = async () => {
    if (user) {
      updateUser({
        username,
        tagline,
      });
      router.back();
    }
  };

  return (
    <View
      style={{
        ...commonStyles.standardContainer,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
      }}
    >
      <View
        style={{
          marginTop: 48,
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '90%',
        }}
      >
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginBottom: 32,
            }}
          >
            <IconIonicons
              name="chevron-back"
              size={24}
              color={colours.GreenDark}
              style={{
                marginRight: 8,
              }}
              onPress={() => {
                router.back();
              }}
            />
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: colours.GreenDark,
              }}
            >
              Edit Profile
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 32,
            }}
          >
            <View style={styles.inputContainer}>
              <Text style={styles.inputHeading}>Username</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Username"
                placeholderTextColor={colours.GreenDark}
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputHeading}>Tagline</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Bio"
                placeholderTextColor={colours.GreenDark}
                onChangeText={(text) => setTagline(text)}
                value={tagline}
              />
            </View>
            <View style={styles.inputContainer}>
              <Pressable>
                <Text
                  style={{
                    ...styles.inputHeading,
                    textDecorationLine: 'underline',
                    marginTop: 16,
                  }}
                >
                  Select playlists to display on profile
                </Text>
              </Pressable>
              <Switch
                trackColor={{ false: colours.Teal, true: colours.Teal }}
                thumbColor={'#d5d5d5'}
                ios_backgroundColor="#3e3e3e"
                value={true}
              />
            </View>
            <View style={styles.inputContainer}>
              <Pressable>
                <Text
                  style={{
                    ...styles.inputHeading,
                    textDecorationLine: 'underline',
                    marginTop: 16,
                  }}
                >
                  Select artists to display on profile
                </Text>
              </Pressable>
              <Switch
                trackColor={{ false: colours.Teal, true: colours.Teal }}
                thumbColor={'#d5d5d5'}
                ios_backgroundColor="#3e3e3e"
                value={false}
              />
            </View>
            <View style={styles.inputContainer}>
              <Pressable>
                <Text
                  style={{
                    ...styles.inputHeading,
                    textDecorationLine: 'underline',
                    marginTop: 16,
                  }}
                >
                  Select songs to display on profile
                </Text>
              </Pressable>
              <Switch
                trackColor={{ false: colours.Teal, true: colours.Teal }}
                thumbColor={'#d5d5d5'}
                ios_backgroundColor="#3e3e3e"
                value={true}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
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
            underlayColor={'#D1D1D1'}
            onPress={handleSubmit}
          >
            <Text
              style={{
                fontSize: 24,
              }}
            >
              Submit
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default editProfile;

const styles = StyleSheet.create({
  inputHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colours.GreenDark,
    marginBottom: 8,
  },
  inputField: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colours.GreenDark,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colours.GreenDark,
    minWidth: 120,
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});
