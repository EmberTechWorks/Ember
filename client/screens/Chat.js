import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import {
  GiftedChat,
  Bubble,
  InputToolbar,
  Send
} from 'react-native-gifted-chat'
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot
} from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import { auth, database } from '../firebaseConfig'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import moment from 'moment'

export default function Chat() {
  const [messages, setMessages] = useState([])
  const navigation = useNavigation()

  const onSignOut = () => {
    signOut(auth).catch((error) => console.log('Error logging out: ', error))
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={onSignOut}>
            <AntDesign
              name="logout"
              size={24}
              color="red"
              style={{ marginRight: 20 }}
            />
          </TouchableOpacity>
        </View>
      )
    })
  }, [navigation])

  useLayoutEffect(() => {
    const collectionRef = collection(database, 'chats')
    const q = query(collectionRef, orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log('querySnapshot unsubscribe')
      setMessages(
        querySnapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user
        }))
      )
    })
    return unsubscribe
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    )

    const { _id, createdAt, text, user } = messages[0]
    addDoc(collection(database, 'chats'), {
      _id,
      createdAt,
      text,
      user
    })
  }, [])

  const renderBubble = (props) => {
    const formattedTime = moment(props.currentMessage.createdAt).format(
      'h:mm A'
    )
    return (
      <View
        style={[
          styles.bubble,
          props.position === 'right' && styles.rightBubble
        ]}
      >
        <Text>{props.currentMessage.text}</Text>
        <Text style={styles.timeText}>{formattedTime}</Text>
      </View>
    )
  }

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={false}
      showUserAvatar={false}
      onSend={(messages) => onSend(messages)}
      messagesContainerStyle={{
        backgroundColor: '#EEE7E1',
        borderRadius: 20
      }}
      textInputStyle={{
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 12,
        marginTop: 6,
        borderWidth: 0.5,
        borderColor: 'grey'
      }}
      renderInputToolbar={(props) => (
        <InputToolbar
          containerStyle={{ backgroundColor: 'lightgrey' }}
          {...props}
        />
      )}
      renderBubble={renderBubble}
      user={{
        _id: auth?.currentUser?.email,
        avatar: 'https://i.pravatar.cc/700'
      }}
    />
  )
}

const styles = StyleSheet.create({
  bubble: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#f0f0f0'
  },
  rightBubble: {
    backgroundColor: '#EDFFE0'
  },
  timeText: {
    fontSize: 10,
    color: '#888',
    marginTop: 3
  }
})
