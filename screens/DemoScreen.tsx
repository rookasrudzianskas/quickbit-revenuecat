//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {AntDesign, Ionicons} from "@expo/vector-icons";

const DemoScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-yellow-600/70 flex-1 h-screen pt-10">
      <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7} className="flex-row items-center p-5">
        <Ionicons name="arrow-back" size={40} color="white" />
        <Text className="text-white">Back</Text>
      </TouchableOpacity>

      <View className="flex-1 items-center justify-center px-10 pt-10">
        <Text className="text-white text-2xl font-extrabold">Hooray!</Text>
        <Text className="text-white text-2xl font-extrabold mb-10 text-center">You have access to this feature</Text>
        <Ionicons name="build-outline" size={200} color="white" />
        <View className="-mt-16 -ml-8">
          <Ionicons name="checkmark-circle-sharp" size={60} color="#96F550" />
        </View>
        <Text className="text-white mt-10 flex-1 font-bold text-center">
          This is where you create a new screen & change the rest of the app so, the navigation is as follows: navigation.navigate('Demo')
        </Text>
      </View>
    </View>
  );
};

export default DemoScreen;
