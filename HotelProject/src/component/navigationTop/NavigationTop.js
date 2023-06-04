import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function NavigationTop({ nameIcon, title, colorTitle }) {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => (title !== 'Home' ? navigation.goBack() : null)} style={{ backgroundColor: '#F1F5FE', padding: 8, borderRadius: 50 }}>
        <Icon name={`${nameIcon}`} size={24} />
      </TouchableOpacity>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10, color: colorTitle ? colorTitle : 'black' }}>{title}</Text>
    </View>
  );
}
