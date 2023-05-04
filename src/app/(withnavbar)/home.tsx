import { useRootNavigationState, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colours } from '../../styles/colours';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';


export default function App() {
  const router = useRouter();
  const navigationState = useRootNavigationState();
  useEffect(() => {
      if (!navigationState?.key) return;
      // router.push('/auth/welcome');
    });
   return (
     <View style={{ flex: 1,
     marginBottom: 60 }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#ccc',
          padding: 10,
          borderRadius: 50,
        }}
        onPress={() => {
          // Do something when the icon is pressed
        }}
      >
        <Icon name="rocket" size={30} color="#900" />
      </TouchableOpacity>
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
            Welcome bruv
          </Text>
        </View>
      </SafeAreaView>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({});
