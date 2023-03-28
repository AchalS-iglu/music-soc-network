import { Slot, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colours } from '../styles/colours';

export default function HomeLayout() {
  return (
    <>
      <Slot />
      <View style={navbarStyles.bar}>
        <View style={navbarStyles.iconContainer}>
          <Image
            source={require('../components/common/icons/home.svg')}
            style={navbarStyles.icon}
          />
        </View>
        <View style={navbarStyles.iconContainer}>
          <Image
            source={require('../components/common/icons/notifs.svg')}
            style={navbarStyles.icon}
          />
        </View>
        <View style={navbarStyles.iconContainer}>
          <Image
            source={require('../components/common/icons/search.svg')}
            style={navbarStyles.icon}
          />
        </View>
        <View style={navbarStyles.iconContainer}>
          <Image
            source={require('../components/common/icons/barChart.svg')}
            style={navbarStyles.icon}
          />
        </View>
        <View style={navbarStyles.iconContainer}>
          <Image
            source={require('../components/common/icons/person.svg')}
            style={navbarStyles.icon}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </>
  );
}

const navbarStyles = StyleSheet.create({
  bar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colours.BaseA,
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 36,
    maxHeight: 36,
    width: '100%',
  },
  iconContainer: {
    flex: 1,
    width: '1/5',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
