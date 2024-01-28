import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';
import TransitScreen from '../screens/TransitScreen';
import Profile from '../screens/Profile';
import Statistics from '../screens/Statistics';
import Chat from '../screens/Chat';
import Post from '../screens/Post';

const Stack = createStackNavigator();

export default function UserStack() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard">

            <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
            />
             <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="TransitScreen"
            component={TransitScreen}
            options={{ headerShown: true }}
            />
              <Stack.Screen
            name="Statistics"
            component={Statistics}
            options={{ headerShown: true }}
            />
             <Stack.Screen
            name="Post"
            component={Post}
            options={{ headerShown: true }}
            />
            <Stack.Screen
            name="Chat"
            component={Chat}
            options={{ headerShown: true }}
            />
        </Stack.Navigator>
        </NavigationContainer>
    );
    }
    