import { useRootNavigationState, useRouter } from 'expo-router';
import { useContext, useEffect } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colours } from '../../../styles/colours';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconIonic from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native';
import { AuthContext } from '../../../lib/auth/context';
import { TouchableOpacity } from 'react-native';

export default function App() {
  const router = useRouter();
  const navigationState = useRootNavigationState();

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!navigationState?.key) return;
    // router.push('/auth/welcome');
  });
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
                placeholder="Search"
                placeholderTextColor={colours.GreenDark}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: colours.BeigeDark,
                  borderRadius: 10,
                  padding: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                onPress={() => {
                  // Do something when the icon is pressed
                  // blehhh
                }}
              >
                <IconIonic name="search" size={24} color={colours.GreenDark} />
              </TouchableOpacity>
            </View>
          </View>
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
                  uri: 'https://i.pinimg.com/564x/fb/b6/18/fbb6180970c063ca7c3b5135cb347999.jpg',
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
                  }}
                >
                  Brooklyn Baby
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: colours.GreenDark,
                  }}
                >
                  Lana Del Rey
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
                    User_1{' '}
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
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
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
              </View>
            </View>
          </View>
          <View
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
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
