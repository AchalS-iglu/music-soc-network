import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext, AuthProvider } from '../lib/auth/context';
import { Slot, usePathname } from 'expo-router';

const Layout = () => {
  const path = usePathname();
  console.log(path);

  const { loading } = useContext(AuthContext);

  return (
    <AuthProvider>
      {loading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <Slot />
      )}
    </AuthProvider>
  );
};

export default Layout;

const styles = StyleSheet.create({});
