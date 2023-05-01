import { Redirect, useRootNavigationState, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { commonStyles } from '../../styles/common';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colours } from '../../styles/colours';

export default function App() {
  const router = useRouter();
  const navigationState = useRootNavigationState();
  useEffect(() => {
    if (!navigationState?.key) return;
    // router.push('/auth/welcome');
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colours.BaseA,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SafeAreaView
        style={{
          height: '100%',
        }}
      >
        <View
          style={{
            width: '100%',
            margin: 8,
            backgroundColor: colours.GreenWeird,
          }}
        >
          <Text
            style={{
              fontSize: 32,
            }}
          >
            Testfeafewfaefawfaweffeawfwefawefweaf
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
