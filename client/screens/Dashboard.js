import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card, Title, Button } from "react-native-paper";
import { getAuth, signOut } from "firebase/auth";
import { CommonActions } from "@react-navigation/native";

const Dashboard = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      console.log("User signed out successfully!");

      // Navigate to the Login screen upon successful logout
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Login" }],
        })
      );
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require("../assets/ember.jpeg")} style={styles.logo} />
          <Title style={styles.title}>ember</Title>
        </View>
        <View style={styles.headerRight}>
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
            <Card.Content>{/* CONTENT */}</Card.Content>
          </Card>

          <Card style={styles.card1}>
            <Card.Content>{/* CONTENT */}</Card.Content>
          </Card>
        </View>
        <View style={styles.cardContainer}>
          <Card style={styles.card}>
            <Card.Content>{/* CONTENT */}</Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content>{/* CONTENT */}</Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content>{/* CONTENT */}</Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content>{/* CONTENT */}</Card.Content>
          </Card>
        </View>

        <View style={styles.cardContainer}>
          <Card style={styles.card2}>
            <Card.Content>{/* CONTENT */}</Card.Content>
          </Card>

          <Card style={styles.card2}>
            <Card.Content>{/* CONTENT */}</Card.Content>
          </Card>

          <Card style={styles.card2}>
            <Card.Content>{/* CONTENT */}</Card.Content>
          </Card>

          <Card style={styles.card2}>
            <Card.Content>{/* CONTENT */}</Card.Content>
          </Card>
        </View>
      </View>
      {/* Empty space */}
      <View style={styles.emptySpace} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginTop: 16,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoutButton: {
    backgroundColor: "blue",
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
  cardCover: {
    backgroundColor: "#FFFFED",
    borderRadius: 40,
    padding: 5,
    margin: 10,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16,
  },
  card2: {
    flex: 1,
    marginHorizontal: 8,
    height: 50,
  },
  card: {
    flex: 1,
    marginHorizontal: 8,
    height: 50,
    marginBottom: -20,
  },
  card1: {
    flex: 1,
    marginHorizontal: 8,
    height: 80,
    marginBottom: -10,
  },
  emptySpace: {
    flex: 1,
  },
});

export default Dashboard;
