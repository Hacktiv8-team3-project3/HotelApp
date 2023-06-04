import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  DatePickerAndroid,
} from "react-native";

import images from "../../assets/image";
import Card from "../../component/card/Card";
import { useNavigation } from "@react-navigation/native";
import ItemCarDontainer from "../../component/itemCarDontainer";
import { FontAwesome } from "@expo/vector-icons";

const HomeScreen = () => {

  const navigation = useNavigation();

  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const openDatePicker = async (isCheckIn) => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date(),
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Month returned by the DatePickerAndroid is zero-based, so we need to add 1 to it
        const selectedDate = `${year}-${month + 1}-${day}`;
        if (isCheckIn) {
          setCheckInDate(selectedDate);
        } else {
          setCheckOutDate(selectedDate);
        }
      }
    } catch (error) {
      console.warn('Error opening date picker:', error);
    }
  };

  return (

    <SafeAreaView className="flex-1 bg-white relative">

      {/* search bar */}
      <View className="fixed top-0 left-0 right-0 z-10 bg-gray-300 rounded-md mx-4 mt-4 p-4">
        
        <TouchableOpacity className="bg-white rounded-md py-2 px-4">
          <TextInput
              className="text-lg font-bold text-[#0B646B]"
              placeholder="Mau pergi ke mana?"
              type="text"
          />
        </TouchableOpacity>

        <View className="flex-row mt-2">
          <TouchableOpacity className="flex-1 mr-2" onPress={openDatePicker}>
            <TextInput
              className="bg-white rounded-md py-2 px-4"
              placeholder="Check-in Date"
              type="date"
              value={checkInDate}
              editable={false}
            />
          </TouchableOpacity>

          <TouchableOpacity className="flex-1">
            <TextInput
              className="bg-white rounded-md py-2 px-4"
              placeholder="Check-in Date"
              type="date"
              value={checkOutDate}
              editable={false}
            />
          </TouchableOpacity>

        </View>

        <TouchableOpacity className="flex">
          <TextInput
            className="bg-white rounded-md py-2 px-4 mt-2"
            placeholder="Jumlah tamu"
            type="number"
          />
        </TouchableOpacity>

        
        <TouchableOpacity className="bg-[#0B646B] rounded-3xl py-2 px-4 mt-4 shadow-md">
          <Text className="text-white font-bold text-lg text-center">Search</Text>
        </TouchableOpacity>

      </View>
      
      {/* discover */}
      <View className="flex-row items-center justify-between px-8 mt-8">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[36px]">the beauty today</Text>
        </View>

        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image
            source={images.avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>

      {/* Menu Container */}
      {isLoading ? (
        <View className=" flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          <View className=" flex-row items-center justify-between px-8 mt-8">
            <Card
              key={"101"}
              imageSrc={"https://img.tagvenue.com/resize/c1/ed/widen-1680;8585-mercure-liverpool-atlantic-tower-hotel-venue.jpg"}
              title={"Hotel 1"}
              location={"Jawa Timur"}
            />
            <Card
              key={"102"}
              imageSrc={"https://3.bp.blogspot.com/-oInH9uQj_sU/VwqhgOkaLnI/AAAAAAAAABY/7Bh9s_QhOvEcAE0HXcn5nqiaPL0mZuChg/s1600/hotel.jpg"}
              title={"Hotel 2"}
              location={"Jawa Timur"}
            />  
          </View>

          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[#2C7379] text-[28px] font-bold">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#A0C4C7] text-[20px] font-bold">
                  Explore
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={24}
                  color="#A0C4C7"
                />
              </TouchableOpacity>
            </View>

            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data, i) => (
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
                  ))}
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
