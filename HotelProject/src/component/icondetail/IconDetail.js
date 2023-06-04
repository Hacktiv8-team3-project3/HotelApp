import { View, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function IconDetail({ nameIcon, colorIcon, titleIcon, review }) {
  return (
    <View ClassName='flex-row justify-start items-center mt-8'>
      <Icon name={nameIcon} size={18} color={colorIcon} />
      <Text ClassName='font-semibold text-xs ml-10'>{titleIcon}</Text>
      {review && <Text ClassName='font-semibold text-xs ml-5'>({review})</Text>}
    </View>
  );
}
