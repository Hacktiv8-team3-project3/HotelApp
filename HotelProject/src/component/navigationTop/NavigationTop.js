import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function NavigationTop({ nameIcon, title }) {
  const navigation = useNavigation();
  return (
    <View className='flex-row justify-start items-center'>
      <TouchableOpacity onPress={() => (title !== 'Home' ? navigation.goBack() : null)} className='bg-white p-2 text-base'>
        <Icon name={`${nameIcon}`} size={24} />
      </TouchableOpacity>
      <Text className='text-base font-bold ml-2.5 text-black'>{title}</Text>
    </View>
  );
}
