import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const MenuScreen = () => {
  
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Profile</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuScreen;



