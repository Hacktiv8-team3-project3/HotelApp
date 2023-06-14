import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";

function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const handleWhereToGoSubmit = () => {
    console.log("Search Text:", searchText);
    // if (searchText !== '') {
    //   fetchHotelData(searchText).then((res) => {
    //     fetchHotelData({ hotel_id: res.hotel_id }).then((resHotel) => {
    //       setDataHotel(resHotel);
    //     });
    //   });
    // }
  };
  return (
    <View className="fixed top-0 left-0 right-0 z-10 bg-gray-300 rounded-md mx-4 mt-4 p-4">

        <TouchableOpacity onPress={handlePressWhereToGo} className="bg-white rounded-md py-2 px-4" >
          <TextInput
              ref={whereToGoRef}
              className="text-lg font-bold text-[#0B646B]"
              placeholder="Where?"
              keyboardType="default"
              value={searchText}
              onChangeText={setSearchText}
              onSubmitEditing={handleWhereToGoSubmit}
          />
        </TouchableOpacity >

        {/* <TextInput
          className="flex-1"
          placeholder="Search"
          placeholderTextColor="gray"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity onPress={handleSearch}>

        </TouchableOpacity> */}
      </View>
    // </View>
  );
}

export default SearchBar;