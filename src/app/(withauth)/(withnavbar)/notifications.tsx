import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colours } from '../../../styles/colours';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../../../lib/auth/context';
import {
  cancelFollowRequest,
  acceptFollowRequest,
  getDPFromUID,
  getUsernameFromUID,
} from '../../../lib/firebase/user';

const notifications = () => {
  const { user, setUser } = useContext(AuthContext);
  const [notifs, setNotifs] = useState<any[]>([]);
  useEffect(() => {
    const getNotifs = async () => {
      if (user.pendingIncomingFollowRequests) {
        const notifs = Object.entries(user.pendingIncomingFollowRequests).map(
          async (entry, i) => {
            const [key, value] = entry;
            console.log(entry);
            if (!value || !entry) return <></>;
            return (
              <View style={styles.notifBox} key={i}>
                <Image
                  source={{
                    uri: `${(await getDPFromUID(key)) ?? ''}`,
                  }}
                  style={styles.notifPic}
                />
                <Text style={styles.notifTextBold}>
                  {(await getUsernameFromUID(key)) ?? ''}
                </Text>
                <Text style={styles.notifText}> requested to follow you.</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '20%',
                    alignItems: 'center',
                    marginTop: 15,
                  }}
                >
                  <IconMCI
                    name="check"
                    size={20}
                    color={colours.GreenDark}
                    style={{
                      height: 20,
                      width: 20,
                      marginRight: -8,
                      borderWidth: 1,
                      borderColor: colours.GreenDark,
                      borderRadius: 2,
                    }}
                    onPress={() => {
                      if (!user.uid) return;
                      acceptFollowRequest(user.uid, key, setUser);
                    }}
                  />
                  <IconMCI
                    name="close"
                    size={20}
                    color={colours.Red}
                    style={{
                      height: 20,
                      width: 20,
                      marginRight: -8,
                      borderWidth: 1,
                      borderColor: colours.GreenDark,
                      borderRadius: 2,
                    }}
                    onPress={() => {
                      if (!user.uid) return;
                      cancelFollowRequest(user.uid, key, setUser);
                    }}
                  />
                </View>
              </View>
            );
          }
        );
        setNotifs(await Promise.all(notifs));
      }
    };
    getNotifs();
  }, [user]);

  console.log();
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
            marginTop: 12,
          }}
        >
          Notifications
        </Text>
        <ScrollView
          style={{
            flex: 1,
          }}
        >
          <Text style={styles.notifHeader}>Today</Text>
          {notifs.map((x) => x)}
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
    flex: 1,
    width: '55%',
  },
  notifTextBold: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colours.GreenDark,
  },
});
