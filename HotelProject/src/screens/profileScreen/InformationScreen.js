import { View, Text, ScrollView} from 'react-native';
import React from 'react';
import { NavigationTop } from '../../component';
import { SafeAreaView } from 'react-native-safe-area-context';

const InformationScreen = () => {
  
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: '#fff' }}>
        <NavigationTop nameIcon="chevron-back" title="Information" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className='bg-white py-3 rounded-lg'>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Hotel App</Text>
            <Text style={{ fontStyle: 'italic' }}>Kelompok 3</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InformationScreen;
