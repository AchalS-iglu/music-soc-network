import React, { useContext, useEffect, useState } from 'react';
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
import { usePathname, useRouter } from 'expo-router';
import { Message_T } from '../../../lib/models';
import { AuthContext } from '../../../lib/auth/context';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../../lib/firebase/app';
import {
  getDPFromUID,
  getUsernameFromUID,
  sendMessage,
} from '../../../lib/firebase/user';
import { uuidv4 } from '@firebase/util';

const ChatPage = () => {
  const router = useRouter();
  const recieverUID = usePathname().split('/').slice(-1)[0];
  const [recieverUser, setRecieverUser] = useState<string>('');
  const [recieverDP, setRecieverDP] = useState<string>('');
  const [messages, setMessages] = useState<Message_T[]>([]);
  const [text, setText] = useState('');

  const { user } = useContext(AuthContext);

  useEffect(() => {
    getUsernameFromUID(recieverUID).then((res) => setRecieverUser(res ?? ''));
    getDPFromUID(recieverUID).then((res) => setRecieverDP(res ?? ''));
    if (!user.uid) return;
    const collectionRef = collection(db, 'Users', user.uid, recieverUID);

    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data() as Message_T));
    });

    return () => {
      // Unsubscribe from the Firestore listener when component unmounts
      unsubscribe();
    };
  }, []);

  const handleSend = async () => {
    if (!user.uid) return;
    setText('');
    await sendMessage(user.uid, recieverUID, {
      createdAt: new Date().getTime(),
      id: uuidv4(),
      reciever: recieverUID,
      sender: user.uid,
      text: text,
      type: 'TEXT',
      updatedAt: new Date().getTime(),
    });
  };

  const renderItem = ({ item }: { item: Message_T }) => (
    <View
      style={
        item.sender === user.uid
          ? styles.myMessageContainer
          : styles.otherMessageContainer
      }
    >
      <Text
        style={
          item.sender === user.uid
            ? styles.myMessageText
            : styles.otherMessageText
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
              uri: recieverDP !== '' ? recieverDP : 'https://picsum.photos/200',
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
            {recieverUser}
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
    backgroundColor: colours.BeigeDark,
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
    backgroundColor: colours.OliveGreen,
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
