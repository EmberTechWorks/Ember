import React from 'react'
import {
  Dimensions,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import BottomNavigationR from '../components/BottomNavigationR'
import { Card, Title, Button, Text } from 'react-native-paper'
import { getAuth, signOut } from 'firebase/auth'
import { CommonActions } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Carousel from 'react-native-reanimated-carousel'
// import axios from "axios"; for fetching instagram posts

const images = [
  require('../assets/ember.jpeg'),
  require('../assets/ember.jpeg'),
  require('../assets/ember.jpeg'),
  require('../assets/ember.jpeg'),
  require('../assets/ember.jpeg'),
  require('../assets/ember.jpeg')
]

const width = Dimensions.get('window').width
const Dashboard = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      const auth = getAuth()
      await signOut(auth)
      console.log('User signed out successfully!')

      // Navigate to the Login screen upon successful logout
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Login' }]
        })
      )
    } catch (error) {
      console.error('Error signing out:', error.message)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require('../assets/ember.jpeg')}
            style={styles.Toplogo}
          />
          <Title style={styles.title}>ember</Title>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Icon
              name="search"
              size={30}
              color="#000"
              style={styles.searchIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Icon
              name="user"
              size={30}
              color="#000"
              style={styles.profileCardlogo}
            />
          </TouchableOpacity>
          <Button
            style={styles.logoutButton}
            labelStyle={styles.buttonText}
            onPress={handleLogout}
          >
            Logout
          </Button>
        </View>
      </View>
      <View style={styles.cardCover}>
        <View style={styles.cardContainer}>
          <Card style={styles.card1}>
            <Card.Content>
              <Text style={styles.content1}>Daily Reduction</Text>
              <Icon
                name="circle-o-notch"
                size={50}
                color="#000"
                style={styles.cardlogo2}
              />
            </Card.Content>
          </Card>
          <Card style={styles.card1}>
            <Card.Content>
              <Text style={styles.content1}>Global Position</Text>
              <Icon
                name="line-chart"
                size={50}
                color="#000"
                style={styles.cardlogo2}
              />
            </Card.Content>
          </Card>
        </View>
        <View style={styles.cardContainer}>
          <Card style={styles.card}>
            <Card.Content style={styles.centeredContent}>
              <TouchableOpacity
                onPress={() => navigation.navigate('TransitScreen')}
              >
                <Icon
                  name="bus"
                  size={30}
                  color="#000"
                  style={styles.cardlogo1}
                />
                <Text style={styles.content2}>Public Transit</Text>
              </TouchableOpacity>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content style={styles.centeredContent}>
              <Icon2
                name="walk"
                size={30}
                color="#000"
                style={styles.cardlogo1}
              />
              <Text style={styles.content2}>Walk/Cycle</Text>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content style={styles.centeredContent}>
              <Icon1
                name="puzzle-piece"
                size={30}
                color="#000"
                style={styles.cardlogo1}
              />
              <Text style={styles.content2}>Challenges</Text>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content style={styles.centeredContent}>
              <TouchableOpacity onPress={() => navigation.navigate('Post')}>
                <Icon2
                  name="create"
                  size={30}
                  color="#000"
                  style={styles.cardlogo1}
                />
                <Text style={styles.content2}>Create Post</Text>
              </TouchableOpacity>
            </Card.Content>
          </Card>
        </View>

        <View style={styles.cardContainer}>
          <Card style={styles.card2}>
            <Card.Content style={styles.centeredContent}>
              <Icon
                name="cart-plus"
                size={30}
                color="#000"
                style={styles.cardlogo1}
              />

              <Text style={styles.content3}>Marketplace</Text>
            </Card.Content>
          </Card>

          <Card style={styles.card2}>
            <Card.Content style={styles.centeredContent}>
              <Icon
                name="gift"
                size={30}
                color="#000"
                style={styles.cardlogo1}
              />
              <Text style={styles.content3}>Buy Coupons</Text>
            </Card.Content>
          </Card>

          <Card style={styles.card2}>
            <Card.Content style={styles.centeredContent}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Statistics')}
              >
                <Icon
                  name="pie-chart"
                  size={30}
                  color="#000"
                  style={styles.cardlogo1}
                />
                <Text style={styles.content3}>Statistics</Text>
              </TouchableOpacity>
            </Card.Content>
          </Card>

          <Card style={styles.card2}>
            <Card.Content style={styles.centeredContent}>
              <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <Icon2
                  name="people-circle"
                  size={30}
                  color="#000"
                  style={styles.cardlogo1}
                />

                <Text style={styles.content3}>Community</Text>
              </TouchableOpacity>
            </Card.Content>
          </Card>
        </View>
      </View>

      {/* Carousel */}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 100
        }}
      >
        <Carousel
          loop
          width={250}
          height={250}
          autoPlay={true}
          data={images.map((image, index) => ({ id: index, uri: image }))}
          scrollAnimationDuration={1000}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <ImageBackground
                source={item.uri}
                style={{ width: 250, height: 250 }}
              />
            </View>
          )}
        />
      </View>
      <BottomNavigationR />
      {/* Empty space */}
      <View style={styles.emptySpace} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -20
  },
  content1: {
    fontSize: 12,
    marginTop: -15,
    fontWeight: 'bold'
  },
  content2: {
    fontSize: 6,
    marginTop: 5
  },
  content3: {
    fontSize: 6,
    marginTop: 5
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8
  },
  Toplogo: {
    width: 40,
    height: 40,
    marginRight: 8,
    marginLeft: 5
  },
  cardlogo1: {
    width: 30,
    height: 30,
    marginTop: -10,
    marginLeft: 5,
    marginRight: 5
  },
  cardlogo2: {
    width: 50,
    height: 50,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 0
  },
  profileCardlogo: {
    width: 50,
    height: 50,
    marginTop: 20,
    marginLeft: 20,
    marginRight: -10
  },
  centeredContent: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoutButton: {
    backgroundColor: 'blue',
    marginRight: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 15
  },
  cardCover: {
    backgroundColor: '#FFFFED',
    borderRadius: 55,
    padding: 5,
    margin: 10,
    marginTop: 25
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 14
  },
  card2: {
    flex: 1,
    marginHorizontal: 3,
    height: 55,
    backgroundColor: '#FFFFED',
    marginBottom: 0
  },
  card: {
    flex: 1,
    marginHorizontal: 3,
    height: 55,
    marginBottom: -20,
    backgroundColor: '#FFFFED'
  },
  card1: {
    flex: 1,
    marginHorizontal: 15,
    height: 80,
    marginBottom: -20,
    marginTop: -5,
    backgroundColor: '#FFFFED'
  },
  emptySpace: {
    flex: 1
  },
  searchIcon: {
    marginLeft: 0
  }
})

export default Dashboard
