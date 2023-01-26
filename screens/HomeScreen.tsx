// @ts-nocheck
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React from "react";
import {StatusBar} from "expo-status-bar";
import {Image, ScrollView, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import ActionRow from "../components/ActionRow";
import {useNavigation} from "@react-navigation/native";
import useRevenueCat from "../hooks/useRevenueCat";

export default function HomeScreen({}: RootTabScreenProps<'TabOne'>) {
  const navigation = useNavigation();
  const { currentOffering, customerInfo, isProMember } = useRevenueCat();

  return (
    <ScrollView>
      <View className="flex-1 bg-gray-100 pt-10 relative">
        <TouchableOpacity onPress={() => navigation.navigate('Paywall')} activeOpacity={0.7} className="absolute z-50 top-12 right-10 items-center">
          <Ionicons name="person-circle" size={30} color="#e5962D" />
          <Text className="text-center text-[#e5962D]">UPGRADE</Text>
        </TouchableOpacity>

        <Image source={{uri: 'https://i.imgur.com/e14NE49.png'}} className="w-full h-64" />

        <View className="mx-5">
          <View className="flex-row justify-between space-x-2">
            <ActionRow
              title="Track Workout"
              screen="Demo"
              color="#e5962D"
              icon="fitness"
              vertical
            />

            <ActionRow
              title="Browse Workouts"
              screen="Demo"
              color="#1982c4"
              icon="library"
              vertical
            />
          </View>

          <ActionRow
            title="Connect With Friends"
            screen="Demo"
            color="#F44174"
            icon="share-social"
          />

          <ActionRow
            title="Add an Exercise"
            screen="Demo"
            color="#8AC926"
            icon="add-circle"
            requiresPro
          />

          <ActionRow
            title="Create a Routine"
            screen="Demo"
            color="#C03221"
            icon="md-time"
            requiresPro
          />

          <ActionRow
            title="Join Challenges"
            screen="Demo"
            color="#23967F"
            icon="trophy"
            requiresPro
          />
        </View>

      <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}
