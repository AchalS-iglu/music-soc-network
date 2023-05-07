import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { Slot, useRootNavigationState, useRouter } from 'expo-router';
import { AuthContext } from '../../lib/auth/context';

const _layout = () => {
  // const router = useRouter();
  // const navigationState = useRootNavigationState();
  // const { loadUser, user } = useContext(AuthContext);
  // useEffect(() => {
  //   if (!navigationState?.key) return;
  //   //     // // router.push('/editProfile/playlists');
  //   if (!user.uid) return;
  //   router.push('/home');
  //   //     // loadUser();
  // }, []);
  return (
    <>
      <Slot />
    </>
  );
};

export default _layout;

const styles = StyleSheet.create({});
