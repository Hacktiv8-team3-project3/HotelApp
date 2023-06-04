import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import InformationScreen from '../../screens/profileScreen/InformationScreen';
import ProfileScreen from '../../screens/profileScreen/ProfileScreen';

const ProfileStack = createNativeStackNavigator();
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen name="InformationScreen" component={InformationScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
