import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Chat = () => {
  return (
    <View>
      <View
        style={{
          height: 36,
          width: '100%',
        }}
      >
        <Image source={require('../components/common/icons/backChevron.svg')} />
        <Text> Chat </Text>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
