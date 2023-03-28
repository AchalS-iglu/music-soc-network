import { Redirect } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const user = null;

  if (!user) {
    Redirect({ href: '/SignIn' });
  }

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
