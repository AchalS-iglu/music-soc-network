import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { commonStyles } from '../../../styles/common';
import VinylLoader from '../../../components/common/vinylLoader';
import { colours } from '../../../styles/colours';

const find = () => {
  return (
    <View style={commonStyles.standardContainer}>
      <Text
        style={{
          fontSize: 36,
          fontWeight: 'bold',
          color: colours.GreenDark,
        }}
      >
        Finding Soulmates
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: colours.GreenDark,
          marginBottom: 40,
          fontStyle: 'italic',
        }}
      >
        Looking through 12345 users
      </Text>
      <VinylLoader />
    </View>
  );
};

export default find;

const styles = StyleSheet.create({});
