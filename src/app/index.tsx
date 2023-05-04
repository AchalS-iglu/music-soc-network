import { useRootNavigationState, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const router = useRouter();
  const navigationState = useRootNavigationState();
  useEffect(() => {
    if (!navigationState?.key) return;
    //  router.push('/home');
    router.push('/auth/login');
  });
  return <View></View>;
}

const styles = StyleSheet.create({});
