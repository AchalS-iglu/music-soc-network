import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colours } from '../../styles/colours';
import { AuthContext } from '../../lib/auth/context';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  return (
    <View
      style={{
        paddingVertical: 48,
        backgroundColor: colours.BaseA,
      }}
    >
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          style={styles.profileImage}
          source={{
            uri:
              user.dp === '' || user.dp
                ? user.dp
                : 'https://img.icons8.com/ios-glyphs/256/user--v1.png',
          }}
        />
        <Text style={styles.name}>{user.username}</Text>
        <Text style={styles.bio}>
          {user.bioline === '' || user.bioline ? user.bioline : 'unset'}
        </Text>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{user.followersCount ?? '0'}</Text>
            <Text style={styles.statTitle}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{user.followingCount ?? '0'}</Text>
            <Text style={styles.statTitle}>Following</Text>
          </View>
        </View>
        <View
          style={{
            width: '90%',
          }}
        >
          <Text
            style={{
              fontSize: 15,
              textAlign: 'left',
              marginTop: 24,
              marginBottom: 3,
              fontWeight: 'bold',
            }}
          >
            My Playlists{' '}
          </Text>
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
          {[...Array(6)].map((i) => (
            <View key={i}>
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

              <Text
                style={{
                  fontSize: 10,
                }}
              >
                Red-Taylor Swift
              </Text>
            </View>
          ))}
        </ScrollView>
        <View
          style={{
            width: '90%',
          }}
        >
          <Text
            style={{
              fontSize: 15,
              textAlign: 'left',
              marginTop: 24,
              marginBottom: 3,
              fontWeight: 'bold',
            }}
          >
            Top Artists{' '}
          </Text>
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
          {[...Array(6)].map((i) => (
            <View key={i}>
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
              <Text
                style={{
                  fontSize: 10,
                }}
              >
                Taylor Swift
              </Text>
            </View>
          ))}
        </ScrollView>
        <Text
          style={{
            fontSize: 15,
            marginTop: 24,
            marginLeft: 20,
            fontWeight: 'bold',
            alignSelf: 'flex-start',
          }}
        >
          My Songs
        </Text>

        <ScrollView
          style={{
            flexDirection: 'column',
            width: '90%',

            height: 130,
          }}
          horizontal={false}
          nestedScrollEnabled={true}
        >
          {[
            {
              name: 'Anti Hero',
              pic: '',
              artist: 'Taylor Swift',
              album: 'Midnights',
              time: '3:20',
            },
            {
              name: 'Karma',
              pic: '',
              artist: 'Taylor Swift',
              album: 'Midnights',
              time: '3:20',
            },
            {
              name: 'Maroon',
              pic: '',
              artist: 'Taylor Swift',
              album: 'Midnights',
              time: '3:20',
            },
            {
              name: 'Paris',
              pic: '',
              artist: 'Taylor Swift',
              album: 'Midnights',
              time: '3:20',
            },
          ].map((song, i) => (
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
              }}
              key={i}
            >
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <Image
                  source={{
                    uri: 'https://i.scdn.co/image/ab6761610000e5eb5a00969a4698c3132a15fbb0',
                  }}
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: 3,
                    marginTop: 10,
                  }}
                />

                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      marginTop: 10,
                      marginLeft: 7,
                    }}
                  >
                    {song.name}
                  </Text>
                  <Text
                    style={{
                      fontStyle: 'italic',
                      fontSize: 10,
                      marginLeft: 7,
                      color: 'grey',
                    }}
                  >
                    {song.artist}
                  </Text>
                </View>
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 12,
                    marginTop: 17,
                    marginLeft: 70,
                    color: 'grey',
                  }}
                >
                  {song.album}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    marginTop: 17,
                    marginLeft: 70,
                    color: 'grey',
                  }}
                >
                  {song.time}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
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
