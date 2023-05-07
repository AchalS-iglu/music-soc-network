import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import { colours } from '../../../styles/colours';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const ChatPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi!', user: 'me' },
    { id: 2, text: "Hey, what's up?", user: 'other' },
    { id: 3, text: 'Not much, you?', user: 'me' },
    { id: 4, text: 'Same here', user: 'other' },
  ]);
  const [text, setText] = useState('');

  const handleSend = () => {
    const newMessage = { id: messages.length + 1, text, user: 'me' };
    setMessages([...messages, newMessage]);
    setText('');
  };

  const renderItem = ({
    item,
  }: {
    item: { id: number; text: string; user: string };
  }) => (
    <View
      style={
        item.user === 'me'
          ? styles.myMessageContainer
          : styles.otherMessageContainer
      }
    >
      <Text
        style={
          item.user === 'me' ? styles.myMessageText : styles.otherMessageText
        }
      >
        {item.text}
      </Text>
    </View>
  );

  return (
    <View
      style={{
        backgroundColor: colours.BaseA,
        flex: 1,
      }}
    >
      <SafeAreaView style={styles.container}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: colours.GreenNice,
            backgroundColor: colours.BaseA,
            zIndex: 1,
            paddingVertical: 8,
          }}
        >
          <IconIonicons
            name="chevron-back"
            size={24}
            color={colours.GreenDark}
            style={{
              marginLeft: 8,
            }}
            onPress={() => {
              router.back();
            }}
          />
          <Image
            source={{
              uri: 'https://picsum.photos/300',
            }}
            style={{
              height: 48,
              width: 48,
              borderRadius: 50,
              marginLeft: 16,
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
            {'User'}
          </Text>
        </View>
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          inverted // display newest messages at the bottom
          style={{
            paddingHorizontal: 12,
          }}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            onChangeText={(text) => setText(text)}
            value={text}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  myMessageContainer: {
    backgroundColor: colours.GreenWeird,
    alignSelf: 'flex-end',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  myMessageText: {
    color: '#d5d5d5',
    fontSize: 16,
  },
  otherMessageContainer: {
    backgroundColor: '#E5E5EA',
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  otherMessageText: {
    color: '#333',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: colours.GreenNiceBG,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#E5E5EA',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  sendButton: {
    backgroundColor: colours.RustyOrange,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ChatPage;
