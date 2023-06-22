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
      <Text
        style={{
          color: colours.Red,
          marginTop: 40,
          fontStyle: 'italic',
          width: '70%',
        }}
      >
        Warning: This will not work properly until the application hits a
        considerable userbase. {`(10,000 >)`}
      </Text>
    </View>
  );
};

export default find;

const styles = StyleSheet.create({});
