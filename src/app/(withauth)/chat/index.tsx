import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { colours } from '../../../styles/colours';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Chat = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        backgroundColor: colours.BaseA,
      }}
    >
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderBottomColor: colours.GreenNice,
          backgroundColor: colours.BaseA,
          zIndex: 1,
          paddingVertical: 12,
        }}
      >
        {/* <Image
          source={require('../../components/common/icons/backChevron.svg')}
          style={{
            height: 36,
            width: 36,
            marginHorizontal: 8,
          }}
        /> */}
        <IconIonicons
          name="chevron-back"
          size={24}
          color={colours.GreenDark}
          style={{
            marginHorizontal: 8,
          }}
          onPress={() => {
            router.back();
          }}
        />
        {/* <Text> Chat </Text> */}
        {/* <Image
          source={require('../../components/common/icons/groupAdd.svg')}
          style={{
            height: 36,
            width: 36,
            marginHorizontal: 8,
          }}
        /> */}
        <IconAntDesign
          name="addusergroup"
          size={24}
          color={colours.GreenDark}
          style={{
            marginHorizontal: 8,
          }}
        />
      </View>
      {/* search bar */}
      {/* <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            marginHorizontal: 16,
            fontSize: 24,
            fontWeight: 'bold',
            color: colours.GreenDark,
          }}
        >
          Messages
        </Text>
      </View> */}
      <ScrollView
        style={{
          width: '100%',
        }}
      >
        <View
          style={{
            height: 32,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 16,
            borderRadius: 8,
            borderWidth: 1,
            backgroundColor: colours.BaseB,
            marginTop: 12,
            marginBottom: 12,
          }}
        >
          <IconIonicons
            name="search"
            size={24}
            color={colours.GreenDark}
            style={{
              marginHorizontal: 8,
            }}
          />
          <Text> Search </Text>
        </View>
        {[
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'John',
            message: 'Hello',
            time: '12:00',
          },
        ].map(({ name, message, time }, i) => (
          <Pressable
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 8,
              borderBottomWidth: 1,
              borderBottomColor: colours.GreenNice,
            }}
            key={i}
            onPress={() => {
              router.push('/chat/chatpage');
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 50,
              }}
            >
              {/* <Image
                source={require('../../components/common/icons/person.svg')}
                style={{
                  height: 48,
                  width: 48,
                  marginHorizontal: 16,
                }}
              /> */}
              <Image
                source={{
                  uri: 'https://picsum.photos/300',
                }}
                style={{
                  height: 48,
                  width: 48,
                  marginHorizontal: 16,
                  borderRadius: 50,
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: colours.GreenDark,
                  }}
                >
                  {name}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: colours.GreenDark,
                  }}
                >
                  {message}
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 12,
                color: colours.GreenDark,
                marginHorizontal: 16,
              }}
            >
              {time}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({});
