import React, { useLayoutEffect, useState, useRef } from "react";

import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Keyboard
} from "react-native";

import images from "../../assets/image";
import Card from "../../component/card/Card";
import { useNavigation } from "@react-navigation/native";
import ItemCarDontainer from "../../component/itemCarDontainer";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';

const HomeScreen = () => {

  const navigation = useNavigation();
  const whereToGoRef = useRef(null);
  const guestRef = useRef(null);

  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [showCheckInPicker, setShowCheckInPicker] = useState(false);
  const [showCheckOutPicker, setShowCheckOutPicker] = useState(false);
  const [guests, setGuests] = useState('');
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleCheckInDateChange = (event, selectedDate) => {
    setShowCheckInPicker(false);
    if (selectedDate) {
      setCheckInDate(selectedDate);
    }
  };

  const handleCheckOutDateChange = (event, selectedDate) => {
    setShowCheckOutPicker(false);
    if (selectedDate) {
      setCheckOutDate(selectedDate);
    }
  };

  const showCheckInDatePicker = () => {
    setShowCheckInPicker(true);
  };

  const showCheckOutDatePicker = () => {
    setShowCheckOutPicker(true);
  };

  const handleGuestsChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setGuests(numericText);
  };

  const handleWhereToGoSubmit = () => {
    guestRef.current.focus();
  };

  const handlePressWhereToGo = () => {
    Keyboard.dismiss();
    whereToGoRef.current.focus();
  };

  const handlePressGuest = () => {
    Keyboard.dismiss();
    guestRef.current.focus();
  };

  return (

    <SafeAreaView className="flex-1 bg-white relative">

      {/* search bar */}
      <View className="fixed top-0 left-0 right-0 z-10 bg-gray-300 rounded-md mx-4 mt-4 p-4">
        
        <TouchableOpacity onPress={handlePressWhereToGo} className="bg-white rounded-md py-2 px-4" >
          <TextInput
              ref={whereToGoRef}
              className="text-lg font-bold text-[#0B646B]"
              placeholder="Where to go?"
              keyboardType="default"
              onSubmitEditing={handleWhereToGoSubmit}
          />
        </TouchableOpacity >

        <View className="flex-row mt-2">
          <TouchableOpacity className="bg-white rounded-md py-2 px-4 flex-1 mr-2" onPress={showCheckInDatePicker}>
            <View className="flex-row">
              <FontAwesome name="calendar" size={20} color="#0B646B" className="mr-2" />
              <Text className="ml-2">{checkInDate.toDateString()}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white rounded-md py-2 px-4 flex-1" onPress={showCheckOutDatePicker}>
            <View className="flex-row">
              <FontAwesome name="calendar" size={24} color="#0B646B" className="mr-2" />
              <Text className="ml-2">{checkOutDate.toDateString()}</Text>
            </View>
          </TouchableOpacity>

          {showCheckInPicker && (
            <DateTimePicker
              value={checkInDate}
              mode="date"
              display="default"
              onChange={handleCheckInDateChange}
            />
          )}

          {showCheckOutPicker && (
            <DateTimePicker
              value={checkOutDate}
              mode="date"
              display="default"
              onChange={handleCheckOutDateChange}
            />
          )}

        </View>

        <TouchableOpacity className="flex" onPress={handlePressGuest}>
          <TextInput
            ref={guestRef}
            value={guests}
            onChangeText={handleGuestsChange}
            className="bg-white rounded-md py-2 px-4 mt-2"
            placeholder="Guest"
            keyboardType="number-pad"
          />
        </TouchableOpacity>

        
        <TouchableOpacity className="bg-[#0B646B] rounded-3xl py-2 px-4 mt-4 shadow-md">
          <Text className="text-white font-bold text-lg text-center">Search</Text>
        </TouchableOpacity>

      </View>

      {/* Fetch */}
      {isLoading ? (

        <View className=" flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
        
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-8 mt-8">
            <View>
              <Text className="text-[24px] text-[#0B646B] font-bold">Discover</Text>
              <Text className="text-[#527283] text-[20px]">Wonderful Indonesia</Text>
            </View>

            <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
              <Image
                source={images.avatar}
                className="w-full h-full rounded-md object-cover"
              />
            </View>
          </View>


          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[#2C7379] text-[20px] font-bold">
                Kota-Kota di Indonesia
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#A0C4C7] text-[16px] font-bold">
                  Explore
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={20}
                  color="#A0C4C7"
                />
              </TouchableOpacity>
            </View>

            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>

                  {/* coba fetch api di sini yaa */}

                  {/* {mainData?.map((data, i) => (
                    <ItemCarDontainer
                      key={i}
                      imageSrc={
                        data?.photo?.images?.medium?.url
                          ? data?.photo?.images?.medium?.url
                          : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                      }
                      title={data?.name}
                      location={data?.location_string}
                      data={data}
                    />
                  ))} */}
                </>
              ) : (
                <>
                  <View className="w-full h-[400px] items-center space-y-8 justify-center">
                    <Image
                      source={images.notFound}
                      className=" w-32 h-32 object-cover"
                    />
                    <Text className="text-2xl text-[#428288] font-semibold">
                      Opps...No Data Found
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>

          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[#2C7379] text-[20px] font-bold">
                Popular Destinations
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#A0C4C7] text-[16px] font-bold">
                  Explore
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={20}
                  color="#A0C4C7"
                />
              </TouchableOpacity>
            </View>

            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>

                  {/* coba fetch api di sini yaa */}
                  
                  {/* {mainData?.map((data, i) => (
                    <ItemCarDontainer
                      key={i}
                      imageSrc={
                        data?.photo?.images?.medium?.url
                          ? data?.photo?.images?.medium?.url
                          : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                      }
                      title={data?.name}
                      location={data?.location_string}
                      data={data}
                    />
                  ))} */}
                </>
              ) : (
                <>
                  <View className="w-full h-[400px] items-center space-y-8 justify-center">
                    <Image
                      source={images.notFound}
                      className=" w-32 h-32 object-cover"
                    />
                    <Text className="text-2xl text-[#428288] font-semibold">
                      Opps...No Data Found
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>

        </ScrollView>
      )}

    </SafeAreaView>

  );
};

export default HomeScreen;
