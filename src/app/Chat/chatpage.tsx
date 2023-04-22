import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

const ChatPage = () => {
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
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        inverted // display newest messages at the bottom
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  myMessageContainer: {
    backgroundColor: '#DCF8C5',
    alignSelf: 'flex-end',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  myMessageText: {
    color: '#333',
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
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  sendButton: {
    backgroundColor: '#007AFF',
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
