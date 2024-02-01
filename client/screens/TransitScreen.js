import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as Location from 'expo-location'
import axios from 'axios'

const TransitScreen = () => {
  const [origin, setOrigin] = useState(null)
  const [destination, setDestination] = useState(null)
  const [distanceTraveled, setDistanceTraveled] = useState(null)

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        console.error('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setOrigin(`${location.coords.latitude},${location.coords.longitude}`)
    })()
  }, [])

  const handleStartJourney = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      console.error('Permission to access location was denied')
      return
    }

    let location = await Location.getCurrentPositionAsync({})
    setOrigin(`${location.coords.latitude},${location.coords.longitude}`)
  }

  const handleStopJourney = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      console.error('Permission to access location was denied')
      return
    }

    let location = await Location.getCurrentPositionAsync({})
    setDestination(`${location.coords.latitude},${location.coords.longitude}`)

    const options = {
      method: 'GET',
      url: 'https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix',
      params: {
        origins: origin,
        destinations: destination
      },
      headers: {
        // Get your API key from https://rapidapi.com/trueway/api/trueway-matrix/
        'X-RapidAPI-Key': 'API_KEY_HERE',
        'X-RapidAPI-Host': 'trueway-matrix.p.rapidapi.com'
      }
    }

    axios
      .request(options)
      .then((response) => {
        const distance = response.data.distances[0][0]
        setDistanceTraveled(distance)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleStartJourney}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleStopJourney}>
        <Text style={styles.buttonText}>Stop</Text>
      </TouchableOpacity>

      {
        <View style={styles.distanceInfoContainer}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 10
            }}
          >
            Distance Traveled: {distanceTraveled} meters
          </Text>
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center'
  },
  distanceInfoContainer: {
    marginTop: 20
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    width: '20%',
    alignSelf: 'center',
    marginBottom: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default TransitScreen
