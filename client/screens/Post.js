import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
} from 'react-native';

export default function Post() {
  const [tweetContent, setTweetContent] = useState(
    'Hey Guys, Check out the Ember app!',
  );

  const tweetNow = () => {
    let twitterParameters = [];
    if (tweetContent)
      twitterParameters.push('text=' + encodeURI(tweetContent));
    const url =
      'https://twitter.com/intent/tweet?'
      + twitterParameters.join('&');
    Linking.openURL(url)
      .then((data) => {
        alert('Twitter Opened');
      })
      .catch(() => {
        alert('Something went wrong');
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Tweet what you did on Ember!
        </Text>
        <TextInput
          value={tweetContent}
          onChangeText={
            (tweetContent) => setTweetContent(tweetContent)
          }
          placeholder={'Enter Tweet Content'}
          style={styles.textInput}
        />
    
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={tweetNow}>
          <Text style={styles.buttonTextStyle}>
            Tweet Now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  buttonStyle: {
    backgroundColor: "blue",
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    width: '15%',
    borderRadius: 5,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  buttonTextStyle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
},
});