import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    ScrollView,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { useNavigation } from "@react-navigation/native";
  import { useDispatch, useSelector } from "react-redux";
  
  const BookingScreen = () => {
    const navigation = useNavigation();
    const profile = useSelector((store) => store.profile);
    const selectedHotel = useSelector((state) => state.booking.selectHotel);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [codePhone, setCodePhone] = useState("");
    const [phone, setPhone] = useState("");
    const [hari, setHari] = useState("");
    const [kamar, setKamar] = useState("");
    const [guests, setGuests] = useState("");

    useEffect(() => {
        if (!profile.login?.name) {
          navigation.navigate('LoginScreen');
        }
      }, [profile]);
  
    return (
      <SafeAreaView className="bg-white">
          <View className="mt-10 p-5 bg-white">
            <Text className="text-slate-800 font-bold tracking-widest">
              FORM BOOKING
            </Text>
            <TextInput
              className="py-2 px-3 mt-5 mb-4 text-gray-500 tracking-wide bg-gray-100 rounded-lg shadow-xl truncate"
              placeholder="Input your name"
              placeholderTextColor="#C9C9C9"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              className="py-2 px-3 mb-4 text-gray-500 tracking-wide bg-gray-100 rounded-lg shadow-xl truncate"
              placeholder="Input your email"
              placeholderTextColor="#C9C9C9"
              value={email}
              onChangeText={setEmail}
              autoComplete="email"
            />
            <View className="flex-row">
              <TextInput
                className="py-2 px-3 mb-4 mr-1 text-gray-500 tracking-wide bg-gray-100 rounded-lg shadow-xl basis-1/3 truncate"
                placeholder="+62"
                placeholderTextColor="#C9C9C9"
                value={codePhone}
                maxLength={3}
                onChangeText={setCodePhone}
                keyboardType="phone-pad"
              />
              <TextInput
                className="py-2 px-3 mb-4 text-gray-500 tracking-wide bg-gray-100 rounded-lg shadow-xl basis-[65%] truncate"
                placeholder="Phone number"
                placeholderTextColor="#C9C9C9"
                value={phone}
                maxLength={14}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
            </View>
            <View className="pt-2 pl-2 pr-2 flex flex-row items-start shadow-lg rounded-lg bg-gray-100">
              <TextInput
                className="py-2 px-3 font-bold tracking-wide bg-white truncate text-center"
                placeholder="1"
                placeholderTextColor="#fff"
                value={hari}
                maxLength={3}
                onChangeText={setHari}
                keyboardType="numeric"
              />
              <Text className="mt-3 ml-2 text-gray-700 basis-[12%]">hari</Text>
              <View className="ml-2 h-[58px] mt-[-8px] border-2 border-gray-100"></View>
              <TextInput
                className="py-2 font-bold tracking-wide bg-white basis-[13%] truncate text-center"
                placeholder="1"
                placeholderTextColor="#C9C9C9"
                value={kamar}
                maxLength={3}
                onChangeText={setKamar}
                keyboardType="numeric"
              />
              <Text className="mt-3 ml-2 text-gray-700 basis-[15%]">kamar</Text>
              <View className="ml-3 h-[58px] mt-[-8px] border-2 border-gray-100"></View>
              <TextInput
                className="py-2 font-bold tracking-wide bg-white basis-[13%] truncate text-center"
                placeholder="1"
                placeholderTextColor="#C9C9C9"
                value={guests}
                maxLength={3}
                onChangeText={setGuests}
                keyboardType="numeric"
              />
              <Text className="mt-3 ml-2 text-gray-700 basis-[15%]">guests</Text>
            </View>
            <Text className="mt-7 text-slate-800 font-bold tracking-widest">
              Rekap
            </Text>
  
            <View className=" p-3 mt-3 mb-32 rounded-lg shadow-lg bg-white">
              <View className="flex flex-row">
                <Text className="text-gray-600 font-bold tracking-wide mr-1 mb-5">
                  {hari} hari,
                </Text>
                <Text className="text-gray-600 font-bold tracking-wide mr-1 mb-5">
                  {kamar} kamar,
                </Text>
                <Text className="text-gray-600 font-bold tracking-wide mr-1 mb-5">
                  {guests} guests
                </Text>
              </View>
              <View className="flex flex-row justify-between">
                <Text className="text-gray-500 font-bold tracking-wide mr-1">
                  Total Harga
                </Text>
                <Text className="text-[#0d9488] font-bold tracking-wide mr-1">
                  {"$"}
                  {hari * selectedHotel.price}{" "}
                </Text>
              </View>
              <View className="h-2 mb-3 mt-2 border-b-2 border-gray-100"></View>
            </View>
            <TouchableOpacity
              className="py-3 rounded-full rounded-3xl bg-[#0B646B]"
            >
            <Text className="text-white text-center font-bold">Checkout</Text>
            </TouchableOpacity>
          </View>

      </SafeAreaView>
    );
  };
  
  export default BookingScreen;