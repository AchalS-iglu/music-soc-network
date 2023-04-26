import { Slot } from 'expo-router';
import { Image, StyleSheet, View } from 'react-native';
import { colours } from '../../styles/colours';

export default function HomeLayout() {
  return (
    <>
      {/* <View style={topbarStyles.bar}>
        <View style={topbarStyles.iconContainer}>booba</View>
        <View style={topbarStyles.iconContainer}>booba right</View>
      </View> */}
      <Slot />
      <View style={navbarStyles.bar}>
        <View style={navbarStyles.iconContainer}>
          <Image
            source={require('../../components/common/icons/home.svg')}
            style={navbarStyles.icon}
          />
        </View>
        <View style={navbarStyles.iconContainer}>
          <Image
            source={require('../../components/common/icons/notifs.svg')}
            style={navbarStyles.icon}
          />
        </View>
        <View style={navbarStyles.iconContainer}>
          <Image
            source={require('../../components/common/icons/search.svg')}
            style={navbarStyles.icon}
          />
        </View>
        <View style={navbarStyles.iconContainer}>
          <Image
            source={require('../../components/common/icons/barChart.svg')}
            style={navbarStyles.icon}
          />
        </View>
        <View style={navbarStyles.iconContainer}>
          <Image
            source={require('../../components/common/icons/person.svg')}
            style={navbarStyles.icon}
          />
        </View>
      </View>
    </>
  );
}

const topbarStyles = StyleSheet.create({
  bar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 36,
    maxHeight: 36,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});

const navbarStyles = StyleSheet.create({
  bar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colours.BaseA,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 36,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  iconContainer: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
