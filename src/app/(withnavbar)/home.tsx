import { useRootNavigationState, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colours } from '../../styles/colours';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconIonic from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';


export default function App() {
  const router = useRouter();
  const navigationState = useRootNavigationState();
  useEffect(() => {
      if (!navigationState?.key) return;
      // router.push('/auth/welcome');
    });
   return (
     <View style={{ flex: 1,
     marginBottom: 60 }}>
      {/* <TouchableOpacity
        style={{
          backgroundColor: '#ccc',
          bottom: '50%',
          padding: 10,
          borderRadius: 50,
        }}
        onPress={() => {
          // Do something when the icon is pressed
          // blehhh
        }}
      >
        <Icon name="rocket" size={30} color="#900" />
      </TouchableOpacity> */}
    <View
      style={{
        flex: 1,
        backgroundColor: colours.BaseA,
      }}
    >
      <SafeAreaView
        style={{
          paddingHorizontal:17,
        }}
      >
        <View
          style={{
            paddingTop:20,
            justifyContent: 'space-between',
            flexDirection: 'row'
          }}
        >
         <Text style={{
         fontSize:20,
         fontWeight:'bold'
         }}>@kewl_beans</Text>
         <IconIonic
         name='chatbubble-ellipses-outline'
         size={24}
         color={colours.GreenDark}
         onPress={() => {
          router.push('/Chat')
         }}
         />
        </View>
        <View style={{
          paddingVertical:20,
          paddingHorizontal: 8,
          borderRadius: 5,
          borderWidth: 1,
          marginVertical: 8,
          borderColor: colours.GreenDark,
        }}>
         <Text style={{
          fontSize:25,
          fontWeight:'bold',
          textAlign:'center'
         }}>Soulmates</Text>
         <Text style={{
          textAlign:'center',
          fontSize:18,
          marginBottom: 8
         }}>Find other people that have the same music taste as you</Text>
         <View style={{
          borderRadius:10,
          backgroundColor:"#d5d5d5",
           paddingHorizontal: 16,
           paddingVertical: 8,
         }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>

          <Text style={{
            color:colours.Teal,
            fontStyle:'italic',
            marginLeft:5
          }}>Search for soulmates</Text>
          <Icon
          name='chevron-right'
          size={12}
          color={'gray'}
          />
          </View>
         </View>
        </View>
         <View
          style={{
            paddingTop:20,

          }}
        >
          <Text
            style={{
              fontSize: 15,
              textAlign: 'left',
              fontWeight: 'bold',
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
                }}
              >
                Video Games-Lana 
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
