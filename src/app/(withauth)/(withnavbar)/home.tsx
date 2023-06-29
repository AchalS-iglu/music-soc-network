import { useRootNavigationState, useRouter } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colours } from '../../../styles/colours';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconIonic from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native';
import { AuthContext } from '../../../lib/auth/context';
import { TouchableOpacity } from 'react-native';
import {
  getPlaybackState,
  getTopArtists,
  getTopTracks,
} from '../../../lib/spotify/user';
import { User_t } from '../../../lib/models';
import { searchUsers } from '../../../lib/firebase/user';

export default function App() {
  const router = useRouter();
  const navigationState = useRootNavigationState();

  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<User_t[]>([]);

  const [currentlyPlaying, setCurrentlyPlaying] = useState<{
    isPlaying: boolean;
    progressMs: number | null;
    item: {
      album_type: 'compilation';
      total_tracks: number;
      available_markets: string[];
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      album: {
        images: {
          url: string;
          height: number;
          width: number;
        }[];
      };
      name: string;
      release_date: string;
      release_date_precision: 'year';
      restrictions: {
        reason: 'market';
      };
      type: 'album';
      uri: string;
      copyrights: {
        text: string;
        type: string;
      }[];
      external_ids: {
        isrc: string;
        ean: string;
        upc: string;
      };
      genres: string[];
      label: string;
      popularity: number;
      album_group: 'compilation';
      artists: {
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: 'artist';
        uri: string;
      }[];
    } | null;
  }>({
    isPlaying: false,
    progressMs: null,
    item: null,
  });

  const { user, accessToken, updateUser } = useContext(AuthContext);

  useEffect(() => {
    // if (!navigationState?.key) return;
    if (!accessToken) return;
    getPlaybackState(accessToken).then((val) => {
      if (!val) return;
      setCurrentlyPlaying(val);
    });
    getTopArtists(accessToken).then((val) => {
      if (!val) return;
      updateUser({
        topArtists: val,
      });
    });
    getTopTracks(accessToken).then((val) => {
      if (!val) return;
      updateUser({
        topTracks: val,
      });
    });
  }, []);

  // useEffect(() => {
  //   if (!isSearching) {
  //     if (searchQuery !== '') {
  //       setIsSearching(true);
  //     }
  //   }
  // }, [searchQuery]);

  const handleSearch = async () => {
    console.log(searchQuery);
    const res = await searchUsers(searchQuery);
    setSearchResults(res);
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: colours.BaseA,
        }}
      >
        <SafeAreaView
          style={{
            paddingHorizontal: 16,
          }}
        >
          <View
            style={{
              marginTop: 12,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              marginBottom: 12,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: colours.GreenDark,
              }}
            >
              @{user.username}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                gap: 4,
                width: '60%',
              }}
            >
              <TextInput
                style={{
                  backgroundColor: '#d5d5d5',
                  borderRadius: 10,
                  padding: 8,
                  flex: 1,
                  width: '75%',
                  height: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                placeholder="Search users"
                placeholderTextColor={colours.GreenDark}
                onChangeText={(text) => setSearchQuery(text)}
                value={searchQuery}
              />
              {isSearching ? (
                <TouchableOpacity
                  style={{
                    backgroundColor: colours.BeigeDark,
                    borderRadius: 10,
                    padding: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    setIsSearching(false);
                  }}
                >
                  <IconIonic name="close" size={24} color={colours.GreenDark} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{
                    backgroundColor: colours.BeigeDark,
                    borderRadius: 10,
                    padding: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    if (searchQuery.length < 1) return;
                    setIsSearching(true);
                    handleSearch();
                  }}
                >
                  <IconIonic
                    name="search"
                    size={24}
                    color={colours.GreenDark}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
          {isSearching ? (
            <ScrollView
              style={{
                flex: 1,
              }}
            >
              {searchResults.length > 0 ? (
                <>
                  {searchResults.map((user) => (
                    <TouchableOpacity
                      key={user.uid}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingVertical: 8,
                        borderBottomWidth: 1,
                        borderBottomColor: colours.GreenDark,
                      }}
                      onPress={() => {
                        router.push(`/profile/${user.username}`);
                      }}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                      >
                        <Image
                          source={{
                            uri: user.dp,
                          }}
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                          }}
                        />
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: colours.GreenDark,
                            marginLeft: 8,
                          }}
                        >
                          {user.username}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          backgroundColor: colours.BeigeDark,
                          borderRadius: 10,
                          padding: 8,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                        onPress={() => {
                          router.push(`/profile/${user.username}`);
                        }}
                      >
                        <IconIonic
                          name="arrow-forward"
                          size={24}
                          color={colours.GreenDark}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  ))}
                </>
              ) : (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: colours.GreenDark,
                    }}
                  >
                    User not found
                  </Text>
                </View>
              )}
            </ScrollView>
          ) : (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 4,
                }}
              >
                <View
                  style={{
                    backgroundColor: colours.BeigeDark,
                    borderRadius: 10,
                    padding: 8,
                    flex: 1,
                    width: '50%',
                    height: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={{
                      uri:
                        currentlyPlaying.isPlaying &&
                        currentlyPlaying.item?.album.images
                          ? currentlyPlaying.item?.album.images[0].url
                          : 'https://i.scdn.co/image/ab67706c0000bebb1cbab273ab5b8ec7b7f062f6',
                    }}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontStyle: 'italic',
                        color: colours.GreenDark,
                      }}
                    >
                      Currently Playing...{' '}
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginLeft: 4,
                        color: colours.GreenDark,
                        overflow: 'hidden',
                        width: '60%',
                      }}
                    >
                      {currentlyPlaying.isPlaying
                        ? currentlyPlaying.item?.name
                        : 'Nothing'}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: colours.GreenDark,
                      }}
                    >
                      {currentlyPlaying.isPlaying
                        ? currentlyPlaying.item?.artists[0].name
                        : 'Nothing'}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: colours.BeigeDark,
                    borderRadius: 10,
                    padding: 8,
                    flex: 1,
                    flexDirection: 'row',
                    marginBottom: 12,
                    width: '50%',
                    height: '100%',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      source={{
                        uri: 'https://picsum.photos/300',
                      }}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                      }}
                    />
                    <View
                      style={{
                        flexDirection: 'column',
                      }}
                    >
                      <Text
                        style={{
                          marginLeft: 8,
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: colours.GreenDark,
                        }}
                      >
                        No one{' '}
                        <Text
                          style={{
                            fontSize: 12,
                            fontStyle: 'italic',
                            fontWeight: 'normal',
                          }}
                        >
                          is listening
                        </Text>
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          marginLeft: 4,
                          fontStyle: 'italic',
                          color: colours.GreenDark,
                        }}
                      >
                        to the same song.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  paddingVertical: 20,
                  paddingHorizontal: 16,
                  borderRadius: 10,
                  marginTop: 4,
                  marginBottom: 12,
                  backgroundColor: colours.BeigeDark,
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: colours.GreenDark,
                  }}
                >
                  Soulmates
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 18,
                    marginBottom: 8,
                    color: colours.GreenDark,
                  }}
                >
                  Find other people that have the same music taste as you
                </Text>
                <View
                  style={{
                    borderRadius: 10,
                    backgroundColor: '#d5d5d5',
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                    onPress={() => router.push('/soulmates/find')}
                  >
                    <Text
                      style={{
                        color: colours.Teal,
                        fontStyle: 'italic',
                        marginLeft: 5,
                      }}
                    >
                      Search for soulmates
                    </Text>
                    <Icon
                      name="chevron-right"
                      size={12}
                      color={colours.BeigeDark}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              {/* <View
                style={{
                  paddingTop: 0,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: colours.GreenDark,
                  }}
                >
                  Recently Played{' '}
                </Text>
              </View>
              <ScrollView
                style={{
                  flexDirection: 'row',

                  columnGap: 8,
                  gap: 8,
                }}
                horizontal={true}
              >
                {[...Array(6)].map((i) => (
                  <View key={i}>
                    <Image
                      source={{
                        uri: 'https://i.pinimg.com/236x/6e/22/f5/6e22f534311eab2f56d04173de8d6bb6.jpg',
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
                        color: colours.GreenDark,
                      }}
                    >
                      Video Games-Lana
                    </Text>
                  </View>
                ))}
              </ScrollView>
              <View
                style={{
                  paddingTop: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: colours.GreenDark,
                  }}
                >
                  Your Top Mixes{' '}
                </Text>
              </View>
              <ScrollView
                style={{
                  flexDirection: 'row',

                  columnGap: 8,
                  gap: 8,
                }}
                horizontal={true}
              >
                {[...Array(6)].map((i) => (
                  <View key={i}>
                    <Image
                      source={{
                        uri: 'https://i.pinimg.com/564x/ed/b9/f8/edb9f87e765bdaa4897b4cf8c824cd1e.jpg',
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
                        color: colours.GreenDark,
                      }}
                    >
                      Indie Mix
                    </Text>
                  </View>
                ))}
              </ScrollView>
              <View
                style={{
                  paddingTop: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: colours.GreenDark,
                  }}
                >
                  Your Playlists{' '}
                </Text>
              </View>
              <ScrollView
                style={{
                  flexDirection: 'row',

                  columnGap: 8,
                  gap: 8,
                }}
                horizontal={true}
              >
                {[...Array(6)].map((i) => (
                  <View key={i}>
                    <Image
                      source={{
                        uri: 'https://i.pinimg.com/564x/1c/7f/78/1c7f78218e032927125fd7f4365c3f96.jpg',
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
                        color: colours.GreenDark,
                      }}
                    >
                      summer'23
                    </Text>
                  </View>
                ))}
              </ScrollView> */}
            </>
          )}
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
