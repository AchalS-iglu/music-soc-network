import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colours } from '../../../styles/colours';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

const notifications = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: colours.GreenDark,
            marginVertical: 12,
          }}
        >
          Notifications
        </Text>
        <ScrollView
          style={{
            flex: 1,
            paddingHorizontal: 12,
          }}
        >
          <Text style={styles.notifHeader}>Today</Text>
          <View style={styles.notifBox}>
            <Image
              source={{
                uri: 'https://picsum.photos/3000',
              }}
              style={styles.notifPic}
            />
            <Text style={styles.notifTextBold}> User_1 </Text>
            <Text style={styles.notifText}>requested to follow you.</Text>
          </View>
          <View style={styles.notifBox}>
            <Image
              source={{
                uri: 'https://picsum.photos/3000',
              }}
              style={styles.notifPic}
            />
            <Text style={styles.notifTextBold}> User_2 </Text>
            <Text style={styles.notifText}>accepted your follow request.</Text>
          </View>
          <View style={styles.notifBox}>
            <Image
              source={{
                uri: 'https://picsum.photos/3000',
              }}
              style={styles.notifPic}
            />
            <Text style={styles.notifTextBold}> User_3 </Text>
            <Text style={styles.notifText}>liked your profile.</Text>
          </View>
          <View style={styles.notifBox}>
            <Image
              source={{
                uri: 'https://picsum.photos/3000',
              }}
              style={styles.notifPic}
            />
            <Text style={styles.notifTextBold}> User_4 </Text>
            <Text style={styles.notifText}>invited you to a chat group.</Text>
          </View>
          <View style={styles.notifBox}>
            <Image
              source={{
                uri: 'https://picsum.photos/3000',
              }}
              style={styles.notifPic}
            />
            <Text style={styles.notifTextBold}> User_1 </Text>
            <Text style={styles.notifText}>posted a new playlist.</Text>
          </View>
          <View style={styles.notifBox}>
            {/* <Image
              source={{
                uri: 'https://picsum.photos/3000',
              }}
              style={styles.notifPic}
            /> */}
            <IconMCI
              name="security"
              size={50}
              color={colours.GreenDark}
              style={styles.notifPic}
            />
            <Text style={styles.notifTextBold}> Security: </Text>
            <Text style={styles.notifText}>Suspicious login detected.</Text>
          </View>
          <Text style={styles.notifHeader}>Yesterday</Text>
          {[...Array(12)].map((i) => (
            <View style={styles.notifBox} key={i}>
              <Image
                source={{
                  uri: 'https://picsum.photos/3000',
                }}
                style={styles.notifPic}
              />
              <Text style={styles.notifTextBold}> User_1 </Text>
              <Text style={styles.notifText}>posted a new playlist.</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default notifications;

const styles = StyleSheet.create({
  notifBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomColor: colours.GreenDark,
  },
  notifPic: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 4,
  },
  notifHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    paddingVertical: 12,
    borderBottomColor: colours.GreenDark,
  },
  notifText: {
    fontSize: 18,
  },
  notifTextBold: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
