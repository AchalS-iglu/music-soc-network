import { Slot, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { colours } from '../../../styles/colours';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconMaterialC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';

export default function HomeLayout() {
  const router = useRouter();
  return (
    <>
      {/* <View style={topbarStyles.bar}>
        <View style={topbarStyles.iconContainer}>booba</View>
        <View style={topbarStyles.iconContainer}>booba right</View>
      </View> */}
      <ScrollView
        style={{
          marginBottom: 46,
          height: '100%',
          width: '100%',
          backgroundColor: colours.BaseA,
        }}
        nestedScrollEnabled={true}
      >
        <Slot />
      </ScrollView>
      <View style={navbarStyles.bar}>
        <Pressable
          onPress={() => {
            router.push('/home');
          }}
          style={navbarStyles.iconContainer}
        >
          <IconFoundation
            name="home"
            size={navbarStyles.icon.height}
            color={colours.GreenDark}
            style={navbarStyles.icon}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            router.push('/notifications');
          }}
          style={navbarStyles.iconContainer}
        >
          <IconMaterialC
            name="bell"
            size={navbarStyles.icon.height}
            color={colours.GreenDark}
            style={navbarStyles.icon}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            router.push('/chat');
          }}
          style={navbarStyles.iconContainer}
        >
          <IconIonicons
            name="chatbubble-ellipses-sharp"
            size={navbarStyles.icon.height}
            color={colours.GreenDark}
            style={navbarStyles.icon}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            router.push('/stats');
          }}
          style={navbarStyles.iconContainer}
        >
          <IconFoundation
            name="graph-bar"
            size={navbarStyles.icon.height}
            color={colours.GreenDark}
            style={navbarStyles.icon}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            router.push('/profile');
          }}
          style={navbarStyles.iconContainer}
        >
          <IconIonicons
            name="person"
            size={navbarStyles.icon.height}
            color={colours.GreenDark}
            style={navbarStyles.icon}
          />
        </Pressable>
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
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingVertical: 8,
  },
  iconContainer: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  icon: {
    width: 30,
    height: 30,
  },
});
