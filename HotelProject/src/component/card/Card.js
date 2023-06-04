import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const Card = ({ imageSrc, title, location, }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ItemScreen", { param: data })}
      className="rounded-md px-0 py-0 flex-1 shadow-md bg-gray-200 w-[150px] my-2 mx-1"
    >
      <Image
        source={{ uri: imageSrc }}
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

export default Card