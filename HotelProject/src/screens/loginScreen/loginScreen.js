import React, { useState, useEffect } from "react";
import { View, TextInput, Text, Alert,TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
// import { login } from "./../../redux/actions/loginActions";
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../../redux/slice/loginSlice';


const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [isEmpty, setIsEmpty] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const profile = useSelector((store) => store.profile);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  
  const handleLogin = () => {
    setIsEmpty(false);
    setIsFailure(false);
    if (username === '' || password === '') {
      return setIsEmpty((prevEmpty) => !prevEmpty);
    }
    dispatch(loginUser({ username, password, redirect, notFound }));
  };

  const notFound = (status) => {
    if (status) {
      setIsFailure((prevFailure) => !prevFailure);
    }
  };

  const redirect = (status) => {
    if (status) {
      navigation.goBack();
    }
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
          placeholder="johndoe"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          className="bg-white border border-gray-400 rounded-md px-4 py-2 mb-4"
          placeholder="12345"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity className="mt-3" onPress={handleLogin}>
          <View className="bg-blue-500 rounded-md py-2">
            <Text className="text-white text-[15px] text-center items-center">Login</Text>
          </View>
        </TouchableOpacity>
      </View>
      {isEmpty && (
        <View className="my-3">
          <Text className="text-red-700 font-semibold tracking-widest">Please Fill Out All Forms</Text>
        </View>
      )}
      {isFailure && (
        <View className="my-3">
          <Text className="text-red-700 font-semibold tracking-widest">wrong username or password</Text>
        </View>
      )}
    </View>
  );
};

export default LoginScreen;