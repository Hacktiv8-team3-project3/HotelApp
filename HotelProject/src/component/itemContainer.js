import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { routes } from "../constants/routes";

const ItemContainer = ({ hotels }) => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center mt-6 mb-4">
      <View className="flex-1 bg-white">

        <Text className="text-[#2C7379] text-[20px] font-bold">
          Top Destinations
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {hotels?.map((destination, idx) => (
            <TouchableOpacity
              key={idx}
              className="mr-4 rounded-xl shadow-black"
              onPress={() =>
                navigation.navigate(routes.DETAIL, { param: destination })
              }
            >
              <Image
                source={{
                  uri: destination?.url_1440
                    ? destination?.url_1440
                    : "../assets/bali.jpg",
                }}
                className="w-44 h-36 rounded-xl opacity-90"
                resizeMode="cover"
              />
              <View className="absolute top-[80px] px-2 py-2 ">
                <Text className="text-white text-lg font-bold outline-4">
                  {destination.name?.length > 14
                    ? `${destination?.name?.slice(0, 14)}..`
                    : destination.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ItemContainer;