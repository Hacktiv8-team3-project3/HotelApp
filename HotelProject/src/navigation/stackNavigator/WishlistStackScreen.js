import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import WishlistScreen from '../../screens/wishlistScreen/WishlistScreen';

const WishlistStack = createNativeStackNavigator();

const WishlistStackScreen = () => {
  return (
    <WishlistStack.Navigator screenOptions={{ headerShown: false }}>
      <WishlistStack.Screen name="WishlistScreen" component={WishlistScreen} />
    </WishlistStack.Navigator>
  );
};

export default WishlistStackScreen;
