import { useRootNavigationState, useRouter } from 'expo-router';
import { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../lib/auth/context';

export default function App() {
  const router = useRouter();
  const navigationState = useRootNavigationState();
  const { loadUser, user } = useContext(AuthContext);
  useEffect(() => {
    // if (!navigationState?.key) return;
    //  router.push('/home');
    // router.push('/editProfile/playlists');
    if (user.uid) return;
    loadUser();
  }, []);
  return <View></View>;
}

const styles = StyleSheet.create({});
