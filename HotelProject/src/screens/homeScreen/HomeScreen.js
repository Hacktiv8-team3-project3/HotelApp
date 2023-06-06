import React, { useLayoutEffect, useState, useRef, useEffect } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  fetchHotelData,
  fetchHotelId,
  fetchHotelPop,
  getAllHotel,
} from "../../redux/slice/hotelSlice";
import ItemContainer from "../../component/itemContainer";
import { useDispatch, useSelector } from "react-redux";
import MenuContainer from "../../component/menuContainer";

const HomeScreen = () => {

  const navigation = useNavigation();
  const whereToGoRef = useRef(null);
  const guestRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [showCheckInPicker, setShowCheckInPicker] = useState(false);
  const [showCheckOutPicker, setShowCheckOutPicker] = useState(false);
  const [guests, setGuests] = useState('');
  const dispatch = useDispatch();
  const hotels = useSelector(getAllHotel);
  const idHotels = useSelector((state) => state.hotels.top);
  const popHotels = useSelector((state) => state.hotels.pop);

  useEffect(() => {
    dispatch(fetchHotelData());
    dispatch(fetchHotelId());
    dispatch(fetchHotelPop());
    console.log(popHotels);
  }, [dispatch]);
  
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

    <SafeAreaView className="flex-1 bg-white relative pt-9">

      {/* search bar */}
      <View className="fixed top-0 left-0 right-0 z-10 bg-gray-300 rounded-md mx-4 mt-4 p-4">
        
        <TouchableOpacity onPress={handlePressWhereToGo} className="bg-white rounded-md py-2 px-4" >
          <TextInput
              ref={whereToGoRef}
              className="text-lg font-bold text-[#0B646B]"
              placeholder="Where?"
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

            
          <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
            {hotels?.length > 0 ? (
              <>
                <MenuContainer hotels={popHotels} />
                <ItemContainer hotels={idHotels} />
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


        </ScrollView>
      )}

    </SafeAreaView>

  );
};

export default HomeScreen;
