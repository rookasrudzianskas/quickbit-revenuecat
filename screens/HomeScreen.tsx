// @ts-nocheck
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React from "react";
import {StatusBar} from "expo-status-bar";
import {Image} from "react-native";

export default function HomeScreen({}: RootTabScreenProps<'TabOne'>) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image source={{uri: 'https://i.imgur.com/e14NE49.png'}} className="" />
      <StatusBar style="auto" />
    </View>
  );
}
