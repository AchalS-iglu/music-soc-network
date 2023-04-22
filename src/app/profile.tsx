import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FaBell } from 'react-icons/fa';

const TopNotificationBar = () => {
  return (
    <View style={{
        flex:1,
        width:"100%",
        height:32,
        alignItems:"center"
    }}>
       <Image
       style={{
        height:32,
        width:32,
       }}
       source={require("../components/common/icons/barChart.svg")} />
      </View>
    
    );
};

const ProfilePage = () => {
  return (
    <View style={styles.container}>
        {/* <TopNotificationBar /> */}
        <Image
       style={{
        height:32,
        width:32,
       }}
       source={require("../components/common/icons/barChart.svg")} />
     <Image
      style={styles.profileImage}
   source={{ uri: 'https://img.icons8.com/ios-glyphs/256/user--v1.png' }}
      />
      <Text style={styles.name}>Joe Alwyn</Text>
      <Text style={styles.bio}>Swiftie</Text>
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>1,000</Text>
          <Text style={styles.statTitle}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>500</Text>
          <Text style={styles.statTitle}>Following</Text>
        </View>         
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 15,
    color: '#777',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statTitle: {
    fontSize: 16,
    color: '#777',
  },
});

export default ProfilePage;   
   
