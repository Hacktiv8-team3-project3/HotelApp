import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const profile = useSelector((store) => store.profile);
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log("Logging in...");
  };

  useEffect(() => {
    if (profile.login?.email) {
      return navigation.goBack();
    }
  });
  return (
    <View className="flex-1 justify-center items-center">
      <View className="w-3/4">
        <Text className="text-2xl font-bold text-center mb-6">Login</Text>
        <TextInput
          className="bg-white border border-gray-400 rounded-md px-4 py-2 mb-4"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          className="bg-white border border-gray-400 rounded-md px-4 py-2 mb-4"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          className="bg-blue-500 rounded-md py-2"
          onPress={handleLogin}
        >
          <Text className="text-white text-lg text-center">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
