import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationTop } from '../../component';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile, logout } from '../../redux/slice/loginSlice';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuScreen = () => {
  const profile = useSelector((store) => store.profile);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isEditable, setIsEditAble] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLogout, setIsLogout] = useState(false);

  useEffect(() => {
    setName(profile.login?.name ? profile.login?.name : null);
    setEmail(profile.login?.email ? profile.login?.email : null);
    setPhoneNumber(profile.login?.phoneNumber ? profile.login?.phoneNumber : null);
  }, [profile]);

  const HandleLogout = () => {
    dispatch(logout());
    setIsLogout(false);
  };

  const handleChangesProfile = () => {
    setIsEmpty(false);
    if (name === '' || email === '' || phoneNumber === '') {
      return setIsEmpty(true);
    }
    dispatch(changeProfile({ name: name, email: email, phoneNumber: phoneNumber }));
    setIsEditAble(false);
  };

  return (
    <SafeAreaView className="flex-1 relative">
      <View className='bg-white top-0 justify-between p-1 mb-3'>
        <NavigationTop nameIcon="chevron-back" title="Setting" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='bg-white p-3 rounded-lg mx-1 mb-3'>
          <View className='mb-2.5'>
            <Text className='text-lg font-extrabold'>MY ACCOUNT</Text>
          </View>
          <View className='pb-1.5'>
            <Text className='text-lg font-bold'>Username</Text>
            <TextInput
              className="bg-slate-100 rounded-md py-2 px-4 mt-2shadow-md"
              onChangeText={(text) => setName(text)}
              value={name}
              defaultValue={name}
              placeholder="Fullname"
              editable={isEditable}
            />
          </View>
          <View className='pb-1.5'>
            <Text className='text-lg font-bold'>Email</Text>
            <TextInput
              className="bg-slate-100 rounded-md py-2 px-4 mt-2shadow-md"
              onChangeText={(text) => setEmail(text)}
              value={email}
              defaultValue={email}
              placeholder="Email"
              editable={isEditable}
            />
          </View>
          <View className='pb-1.5'>
            <Text className='text-lg font-bold'>Phone Number</Text>
            <TextInput
              className="bg-slate-100 rounded-md py-2 px-4 mt-2shadow-md"
              onChangeText={(text) => setPhoneNumber(text)}
              value={phoneNumber}
              defaultValue={phoneNumber}
              placeholder="Phone Number"
              editable={isEditable}
            />
          </View>
          {isEmpty && (
            <View className='pb-3'>
              <Text className="text-red-700 font-semibold tracking-widest">Please Fill Out All Forms</Text>
            </View>
          )}

          {!isEditable && (
            <TouchableOpacity className='mt-5 h-14' onPress={() => (profile.login.email ? setIsEditAble(true) : navigation.navigate('LoginScreen'))}>
              <View className='px-8 py-4 bg-[#3EBDC6] w-40 rounded-3xl justify-center items-center absolute right-0'>
                <Text className="text-white text-[15px] text-center items-center">Edit Profile</Text>
              </View>
            </TouchableOpacity>
          )}
          {isEditable && (
            <TouchableOpacity className='mt-5 h-14' onPress={handleChangesProfile}>
              <View className='px-8 py-4 bg-[#3EBDC6] w-40 rounded-3xl justify-center items-center absolute right-0'>
                <Text className="text-white text-[15px] text-center items-center">Save Changes</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View className='bg-white p-3 rounded-lg mx-1 mb-3'>
          <View className='pb-1.5 mb-1.5'>
            <TouchableOpacity onPress={() => navigation.navigate('InformationScreen')}>
              <Text className='leading-5 mb-1.5'>Information</Text>
            </TouchableOpacity>
          </View>
          <View className='pb-1.5 mb-1.5'>
          {!profile.login?.email && (
              <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <Text className='leading-5 mb-1.5'>Login</Text>
              </TouchableOpacity>
            )}
            {profile.login?.email && (
              <TouchableOpacity onPress={() => setIsLogout(true)}>
                <Text className='leading-5 mb-1.5'>Logout</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
      {isLogout && (
        <View className='w-full h-full absolute px-4 bg-white items-center mb-1.5'>
          <View className='mt-10 rounded-3xl absolute px-4 bg-white items-center mb-1.5 p-5 justify-centar' >
            <View className='fl-1, justify-center Items-center'>
              <Icon name="log-out-outline" size={50} color="#FF5A5A" />
              <Text className="text-red-700 font-semibold tracking-widest">Are You Sure to Logout? </Text>
            </View>
            <View className='flex-row'>
              <TouchableOpacity onPress={() => setIsLogout((prevLogout) => !prevLogout)} className='lmt-1.5'>
                <View className='py-2 px-7 rounded-3xl bg-yellow' >
                  <Text className="text-white text-[15px] text-center items-center">Cancel</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={HandleLogout}>
                <View sclassName='py-2 px-7 rounded-3xl bg-yellow' >
                  <Text className="text-white text-[15px] text-center items-center">Logout</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default MenuScreen;



