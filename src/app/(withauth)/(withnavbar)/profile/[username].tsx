import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { colours } from '../../../../styles/colours';
import { AuthContext } from '../../../../lib/auth/context';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { usePathname, useRouter } from 'expo-router';
import {
  cancelFollowRequest,
  getUIDFromUsername,
  getUser,
  sendFollowRequest,
  unfollowUser,
} from '../../../../lib/firebase/user';
import { User_t } from '../../../../lib/models';

const ProfilePage = () => {
  const { user, logout, setUser } = useContext(AuthContext);
  const linkUsername = usePathname().split('/').slice(-1)[0];
  const router = useRouter();

  const [profileUser, setProfileUser] = useState<User_t>({});

  const isOwner = linkUsername === user.username;

  const [kebabOpen, setKebabOpen] = useState<boolean>(false);
  const [followStatus, setFollowStatus] = useState<
    'UNFOLLOWED' | 'PENDING' | 'FOLLOWING'
  >('UNFOLLOWED');

  useEffect(() => {
    if (isOwner) {
      setProfileUser(user);
    } else {
      getUIDFromUsername(linkUsername).then((uid) => {
        if (uid) {
          getUser(uid).then((pfuser) => {
            if (pfuser) {
              setProfileUser(pfuser);
            } else {
              router.push('/404');
            }
          });
          if (user.following && user.following[profileUser.uid ?? '']) {
            setFollowStatus('FOLLOWING');
          } else if (
            user.pendingOutgoingFollowRequests &&
            user.pendingOutgoingFollowRequests[profileUser.uid ?? ''] === true
          ) {
            setFollowStatus('PENDING');
          } else {
            setFollowStatus('UNFOLLOWED');
          }
        } else {
          router.push('/404');
        }
      });
    }
  }, [user]);

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
        {isOwner ? (
          <TouchableHighlight
            style={{
              position: 'absolute',
              right: 16,
              top: -16,
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
        ) : (
          <></>
        )}
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
              profileUser.dp === '' || profileUser.dp
                ? profileUser.dp
                : 'https://img.icons8.com/ios-glyphs/256/user--v1.png',
          }}
        />
        <Text style={styles.name}>{profileUser.username}</Text>
        <Text style={styles.bio}>
          {profileUser.tagline === '' || profileUser.tagline
            ? profileUser.tagline
            : 'unset'}
        </Text>
        <View
          style={{
            ...styles.statsContainer,
            gap: isOwner ? 96 : 8,
          }}
        >
          <View style={styles.stat}>
            {/* <Text style={styles.statNumber}>{user.followersCount ?? '0'}</Text> */}
            <Text style={styles.statNumber}>
              {Object.keys(profileUser.followers ?? {}).length}
            </Text>
            <Text style={styles.statTitle}>Followers</Text>
          </View>
          {isOwner ? (
            <></>
          ) : (
            <>
              {followStatus === 'UNFOLLOWED' ? (
                <TouchableOpacity
                  style={{
                    backgroundColor: colours.GreenWeird,
                    borderRadius: 5,
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: colours.GreenNiceBG,
                    marginHorizontal: 12,
                  }}
                  onPress={async () => {
                    if (!user.uid) return;
                    const followUID = await getUIDFromUsername(linkUsername);
                    if (!followUID) return;
                    console.log(profileUser.username);
                    sendFollowRequest(user.uid, followUID, setUser);
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                      fontFamily: 'sans-serif',
                    }}
                  >
                    Follow
                  </Text>
                </TouchableOpacity>
              ) : followStatus === 'PENDING' ? (
                <TouchableOpacity
                  style={{
                    backgroundColor: colours.GreenWeird,
                    borderRadius: 5,
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: colours.GreenNiceBG,
                    marginHorizontal: 12,
                  }}
                  onPress={async () => {
                    if (!user.uid) return;
                    const followUID = await getUIDFromUsername(linkUsername);
                    if (!followUID) return;
                    cancelFollowRequest(user.uid, followUID, setUser);
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                      fontFamily: 'sans-serif',
                    }}
                  >
                    Cancel Request
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{
                    backgroundColor: colours.GreenWeird,
                    borderRadius: 5,
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: colours.GreenNiceBG,
                    marginHorizontal: 12,
                  }}
                  onPress={async () => {
                    if (!user.uid) return;
                    const followUID = await getUIDFromUsername(linkUsername);
                    if (!followUID) return;
                    unfollowUser(user.uid, followUID, setUser);
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                      fontFamily: 'sans-serif',
                    }}
                  >
                    Unfollow
                  </Text>
                </TouchableOpacity>
              )}
            </>
          )}
          <View style={styles.stat}>
            {/* <Text style={styles.statNumber}>{user.followingCount ?? '0'}</Text> */}
            <Text style={styles.statNumber}>
              {Object.keys(profileUser.following ?? {}).length}
            </Text>
            <Text style={styles.statTitle}>Following</Text>
          </View>
        </View>
        {profileUser.profilePlaylists?.display &&
        profileUser.profilePlaylists.playlists.length > 0 ? (
          <>
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
              {profileUser.profilePlaylists?.playlists.map((playlist) => (
                <Pressable
                  onPress={() => {
                    router.push(playlist.external_urls.spotify);
                  }}
                  key={playlist.id}
                >
                  <View>
                    <Image
                      source={{
                        uri:
                          playlist.images[0]?.url ??
                          'https://picsum.photos/300',
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
          </>
        ) : (
          <></>
        )}
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
          {profileUser.topArtists ? (
            profileUser.topArtists.map((x, i) => (
              <View key={i}>
                <Image
                  source={{
                    uri: x.images[0]?.url ?? 'https://picsum.photos/300',
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
                  {x.name}
                </Text>
              </View>
            ))
          ) : (
            <></>
          )}
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
          {profileUser.topTracks ? (
            profileUser.topTracks.map((song, i) => (
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
                      uri:
                        song.album.images[0].url ?? 'https://picsum.photos/300',
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
                      {song.artists[0].name}
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
                    {Math.floor(song.duration_ms / 60000) +
                      ':' +
                      (((song.duration_ms % 60000) / 1000).toFixed(0).length ==
                      1
                        ? '0' + ((song.duration_ms % 60000) / 1000).toFixed(0)
                        : ((song.duration_ms % 60000) / 1000).toFixed(0))}
                  </Text>
                </View>
              </View>
            ))
          ) : (
            <></>
          )}
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
    flex: 1,
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
