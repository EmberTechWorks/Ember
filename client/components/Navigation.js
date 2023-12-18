// Navigation.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
