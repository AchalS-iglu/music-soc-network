import { Redirect, useRootNavigationState, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const router = useRouter();
  const navigationState = useRootNavigationState();
  useEffect(() => {
    if (!navigationState?.key) return;
    // router.push('/login');
  });
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
