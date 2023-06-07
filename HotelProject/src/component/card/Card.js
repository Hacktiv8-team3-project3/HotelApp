import { View, Text, TouchableOpacity, Image} from 'react-native'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeWish, addWish } from '../../redux/slice/wishlistSlice';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

export default function Card({ item }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const profile = useSelector((store) => store.profile);
  const isSaved = hotels.wishlist.length > 0 ? hotels.wishlist.find((wish) => wish.name === item.name) : false;

  useEffect(() => {}, [profile]);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ItemScreen", { data: item })}
      className="rounded-md px-0 py-0 flex-1 shadow-md bg-gray-200 w-[150px] my-2 mx-1"
    >
      <Image
        source={{ uri: item.images?.original?.url }}
        className="w-full h-20 rounded-md object-cover"
      />

      {title ? (
        <>
          <Text className="text-[#428288] text-[18px] font-bold mx-3 mt-2">
            {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
          </Text>

          <View className="flex-row items-center space-x-1 mx-3 my-3">
            <FontAwesome name="map-marker" size={20} color="#8597A2" />
            <Text className="text-[#428288] text-[14px] font-bold">
              {location?.length > 18 ? `${title.slice(0, 18)}..` : location}
            </Text>
          </View>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  )
}
