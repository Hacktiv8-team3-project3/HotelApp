import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const BookingHistoryScreen = () => {
  
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Booking History</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingHistoryScreen;
