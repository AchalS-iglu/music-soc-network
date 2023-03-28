import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeLayout() {
  return (
    <>
      <Slot />
      <View style={navbarStyles.bar}>
        <View style={navbarStyles.icon}>
          <Image
            source={require('../components/common/icons/home.svg')}
            style={{
              width: 24,
              height: 24,
            }}
          />
        </View>
        <View style={navbarStyles.icon}></View>
        <View style={navbarStyles.icon}></View>
        <View style={navbarStyles.icon}></View>
        <View style={navbarStyles.icon}></View>
        {/* <View>
          <Text>Notifications</Text>
        </View>
        <View>
          <Text>Find/Search</Text>
        </View>
        <View>
          <Text>Spotify Shit</Text>
        </View>
        <View>
          <Text>Profile</Text>
        </View> */}
      </View>
      <StatusBar style="auto" />
    </>
  );
}

const navbarStyles = StyleSheet.create({
  bar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#bbb090',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 36,
    maxHeight: 36,
    width: '100%',
  },
  icon: {
    flex: 1,
    width: '1/5',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
