import { View, Text, TouchableOpacity, Image, Dimensions} from 'react-native'
// import { View, Text, TouchableOpacity, Image} from 'react-native'
import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeWish, addWish } from '../../redux/slice/wishlistSlice';
import { useNavigation } from "@react-navigation/native";
// import { routes } from "../constants/routes";
// import { FontAwesome } from "@expo/vector-icons";
// import Icon from 'react-native-vector-icons/Ionicons';

export default function Card({ item }) {
  const width = Dimensions.get('screen').width / 2 - 30;
  // const data = route?.params?.param;
  // const wishData = useSelector((state) => state.wishlist.wishlist);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const wishlist = useSelector((store) => store.wishlist);
  const isWishlist = wishlist.wishlist.length > 0 ? wishlist.wishlist.find((wish) => wish.name === item.name) : false;
  useEffect(() => {}, [wishlist]);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ItemScreen", { data : item })}
      className="rounded-md px-0 py-0 flex-1 shadow-md bg-gray-200 w-[150px] my-2 mx-1"
    >
      <Image
        source={{ uri: data?.url_1440 ? data?.url_1440 : "../../assets/sumba.jpg",}}
        className="w-full h-20 rounded-md object-cover"
      />
      <View style={{ position: 'absolute', left: 10, top: 5, backgroundColor: 'rgba(255,255,255,0.2)', padding: 4, borderRadius: 50, elevation: 2 }}>
          <Text style={{ fontSize: 12, fontWeight: '600', color: '#fff' }}>
            <Icon name="star" color="#FFBD09" />
            {item?.hotel_class}
          </Text>
        </View>
      {isWishlist ? (
        <TouchableOpacity onPress={() => dispatch(removeWish(item))} style={{ position: 'absolute', right: 10, top: 5, backgroundColor: 'rgba(255,255,255,0.2)', padding: 4, borderRadius: 50, elevation: 2 }}>
          <Icon name="heart" color="#FF5A5A" size={16} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => dispatch(addWish(item))} style={{ position: 'absolute', right: 10, top: 5, backgroundColor: 'rgba(255,255,255,0.2)', padding: 4, borderRadius: 50, elevation: 2 }}>
          <Icon name="heart-outline" color="#fff" size={16} />
        </TouchableOpacity>
      )}
      <View style={{ padding: 8, justifyContent: 'space-between', flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
          <Text style={{ fontWeight: '600', flex: 1, lineHeight: 24 }}>{item?.name}</Text>
        </View>
        <View style={{ paddingTop: 10, flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingRight: 5 }}>
            <Icon name="location" size={16} color="red" />
            <Text style={{ fontSize: 10, marginLeft: 6 }}>{item?.address}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
    // <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    //   {hotels?.map((destination, idx) => (
    //     <TouchableOpacity
    //       key={idx}
    //       className="mr-4 rounded-xl shadow-black"
    //       onPress={() =>
    //         navigation.navigate(routes.DETAIL, { param: destination })
    //       }
    //     >
    //       <Image
    //         source={{
    //           uri: destination?.url_1440
    //             ? destination?.url_1440
    //             : "../assets/bali.jpg",
    //         }}
    //         className="w-40 h-32 rounded-xl opacity-90"
    //         resizeMode="cover"
    //       />
    //       <View className="absolute top-[80px] px-2 py-2 ">
    //         <Text className="text-white text-lg font-bold outline-4">
    //           {destination.name?.length > 14
    //             ? `${destination?.name?.slice(0, 14)}..`
    //             : destination.name}
    //         </Text>
    //       </View>
    //     </TouchableOpacity>
    //   ))}
    // </ScrollView>
  )
}
