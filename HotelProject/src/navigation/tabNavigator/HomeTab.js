import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import HomeStackScreen from '../stackNavigator/HomeStackScreen';
import ProfileStackScreen from '../stackNavigator/ProfileStackScreen';
import BookingHistoryStackScreen from '../stackNavigator/BookingHistoryStackScreen'
import WishlistStackScreen from '../stackNavigator/WishlistStackScreen';

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
            iconName = focused ? 'archive' : 'archive-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'wishlist') {
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
      <Tab.Screen name="wishlist" component={WishlistStackScreen} />
      <Tab.Screen name="BookingHistory" component={BookingHistoryStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};

export default HomeTab;
