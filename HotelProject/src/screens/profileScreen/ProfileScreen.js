import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationTop } from '../../component';
import { useNavigation } from '@react-navigation/native';

const MenuScreen = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView className="flex-1 relative">
      <View className='bg-white top-0 justify-between p-1 mb-3'>
        <NavigationTop nameIcon="chevron-back" title="Setting" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='bg-white p-3 rounded-lg mx-1 mb-3'>
          <View className='mb-2.5'>
            <Text className='text-lg font-extrabold'>MY ACCOUNT</Text>
          </View>
          <View className='pb-1.5'>
            <Text className='text-lg font-bold'>Username</Text>
            <TextInput
              className="bg-slate-100 rounded-md py-2 px-4 mt-2shadow-md"
              placeholder="Fullname"
            />
          </View>
          <View className='pb-1.5'>
            <Text className='text-lg font-bold'>Email</Text>
            <TextInput
              className="bg-slate-100 rounded-md py-2 px-4 mt-2shadow-md"
              placeholder="Email"
            />
          </View>
          <View className='pb-1.5'>
            <Text className='text-lg font-bold'>Phone Number</Text>
            <TextInput
              className="bg-slate-100 rounded-md py-2 px-4 mt-2shadow-md"
              placeholder="Phone Number"
            />
          </View>
        </View>
        <View className='bg-white p-3 rounded-lg mx-1 mb-3'>
          <View className='pb-1.5 mb-1.5'>
            <TouchableOpacity onPress={() => navigation.navigate('InformationScreen')}>
              <Text style={{ lineHeight: 24, fontSize: 16 }}>Information</Text>
            </TouchableOpacity>
          </View>
          <View className='pb-1.5 mb-1.5'>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={{ lineHeight: 24, fontSize: 16 }}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuScreen;



