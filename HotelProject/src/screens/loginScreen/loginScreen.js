import React, { useState } from "react";
import { View, TextInput, Text, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "./../../redux/actions/loginActions";

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    const hardcodedUsername = 'johndoe';
    const hardcodedPassword = 'password';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      dispatch(login());
    } else {
      Alert.alert('Invalid login credentials');
    }
  };

  return (
    <View className="flex-1 justify-center items-center">
      <View className="w-3/4">
        <Text className="text-2xl font-bold text-center mb-6">Login</Text>
        <TextInput
          className="bg-white border border-gray-400 rounded-md px-4 py-2 mb-4"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          className="bg-white border border-gray-400 rounded-md px-4 py-2 mb-4"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button className="bg-blue-500 rounded-md py-2" title="Login" onPress={handleLogin} />

      </View>
    </View>
  );
};

export default LoginScreen;