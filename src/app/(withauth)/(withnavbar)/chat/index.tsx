import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { colours } from '../../../../styles/colours';
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

            backgroundColor: '#d5d5d5',
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
          <Text
            style={{
              fontStyle: 'italic',
            }}
          >
            {' '}
            Search for friends
          </Text>
        </View>
        {[
          {
            name: 'John',
            message: 'Hello',
            time: '17:00',
          },
          {
            name: 'Ava',
            message: 'Hey',
            time: '15:30',
          },
          {
            name: 'Lucas',
            message: 'Hi there!',
            time: '11:24',
          },
          {
            name: 'Olivia',
            message: 'How you doin?',
            time: '18:50',
          },
          {
            name: 'Elijah',
            message: 'Did you listen to that song?',
            time: '05:20',
          },
          {
            name: 'Isabella',
            message: 'Bro listen to All too Well',
            time: '17:44',
          },
          {
            name: 'Ethan',
            message: 'bruv',
            time: '19:23',
          },
          {
            name: 'Sofia',
            message: 'join the group session',
            time: '02:34',
          },
          {
            name: 'William',
            message: 'Hello',
            time: '20:56',
          },
          {
            name: 'Mia',
            message: 'you up?',
            time: '12:00',
          },
          {
            name: 'Benji',
            message: 'Hows it going? ',
            time: '12:00',
          },
          {
            name: 'Emma',
            message: 'Sup?',
            time: '12:00',
          },
          {
            name: 'Liam',
            message: 'wyd',
            time: '12:00',
          },
          {
            name: 'Harper',
            message: 'lets make a blend',
            time: '12:00',
          },
          {
            name: 'Noah',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'Logan',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'Emilia',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'Abigail',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'Taylor',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'Jake',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'Joe',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'Harry',
            message: 'Hello',
            time: '12:00',
          },
          {
            name: 'Selena',
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
              router.push('/chat/ad2dd7fd-a20b-4a88-8266-4770e8e48150');
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
