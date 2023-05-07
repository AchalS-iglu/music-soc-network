import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import { colours } from '../../../styles/colours';
import { AuthContext } from '../../../lib/auth/context';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { useRouter } from 'expo-router';

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  const [kebabOpen, setKebabOpen] = useState<boolean>(false);

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
        <TouchableHighlight
          style={{
            position: 'absolute',
            right: 16,
            top: 0,
            height: 48,
            width: 48,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
          }}
          onPress={() => {
            setKebabOpen(!kebabOpen);
          }}
          underlayColor={colours.BaseB}
          activeOpacity={1}
        >
          <IconEntypo
            name="dots-three-horizontal"
            size={24}
            color={colours.GreenDark}
            style={{}}
          />
        </TouchableHighlight>
        {kebabOpen ? (
          <View
            style={{
              position: 'absolute',
              right: 32,
              top: 32,
              backgroundColor: colours.BaseB,
              borderRadius: 5,
              paddingVertical: 16,
              paddingHorizontal: 16,
              zIndex: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: colours.GreenNiceBG,
            }}
          >
            <Pressable
              onPress={() => {
                router.push('/editProfile');
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                }}
              >
                Edit Profile
              </Text>
            </Pressable>
            <View
              style={{
                borderBottomColor: colours.GreenNiceBG,
                borderBottomWidth: 1,
                width: '80%',
                marginVertical: 8,
              }}
            ></View>
            <Pressable
              onPress={() => {
                router.push('/settings');
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                }}
              >
                Settings
              </Text>
            </Pressable>
            <View
              style={{
                borderBottomColor: colours.GreenNiceBG,
                borderBottomWidth: 1,
                width: '80%',
                marginVertical: 8,
              }}
            ></View>
            <Pressable onPress={logout}>
              <Text
                style={{
                  fontSize: 24,
                }}
              >
                Logout
              </Text>
            </Pressable>
          </View>
        ) : (
          <></>
        )}
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
          {user.tagline === '' || user.tagline ? user.tagline : 'unset'}
        </Text>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            {/* <Text style={styles.statNumber}>{user.followersCount ?? '0'}</Text> */}
            <Text style={styles.statNumber}>20</Text>
            <Text style={styles.statTitle}>Followers</Text>
          </View>
          <View style={styles.stat}>
            {/* <Text style={styles.statNumber}>{user.followingCount ?? '0'}</Text> */}
            <Text style={styles.statNumber}>30</Text>
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
            Playlists
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
          {user.profilePlaylists?.playlists.map((playlist) => (
            <Pressable
              onPress={() => {
                router.push(playlist.external_urls.spotify);
              }}
              key={playlist.id}
            >
              <View>
                <Image
                  source={{
                    uri: playlist.images[0]?.url ?? 'https://picsum.photos/300',
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
                    marginLeft: 8,
                  }}
                >
                  {playlist.name}
                </Text>
              </View>
            </Pressable>
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
                      color: colours.BeigeDark,
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
                    color: colours.BeigeDark,
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
                    color: colours.BeigeDark,
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
    marginTop: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colours.GreenDark,
  },
  bio: {
    fontSize: 15,
    color: colours.GreenNiceBG,
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colours.GreenDark,
  },
  statTitle: {
    fontSize: 16,
    color: colours.GreenNiceBG,
  },
});

export default ProfilePage;
