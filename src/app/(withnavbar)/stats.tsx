import { ScrollView, StyleSheet, Text, View } from 'react-native'
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
      }}>
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
        height:150,
        width: 320,
      }}>
        <Text style={{}}>Top Tracks</Text>
        </View> 
        </ScrollView>  
    </View>
  )
}

export default statistics

const styles = StyleSheet.create({})