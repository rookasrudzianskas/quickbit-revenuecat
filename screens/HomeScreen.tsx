// @ts-nocheck
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React from "react";
import {StatusBar} from "expo-status-bar";
import {Image, ScrollView, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default function HomeScreen({}: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView>
      <View className="flex-1 items-center bg-gray-100 pt-10 relative">
        <TouchableOpacity activeOpacity={0.7} className="absolute z-50 top-12 right-10 items-center">
          <Ionicons name="person-circle" size={30} color="#e5962D" />
          <Text className="text-center text-[#e5962D]">UPGRADE</Text>
        </TouchableOpacity>

        <Image source={{uri: 'https://i.imgur.com/e14NE49.png'}} className="w-full h-64" />
      <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}
