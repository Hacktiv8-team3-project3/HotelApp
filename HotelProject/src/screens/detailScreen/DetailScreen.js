import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../../constants/routes";
import { 
    AntDesign,
    MaterialCommunityIcons, 
    Fontisto,
    MaterialIcons,
    FontAwesome,
} from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { selectHotel } from "../../redux/slice/bookingSlice";
import { LinearGradient } from "expo-linear-gradient";
import { addWish, removeWish } from "../../redux/slice/wishlistSlice";
import { NavigationTop } from '../../component';

function DetailScreen({ route }) {
  const navigation = useNavigation();

  const data = route?.params?.param;
  const dispatch = useDispatch();
  const wishData = useSelector((state) => state.wishlist.wishlist);

  const handleAddWishlist = (item) => {
    dispatch(addWish(item));
  };

  const handleNonWishlist = (item) => {
    dispatch(removeWish(item?.name));
  };

  const handleCheck = () => {
     dispatch(selectHotel(data));
    navigation.navigate(routes.BOOK);
  };

  const isWishlist = wishData.find((wish) => wish.name === data.name);
  let button;
  if (isWishlist) {
    button = (
      <TouchableOpacity
        className="w-8 h-8 rounded-md items-center justify-center bg-white"
        onPress={() => handleNonWishlist(data)}
      >
        <Icon name="heart" size={20} color="#0d9488" />
      </TouchableOpacity>
    );
  } else {
    button = (
      <TouchableOpacity
        className="w-8 h-8 rounded-md items-center justify-center bg-white"
        onPress={() => handleAddWishlist(data)}
      >
        <Icon name="heart-o" size={20} color="#0d9488" />
      </TouchableOpacity>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <ScrollView>
        <Image
          source={{
            uri: data?.url_1440 ? data?.url_1440 : "../../assets/bali.jpg",
          }}
          className="w-full h-64"
          resizeMode="cover"
        />
        <View className="flex-row absolute inset-x-0 top-8 px-6 justify-between">
          <TouchableOpacity
            className="w-8 h-8 rounded-md items-center justify-center bg-white"
            onPress={() => navigation.navigate(routes.HOMETAB)}
          >
            <AntDesign name="left" size={24} color="#0d9488" />
          </TouchableOpacity>
          {button}
        </View>
        <View className="absolute bg-[#0d9488] rounded-l-full right-0 top-[190px] px-6 py-2">
          <Text className="text-2xl font-bold text-white">$ {data?.price}</Text>
        </View>
        <View className="p-4">
          <Text className="text-2xl font-bold mb-2 text-[#0d9488]">
            {data?.name}
          </Text>
          <View className="flex-row">
            <Fontisto name="map-marker-alt" size={18} color="gray" />
            <Text className="ml-2 text-gray-500 mb-4">{data?.city}</Text>
          </View>
          <View className="mt-4 flex-row items-center space-x-2 justify-between">
            {data?.ranking && (
              <View className="flex-row items-center">
                <View className="w-10 h-10 rounded-2xl mr-2 bg-green-100 items-center justify-center shadow-md">
                  <FontAwesome name="trophy" size={24} color="#0d9488" />
                </View>
                <View>
                  <Text className="text-gray-600">{data?.ranking}</Text>
                  <Text className="text-gray-600">Rankings</Text>
                </View>
              </View>
            )}
            {data?.hotel_class && (
              <View className="flex-row items-center ">
                <View className="w-10 h-10 rounded-2xl mr-2 bg-green-100 items-center justify-center shadow-md">
                  <MaterialIcons name="star-rate" size={24} color="#0d9488" />
                </View>
                <View>
                  <Text className="text-gray-600">{data?.hotel_class}</Text>
                  <Text className="text-gray-600">Hotel Class</Text>
                </View>
              </View>
            )}
            {data?.number_of_rooms && (
              <View className="flex-row items-center ">
                <View className="w-10 h-10 rounded-2xl mr-2 bg-green-100 items-center justify-center shadow-md">
                  <Fontisto name="room" size={24} color="#0d9488" />
                </View>
                <View>
                  <Text className="text-gray-600">{data?.number_of_rooms}</Text>
                  <Text className="text-gray-600">Room Number</Text>
                </View>
              </View>
            )}
          </View>
          <Text className="text-gray-700 my-4">{data?.hotel_description}</Text>
          <View className="mt-4 bg-gray-100 rounded-2xl px-4 py-2 space-x-2">
            {data?.zip && (
              <View className="items-center flex-row mt-2">
                <MaterialCommunityIcons name="post" size={24} color="#0d9488" />
                <Text className="ml-2 text-lg">Zipcode {data?.zip}</Text>
              </View>
            )}
            {data?.address && (
              <View className="items-center flex-row mt-2">
                <FontAwesome name="map-pin" size={24} color="#0d9488" />
                <Text className="ml-2 text-lg">{data?.address}</Text>
              </View>
            )}
            {data?.url && (
              <View className="items-center flex-row mt-2">
                <AntDesign name="link" size={24} color="#0d9488" />
                <Text className="ml-2 text-lg">{data?.url}</Text>
              </View>
            )}
            <TouchableOpacity
              className="mt-4 py-4 rounded-full justify-center"
              onPress={handleCheck}
            >
              <LinearGradient
                colors={["#0d9488", "#ffff00"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 4, y: 0 }}
                className="px-10 py-4 rounded-full items-center"
              >
                <Text className="text-2xl font-semibold uppercase text-gray-100">
                  Book This Hotel
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    </View>
  );
}

export default DetailScreen;