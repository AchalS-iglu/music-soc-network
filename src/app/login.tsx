import { StyleSheet, Text, View, TextInput } from 'react-native';
import { colours } from '../styles/colours';

// welcome > login to spotify  > select username > select genre > songs - recommendation > profile

export default function SignIn() {
  console.log('test');
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>SignIn</Text>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}
      >
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.BaseA,
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: colours.Red,
    borderWidth: 2,
    borderRadius: 10,
    width: '75%',
    marginBottom: 10,
    padding: 10,
    maxWidth: 320,
  },
});
