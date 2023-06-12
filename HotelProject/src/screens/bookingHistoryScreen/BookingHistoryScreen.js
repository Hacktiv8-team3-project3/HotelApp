import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Card from '../../component/card/Card';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from "expo-linear-gradient";
import { routes } from '../../constants/routes';


const BookingHistoryScreen = () => {
  const profile = useSelector((store) => store.profile);
  const userData = useSelector((state) => state.profile.login);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking.bookingsData);

  const userBookings = bookings.filter(
    (booking) => booking?.email === userData?.email
  );

  useEffect(() => {
    if (!profile.login?.name) {
      navigation.navigate('LoginScreen');
    }
  }, [profile]);

  return (

    <>

      
      {userBookings?.length > 0 ? (
        <>
          
          {userBookings.map((item, index) => (
            <SafeAreaView>

            <View className="flex items-center mt-5">
              <Text className="text-2xl font-bold mb-5">Booking History</Text>
            </View>
            
            <View
              key={index}
              className="flex-row bg-white rounded-lg shadow space-x-2 p-4 mb-4"
            >
              <View>
                <Image
                  source={{ uri: item?.hotel?.url_1440 }}
                  className="w-[90px] h-[90px] rounded-md"
                  resizeMode="cover"
                />
              </View>
              <View className="justify-center">
                <Text className="text-lg font-bold mb-2">
                  {item?.hotel?.name.length > 20
                    ? `${item?.hotel?.name?.slice(0, 14)}..`
                    : item?.hotel?.name}
                </Text>
                <Text className="text-gray-800 mb-2">
                  {item?.hotel?.city} , {item?.hotel?.country}
                </Text>
                <Text className="text-gray-500 mb-2">
                  {item?.hari} days, {item?.kamar} rooms, {item?.guests}{" "}
                  guests
                </Text>
              </View>
              <View className="absolute top-10 left-[290px]">
                <Text className="font-bold text-2xl text-[#0d9488]">
                  $ {item?.hotel?.price}
                </Text>
                <Text className="text-gray-500">/per night</Text>
              </View>
            </View>

            </SafeAreaView>
          ))}
        </>
      ) : (

        <View className="flex-1 justify-center items-center ">
          <TouchableOpacity
            className="py-3 rounded w-[80%]"
            onPress={() => navigation.navigate(routes.LOGIN)}
          >
            <LinearGradient
              colors={["#0d9488", "#ffff00"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 4, y: 0 }}
              style={{ padding: 10, borderRadius: 20 }}
            >
              <Text className="text-white text-center font-bold">Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      )}
    </>
    
    // <SafeAreaView>
    //   <ScrollView showsVerticalScrollIndicator={false} className='pt-8 px-5'>
    //     <View className='bg-white py-3 rounded-lg flex-row items-center justify-evenly' >
    //        <Icon name="person-circle-outline" size={50} />
    //       <View>
    //         <Text className='text-xl font-bold'>{profile.login?.name}</Text>
    //         <Text>{profile.login?.email}</Text>
    //       </View>
    //     </View>
    //     <View className='shadow-lg bg-white p-3 rounded-lg my-8' >
    //       <View className='mb-1.5 min-h-screen'>
    //         <Text className='text-lg font-bold' >History Book</Text>
    //         <View className='my-8 flex-wrap flex-row justify-between'>
    //         {booking.historyBook.length > 0 ? (
    //             booking.historyBook?.map((item, index) => <Card item={item} key={index} />)
    //           ) : (
    //             <View className="flex-1 justify-center items-center min-h-screen">
    //               <Icon name="trash-bin-outline" size={30} />
    //               <Text className='leading-7 font-extralight'>No History Books</Text>
    //             </View>
    //           )} 
    //         </View>
    //       </View>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
};

export default BookingHistoryScreen;
