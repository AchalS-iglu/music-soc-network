import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { colours } from '../../styles/colours';
import IconFoundation from 'react-native-vector-icons/Foundation';

const ProfilePage = () => {
  return (
    <ScrollView style={{
      marginBottom: 24
      }}>
      <View
        style={{
          width: '100%',
          justifyContent: 'flex-start',
        }}
      >
        
       
        {/* <Image
          style={{
            height: 32,
            width: 32,
          }}
          source={require('../../components/common/icons/barChart.svg')}
          /> */}
        {/* <Image
          style={{
            height: 32,
            width: 32,
          }}
          source={require('../../components/common/icons/share.svg')}
        /> */}
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <Image
          style={{
            height: 32,
            width: 32,
          }}
          source={require('../../components/common/icons/barChart.svg')}
        /> */}
       
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
        <View style={{
        width: '90%'
      }}>
          <Text style={{fontSize: 15,
          textAlign:'left',
          marginTop: 24,
          marginBottom: 3,
          fontWeight:'bold',
          
          }}>My Playlists </Text>
           </View>
        <ScrollView
          style={{
            flexDirection: 'row',
            width: '90%',
            columnGap: 8,
            gap: 8,
          }}
          horizontal={true}
        >
          {
            [ 
               
              ...Array(6)
            ].map(((i) => (
              <View> 
              
                <Image
                  source={{
                    uri: 'https://i.scdn.co/image/ab67616d0000b273318443aab3531a0558e79a4d',
                  }}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 10,
                    marginRight: 3,
                  }}
                />

                <Text style={{
                  fontSize:10,
                }}>Red-Taylor Swift</Text>
                
              </View> 
            )))
          }
          
        </ScrollView>
        <View style={{
        width: '90%'
      }}>
          <Text style={{fontSize: 15,
          textAlign:'left',
          marginTop: 24,
          marginBottom: 3,
          fontWeight:'bold',
          
          }}>Top Artists </Text>
           </View>
        <ScrollView
          style={{
            flexDirection: 'row',
            width: '90%',

            
            columnGap: 8,
            gap: 8,
          }}
          horizontal={true}
        >
          {
            [
              ...Array(6)
            ].map(((i) => (
              <View>
                <Image
                  source={{
                    uri: 'https://i.scdn.co/image/ab6761610000e5eb5a00969a4698c3132a15fbb0',
                  }}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 10,
                    marginRight: 3,
                  }}
                />
                <Text style={{
                  fontSize:10,
                }}>Taylor Swift</Text>
              </View>
            )))
          }
        </ScrollView>
        <ScrollView style={{
          flexDirection: 'column',
          width:'90%' 
        }}>
          <Text style={{
            fontSize:15,
            marginTop:24,
            fontWeight:'bold',
        }}>My Songs</Text>

          <Text style={{
            fontSize:12,
            marginTop:8,
          }}>1. I bet you think about me</Text>

          <Text style={{
            fontSize:12,
            marginTop:8,
          }}>2. Karma</Text>

           <Text style={{
            fontSize:12,
            marginTop:8,
          }}>3. Willow</Text>

           <Text style={{
            fontSize:12,
            marginTop:8,
          }}>4. Lavender Haze</Text>

          <Text style={{
            fontSize:12,
            marginTop:8,
          }}>5. Getaway Car</Text>





        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 75,
    marginBottom: 5,
    marginTop: 20,
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
