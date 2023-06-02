import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BookingScreen from '../../screens/bookingScreen/BookingScreen';

const BookingStack = createNativeStackNavigator();

const BookingStackScreen = () => {
  return (
    <BookingStack.Navigator screenOptions={{ headerShown: false }}>
      <BookingStack.Screen name="BookingScreen" component={BookingScreen} />
    </BookingStack.Navigator>
  );
};

export default BookingStackScreen;
