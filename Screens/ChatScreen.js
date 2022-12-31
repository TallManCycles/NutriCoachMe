/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import {firebase} from '../config'

const ChatScreen = ({user,route}) => {
const [messages, setMessages] = useState([]);
const {uid} = route.params;

  const onSend = (msgArray) => {
    const msg = msgArray[0]
    const usermsg = {
      ...msg,
      sentBy: user.uid,
      sentTo: uid,
      createdAt: new Date()
    }
    setMessages(previousMessages => GiftedChat.append(previousMessages, usermsg))
    const chatid = uid > user.uid ? user.uid+ "-" +uid : uid+ "-" +user.uid
    
    firebase.firestore().collection('Chats')
    .doc(chatid)
    .collection('messages')
    .add({...usermsg,createdAt:firebase.firestore.FieldValue.serverTimestamp()})
  }

  const getAllMessages = async () => {
    const chatid = uid > user.uid ? user.uid+"-"+uid : uid+"-"+user.uid   
    const msgResponse = await firestore().collection('Chats')
    .doc(chatid)
    .collection('messages')
    .orderBy('createdAt', "desc")
    .get()
    const allTheMsgs = msgResponse.docs.map(docSanp => {
      return {
        ...docSanp.data(),
        createdAt:docSanp.data().createdAt.toDate()
      }
    })
    setMessages(allTheMsgs)
  }
  
  useEffect(() => {
    getAllMessages()
  },[]);

  return (
    <GiftedChat 
    style={{flex: 1}}
    messages={messages}
    onSend={text => onSend(text)}
    user={{ 
      _id: user.uid,
    }}
    />)
  }
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  card: {
    width: '100%',
    height: 'auto',
    marginHorizontal: 4,
    marginVertical: 6,
    paddingTop: 100,
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userImage: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  userImageST: {
    width: 50,
    height: 50,
    borderRadius: 25,
  }, 
  textArea: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5,
    paddingLeft: 10,
    width: 200,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  userText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '900',
    fontFamily: 'Verdana'
  },
  msgTime: {
    textAlign: 'right',
    fontSize: 11,
    marginTop: -20,
  },
  msgContent: {
    paddingTop: 5,
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default ChatScreen;