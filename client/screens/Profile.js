import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  Platform,
  Button
} from 'react-native'
import { getDoc, setDoc, doc } from 'firebase/firestore'
import { auth, database, storage } from '../firebaseConfig'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import ImageUpload from './Image'

export default function Profile() {
  const navigation = useNavigation()

  const [profileData, setProfileData] = useState({
    user_id: '',
    username: '',
    profilePhoto: ''
  })

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const docRef = doc(database, 'profiles', auth.currentUser.email)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setProfileData(docSnap.data())
        } else {
          console.log('No such document!')
        }
      } catch (error) {
        console.error('Error fetching profile data:', error)
      }
    }

    fetchProfileData()
  }, [])

  const updateProfile = async () => {
    try {
      const docRef = doc(database, 'profiles', auth.currentUser.email)
      await setDoc(docRef, profileData)

      console.log('Profile updated successfully!')
    } catch (error) {
      console.error('Error updating profile:', error)
    }
  }

  const handleChangeUsername = (text) => {
    setProfileData((prevData) => ({
      ...prevData,
      username: text,
      user_id: auth.currentUser.email
    }))
  }

  const navigateToDashboard = () => {
    navigation.navigate('Dashboard')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToDashboard} style={styles.backButton}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeUsername}
          value={profileData.username}
        />
        <TouchableOpacity onPress={updateProfile} style={styles.button}>
          <Text style={styles.buttonText}>Update Username</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20
  },
  formContainer: {
    width: '80%',
    alignItems: 'center'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  myProfileText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  imageContainer: {
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8
  },
  errorText: {
    color: 'red',
    marginTop: 16
  },
  header: {
    fontSize: 20,
    marginBottom: 16
  }
})
