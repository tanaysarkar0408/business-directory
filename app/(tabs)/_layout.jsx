import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import {Colors} from './../../constants/Colors';

export default function TabLayout() {
  return (
<Tabs screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: Colors.PRIMARY
}}>
    <Tabs.Screen name='home'
    options={{
      tabBarLabel: 'HOME',
      tabBarIcon: ({color}) => (
        <Ionicons name="home" size={24} color={color} />
      ),
    }}
    />
    <Tabs.Screen name='explore'
    options={{
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({color}) => (
        <Ionicons name="search" size={24} color={color} />
      ),
    }}/>
    <Tabs.Screen name='profile'
    options={{
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({color}) => (
        <Ionicons name="people-circle" size={24} color={color} />
      ),
    }}/>
</Tabs>
  )
}