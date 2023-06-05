import React, { useLayoutEffect } from "react";
import { View, Text,ScrollView, Image} from 'react-native';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import images from "../../assets/image";
import Card from "../../component/card/Card";

const WishlistScreen = () => {
  const profile = useSelector((store) => store.profile);
  const navigation = useNavigation();

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
          {/* <Card
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
          <Card
            key={"103"}
            imageSrc={"https://img.tagvenue.com/resize/c1/ed/widen-1680;8585-mercure-liverpool-atlantic-tower-hotel-venue.jpg"}
            title={"Hotel 1"}
            location={"Jawa Timur"}
          />
          <Card
            key={"104"}
            imageSrc={"https://3.bp.blogspot.com/-oInH9uQj_sU/VwqhgOkaLnI/AAAAAAAAABY/7Bh9s_QhOvEcAE0HXcn5nqiaPL0mZuChg/s1600/hotel.jpg"}
            title={"Hotel 2"}
            location={"Jawa Timur"}
          />  
          <Card
            key={"105"}
            imageSrc={"https://img.tagvenue.com/resize/c1/ed/widen-1680;8585-mercure-liverpool-atlantic-tower-hotel-venue.jpg"}
            title={"Hotel 1"}
            location={"Jawa Timur"}
          />
          <Card
            key={"106"}
            imageSrc={"https://3.bp.blogspot.com/-oInH9uQj_sU/VwqhgOkaLnI/AAAAAAAAABY/7Bh9s_QhOvEcAE0HXcn5nqiaPL0mZuChg/s1600/hotel.jpg"}
            title={"Hotel 2"}
            location={"Jawa Timur"}
          />  
          <Card
            key={"7"}
            imageSrc={"https://img.tagvenue.com/resize/c1/ed/widen-1680;8585-mercure-liverpool-atlantic-tower-hotel-venue.jpg"}
            title={"Hotel 1"}
            location={"Jawa Timur"}
          />
          <Card
            key={"108"}
            imageSrc={"https://3.bp.blogspot.com/-oInH9uQj_sU/VwqhgOkaLnI/AAAAAAAAABY/7Bh9s_QhOvEcAE0HXcn5nqiaPL0mZuChg/s1600/hotel.jpg"}
            title={"Hotel 2"}
            location={"Jawa Timur"}
          />         */}
          {profile.wishlist.length > 0 ? (
            profile.wishlist?.map((item, index) => <Card item={item} key={index} />)
          ) : (
            <View className="min-h-full items-center justify-center flex-1">
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
