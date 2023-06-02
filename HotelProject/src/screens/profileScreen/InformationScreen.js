import { View, Text, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const InformationScreen = () => {
  const { height } = Dimensions.get('screen');
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: '#fff' }}>
        <NavigationTop nameIcon="arrow-back" title="Information" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 15, minHeight: height, backgroundColor: '#FBFCFD' }}>
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
