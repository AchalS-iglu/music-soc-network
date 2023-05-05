import { useRootNavigationState, useRouter } from 'expo-router';
import { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../lib/auth/context';

export default function App() {
  const router = useRouter();
  const navigationState = useRootNavigationState();
  const { loadUser, user } = useContext(AuthContext);
  useEffect(() => {
    if (!navigationState?.key) return;
    // router.push('/editProfile/playlists');
    loadUser().then(() => {
      if (user.uid) {
        router.replace('/home');
        return;
      } else {
        router.replace('/auth/welcome');
        return;
      }
    });
  }, [navigationState]);
  return <View></View>;
}

const styles = StyleSheet.create({});
