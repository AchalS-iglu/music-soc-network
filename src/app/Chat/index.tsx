import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colours } from '../../styles/colours';

const Chat = () => {
  return (
    <View>
      <View
        style={{
          height: 48,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderBottomColor: colours.GreenNice,
        }}
      >
        <Image
          source={require('../../components/common/icons/backChevron.svg')}
          style={{
            height: 36,
            width: 36,
            marginHorizontal: 8,
          }}
        />
        {/* <Text> Chat </Text> */}
        <Image
          source={require('../../components/common/icons/groupAdd.svg')}
          style={{
            height: 36,
            width: 36,
            marginHorizontal: 8,
          }}
        />
      </View>
      {/* search bar */}
      <View
        style={{
          height: 32,
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 16,
          marginVertical: 8,
          borderRadius: 8,
          borderWidth: 1,
          backgroundColor: colours.BaseB,
        }}
      >
        <Image
          source={require('../../components/common/icons/search.svg')}
          style={{
            height: 24,
            width: 24,
            marginHorizontal: 8,
          }}
        />
        <Text> Search </Text>
      </View>
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
          height: '20%',
          width: '100%',
        }}
      >
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
        ].map(({ name, message, time }) => (
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 8,
              borderBottomWidth: 1,
              borderBottomColor: colours.GreenNice,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                source={require('../../components/common/icons/person.svg')}
                style={{
                  height: 48,
                  width: 48,
                  marginHorizontal: 16,
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
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
