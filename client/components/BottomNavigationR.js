import React, { useState } from 'react'
import { BottomNavigation } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const BottomNavigationR = () => {
  const [index, setIndex] = useState(0)

  const routes = [
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'profile', title: 'Profile', icon: 'user' }
  ]

  const renderScene = () => <View style={styles.scene} />

  const renderIcon = ({ route, focused, color }) => {
    let iconName

    switch (route.key) {
      case 'home':
        iconName = 'home'
        break
      case 'profile':
        iconName = 'user'
        break
      default:
        iconName = 'circle'
    }

    return <Icon name={iconName} size={25} color={color} />
  }

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderIcon={renderIcon}
      style={styles.bottomNavigation}
    />
  )
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: 'white'
  },
  bottomNavigation: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
})

export default BottomNavigationR
