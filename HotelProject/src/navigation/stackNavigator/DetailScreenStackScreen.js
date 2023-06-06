import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DetailScreen from '../../screens/detailScreen/DetailScreen';

const DetailStack = createNativeStackNavigator();

const DetailStackScreen = () => {
  return (
    <DetailStack.Navigator screenOptions={{ headerShown: false }}>
      <DetailStack.Screen name="DetailScreen" component={DetailScreen} />
    </DetailStack.Navigator>
  );
};

export default DetailStackScreen;
