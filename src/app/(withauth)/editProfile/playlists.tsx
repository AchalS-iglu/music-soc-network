import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { commonStyles } from '../../../styles/common';
import { colours } from '../../../styles/colours';

const playlists = () => {
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
          paddingHorizontal: 24,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: colours.GreenDark,
          }}
        >
          Select Playlists
        </Text>
      </View>
    </View>
  );
};

export default playlists;

const styles = StyleSheet.create({});
