import React, { useState } from 'react'
import BottomNavigationR from '../components/BottomNavigationR'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
  Image
} from 'react-native'

export default function Post() {
  const [tweetContent, setTweetContent] = useState(
    `Hey guys, check out @embertechworks! 

Join me on Ember for:
    - Eco-transit
    - Community
    - Rewards
    - Carbon offset

Let's go green!

#Ember`
  )

  const tweetNow = () => {
    let twitterParameters = []
    if (tweetContent) twitterParameters.push('text=' + encodeURI(tweetContent))
    const url =
      'https://twitter.com/intent/tweet?' + twitterParameters.join('&')
    Linking.openURL(url)
      .then((data) => {
        alert('Twitter Opened')
      })
      .catch(() => {
        alert('Something went wrong')
      })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Share your Ember experience!</Text>
        <Image source={require('../assets/ember.jpeg')} style={styles.logo} />

        <TextInput
          value={tweetContent}
          onChangeText={(tweetContent) => setTweetContent(tweetContent)}
          placeholder={'Enter Tweet Content'}
          style={styles.textInput}
          multiline={true}
          numberOfLines={10}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={tweetNow}
        >
          <Text style={styles.buttonTextStyle}>Post</Text>
        </TouchableOpacity>
        <Text style={styles.titleText1}>
          You get 20 coins for tweeting about us.
        </Text>
      </View>
      <BottomNavigationR />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 20,
    marginTop: 70,
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  titleText1: {
    fontSize: 16,
    marginTop: 15,
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: 'blue',
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 120,
    marginTop: 5,
    marginBottom: 10,
    margin: 50,
    width: '25%',
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  textInput: {
    height: 220,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    margin: 40,
    marginLeft: 20,
    marginRight:20,
    width: 300,
    alignSelf: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20
  }
})
