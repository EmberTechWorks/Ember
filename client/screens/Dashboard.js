import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { getAuth, signOut } from 'firebase/auth'; // Import necessary Firebase auth functions
import { CommonActions } from '@react-navigation/native';

const Dashboard = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      console.log('User signed out successfully!');

      // Navigate to the Login screen upon successful logout
      navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      }));

    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Dashboard;
