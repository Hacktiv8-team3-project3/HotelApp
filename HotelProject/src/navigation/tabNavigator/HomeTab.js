import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import HomeStackScreen from '../stackNavigator/HomeStackScreen';
import ProfileStackScreen from '../stackNavigator/ProfileStackScreen';
import BookingStackScreen from '../stackNavigator/BookingStackScreen';
import BookingHistoryStackScreen from '../stackNavigator/BookingHistoryStackScreen'

const Tab = createBottomTabNavigator();
const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'BookingHistory') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Booking') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#3EBDC6',
        tabBarActiveBackgroundColor: '#3EBDC6',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Booking" component={BookingStackScreen} />
      <Tab.Screen name="BookingHistory" component={BookingHistoryStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};

export default HomeTab;
