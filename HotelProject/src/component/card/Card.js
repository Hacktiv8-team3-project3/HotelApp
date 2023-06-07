import { View, Text, TouchableOpacity, Image, Dimensions} from 'react-native'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import { routes } from '../../constants/routes';
import Icon from 'react-native-vector-icons/Ionicons';
import { removeWish, addWish } from '../../redux/slice/wishlistSlice'

export default function Card({ item }) {
  const width = Dimensions.get('screen').width / 2 - 30;
  const navigation = useNavigation();
  console.log(routes);
  const dispatch = useDispatch();
  const wishlist = useSelector((store) => store.wishlist);
  const isWishlist = wishlist.wishlist.length > 0 ? wishlist.wishlist.find((wish) => wish.name === item.name) : false;
  useEffect(() => {}, [wishlist]);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', { param: item })}
      className="rounded-md px-0 py-0 flex-1 shadow-md bg-gray-200 w-[150px] my-2 mx-1"
    >
      <Image
        source={{ uri: item?.url_1440 ? item?.url_1440 : "../../assets/sumba.jpg",}}
        className="w-full h-20 rounded-md object-cover"
      />
      <View style={{ position: 'absolute', left: 10, top: 5, backgroundColor: 'rgba(255,255,255,0.2)', padding: 4, borderRadius: 50, elevation: 2 }}>
          <Text style={{ fontSize: 12, fontWeight: '600', color: '#fff' }}>
            <Icon name="star" color="#FFBD09" />
            {item?.hotel_class}
          </Text>
        </View>
      {isWishlist ? (
        <TouchableOpacity onPress={() => dispatch(removeWish(item?.name))} style={{ position: 'absolute', right: 10, top: 5, backgroundColor: 'rgba(255,255,255,0.2)', padding: 4, borderRadius: 50, elevation: 2 }}>
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
  )
}
