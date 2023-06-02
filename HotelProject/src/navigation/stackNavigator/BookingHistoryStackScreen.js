import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BookingHistoryScreen from '../../screens/bookingHistoryScreen/BookingHistoryScreen';

const BookingHistoryStack = createNativeStackNavigator();

const BookingHistoryStackScreen = () => {
  return (
    <BookingHistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <BookingHistoryStack.Screen name="BookingHistoryScreen" component={BookingHistoryScreen} />
    </BookingHistoryStack.Navigator>
  );
};

export default BookingHistoryStackScreen;
