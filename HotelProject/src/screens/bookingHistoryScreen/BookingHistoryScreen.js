import { View, Text, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const BookingHistoryScreen = () => {

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View ClassName='bg-gray-200 p-12 rounded-lg flex-row items-center justify-evenly mv-10' >
        {/* style={{ backgroundColor: '#fff', padding: 12, borderRadius: 8, marginVertical: 10, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}> */}
          <Icon name="person-circle-outline" size={50} />
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Nama</Text>
          </View>
        </View>
        <View style={{ backgroundColor: '#fff', padding: 12, borderRadius: 8, marginVertical: 10 }}>
          <View style={{ marginBottom: 6, minHeight: 200 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 1 }}>History Book</Text>
            <View style={{ marginVertical: 15, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
              
                <View style={{ minHeight: 200, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                  <Icon name="trash-bin-outline" size={30} />
                  <Text style={{ lineHeight: 30, fontWeight: '500' }}>No History Books</Text>
                </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingHistoryScreen;
