import { View, Text, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const BookingHistoryScreen = () => {

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} className='pt-8 px-5'>
        <View className='bg-white py-3 rounded-lg flex-row items-center justify-evenly' >
           <Icon name="person-circle-outline" size={50} />
          <View>
            <Text className='text-xl font-bold'>Nama</Text>
          </View>
        </View>
        {/* <View style={{ backgroundColor: '#fff', padding: 12, borderRadius: 8, marginVertical: 10 }}> */}
        <View className='shadow-lg bg-white p-3 rounded-lg my-8' >
          <View className='mb-1.5 min-h-screen'>
            <Text className='text-lg font-bold' >History Book</Text>
            <View className='my-8 flex-wrap flex-row justify-between'>
              
                <View className="flex-1 justify-center items-center min-h-screen">
                  <Icon name="trash-bin-outline" size={30} />
                  <Text className='leading-7 font-extralight'>No History Books</Text>
                </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingHistoryScreen;
