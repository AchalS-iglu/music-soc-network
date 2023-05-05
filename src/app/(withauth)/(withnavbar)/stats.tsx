import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const statistics = () => {
  return (
    <View>
      <Text style={{
        marginTop: 40,
        alignSelf:'center',
        fontWeight: 'bold',
        fontSize: 30,
      }}>Analytics</Text>
      <ScrollView style={{
        marginBottom:100
      }}
      nestedScrollEnabled={true}
      >
      <View style={{
        flexDirection:'row',
      }}>
      <View style={{
        marginTop:30,
        marginLeft:20,
        width:150,
        height:150,
        backgroundColor:'grey',
        borderRadius:20,
      }}>
        <Text style={{
          textAlign:'center',
          fontSize: 50,
          fontWeight:'bold',
        }}>500</Text>
        <Text style={{
          textAlign:'center',

        }}>streams</Text>
      </View>
      <View style={{
        marginTop:30,
        marginLeft:20,
        width:150,
        height:150,
        backgroundColor:'grey',
        borderRadius:20,
      }}>
        <Text style={{
          textAlign:'center',
          fontSize: 45,
          fontWeight:'bold',
          marginTop:4,
          marginLeft:1,
        }}>15,000 </Text>
        <Text style={{
          textAlign:'center',
        }}>minutes streamed</Text>
       
      </View>
      </View>
         <View style={{
        flexDirection:'row',
      }}>
      <View style={{
        marginTop:30,
        marginLeft:20,
        width:150,
        height:150,
        backgroundColor:'grey',
        borderRadius:20,
      }}>
        <Text style={{
          textAlign:'center',
          fontSize: 50,
          fontWeight:'bold',
        }}>200</Text>
        <Text style={{
          textAlign:'center',

        }}>different tracks</Text>
      </View>
      <View style={{
        marginTop:30,
        marginLeft:20,
        width:150,
        height:150,
        backgroundColor:'grey',
        borderRadius:20,
      }}>
        <Text style={{
          textAlign:'center',
          fontSize: 45,
          fontWeight:'bold',
          marginTop:4,
          marginLeft:1,
        }}>150 </Text>
        <Text style={{
          textAlign:'center',
        }}>different artists</Text>
       
      </View>
      </View>   
       <View style={{
        flexDirection:'row',
      }}>
      <View style={{
        marginTop:30,
        marginLeft:20,
        width:150,
        height:150,
        backgroundColor:'grey',
        borderRadius:20,
      }}>
        <Text style={{
          textAlign:'center',
          fontSize: 50,
          fontWeight:'bold',
        }}>25</Text>
        <Text style={{
          textAlign:'center',

        }}>hours streamed</Text>
      </View>
      <View style={{
        marginTop:30,
        marginLeft:20,
        width:150,
        height:150,
        backgroundColor:'grey',
        borderRadius:20,
      }}>
        <Text style={{
          textAlign:'center',
          fontSize: 45,
          fontWeight:'bold',
          marginTop:4,
          marginLeft:1,
        }}>180 </Text>
        <Text style={{
          textAlign:'center',
        }}>different albums</Text>
      </View>
      </View>   
      <View style={{
        marginTop:30,
        marginLeft:20,
        borderRadius:20,
        backgroundColor:'grey',
        height:200,
        width: 320,
        padding: 7
      }}>
        <Text style={{
          textAlign:'center',
          marginTop:4,
          fontSize:30,
          fontWeight:'bold'

        }}>Top Tracks Of All Time</Text>
        <ScrollView
          style={{
            flexDirection: 'column',
            width: '100%',

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
  )
}

export default statistics

const styles = StyleSheet.create({})