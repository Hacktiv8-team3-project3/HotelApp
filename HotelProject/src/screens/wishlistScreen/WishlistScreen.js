import React, { useLayoutEffect } from "react";
import { View, Text,ScrollView, Image, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import images from "../../assets/image";
import { useSelector } from 'react-redux';
import Card from "../../component/card/Card";
import Icon from 'react-native-vector-icons/Ionicons';


const WishlistScreen = () => {
  const wishlist = useSelector((store) => store.wishlist);
  const navigation = useNavigation();
  const { height } = Dimensions.get('screen');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  
  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <View className="flex-row items-center justify-between pt-9 px-8 pb-10">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">Wishlist</Text>
          <Text className="text-[#527283] text-[20px]">Hotel you are looking for</Text>
        </View>

        <View className="w-20 h-20 rounded-md items-center justify-center shadow-lg">
          <Image
            source={images.logo}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">                
        {wishlist.wishlist.length > 0 ? (
          wishlist.wishlist?.map((item, index) => 
          <Card item={item} key={index} />)
        ) : (
          <View style={{ minHeight: height / 2, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Icon name="heart-dislike-outline" size={30} />
            <Text style={{ lineHeight: 30, fontWeight: '500' }}>No Wishlist</Text>
          </View>
        )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WishlistScreen;
