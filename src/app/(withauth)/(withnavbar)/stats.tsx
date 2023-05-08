import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { commonStyles } from '../../../styles/common';
import { colours } from '../../../styles/colours';
import { SafeAreaView } from 'react-native-safe-area-context';

const statistics = () => {
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
          Analytics
        </Text>
        <ScrollView
          style={{
            marginBottom: 100,
            width: '100%',
            height: '100%',
          }}
          nestedScrollEnabled={true}
        >
          <View style={styles.boxesRowContainer}>
            <View style={styles.box}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 50,
                  fontWeight: 'bold',
                }}
              >
                500
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                }}
              >
                streams
              </Text>
            </View>
            <View style={styles.box}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 45,
                  fontWeight: 'bold',
                  marginTop: 4,
                  marginLeft: 1,
                }}
              >
                15,000{' '}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                }}
              >
                minutes streamed
              </Text>
            </View>
          </View>
          <View style={styles.boxesRowContainer}>
            <View style={styles.box}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 50,
                  fontWeight: 'bold',
                }}
              >
                200
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                }}
              >
                different tracks
              </Text>
            </View>
            <View style={styles.box}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 45,
                  fontWeight: 'bold',
                  marginTop: 4,
                  marginLeft: 1,
                }}
              >
                150{' '}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                }}
              >
                different artists
              </Text>
            </View>
          </View>
          <View style={styles.boxesRowContainer}>
            <View style={styles.box}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 50,
                  fontWeight: 'bold',
                }}
              >
                25
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                }}
              >
                hours streamed
              </Text>
            </View>
            <View style={styles.box}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 45,
                  fontWeight: 'bold',
                  marginTop: 4,
                  marginLeft: 1,
                }}
              >
                180{' '}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                }}
              >
                different albums
              </Text>
            </View>
          </View>
          <View style={styles.topTracksBox}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 30,
                fontWeight: 'bold',
              }}
            >
              Top Tracks Of All Time
            </Text>
            <ScrollView
              style={{
                flexDirection: 'column',
                width: '100%',
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
                {
                  name: 'Paris',
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
                {
                  name: 'Paris',
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
                {
                  name: 'Paris',
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
                          color: 'black',
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
                        marginLeft: 40,
                        color: 'black',
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
                        marginLeft: 0,
                        color: 'black',
                      }}
                    >
                      {song.time}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default statistics;

const styles = StyleSheet.create({
  boxesRowContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 32,
    gap: 24,
    height: 96,
    marginVertical: 12,
  },
  box: {
    backgroundColor: colours.BeigeDark,
    borderRadius: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topTracksBox: {
    backgroundColor: colours.BeigeDark,
    borderRadius: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 32,
    padding: 12,
    height: 360,
    marginVertical: 12,
  },
});
