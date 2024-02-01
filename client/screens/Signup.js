import React, { useState } from 'react'
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image
} from 'react-native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { CommonActions } from '@react-navigation/native'

export default function Signup({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      console.log('User signed up successfully!')

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Login' }]
        })
      )
    } catch (error) {
      console.error('Error signing up:', error.message)
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/ember.jpeg')}
        style={{ width: 60, height: 60, borderRadius: 18, marginBottom: 10 }}
      />
      <Text
        style={{
          color: 'black',
          fontSize: 25,
          fontWeight: 'bold',
          marginBottom: 20
        }}
      >
        Welcome!
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <Text style={{ color: 'black', fontWeight: 'bold' }}>
        Already have an account?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  input: {
    height: 40,
    width: '75%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  loginText: {
    marginTop: 10,
    color: 'blue',
    fontSize: 16
  }
})
