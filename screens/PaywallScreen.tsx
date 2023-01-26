//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import useRevenueCat from "../hooks/useRevenueCat";

const PaywallScreen = () => {
  const navigation = useNavigation();
  const { currentOffering, customerInfo, isProMember } = useRevenueCat();

  return (
    <ScrollView className="bg-[#1A2F44] flex-1 relative">
      <View className="m-10 space-y-2">
        <Text className="text-2xl text-center uppercase text-white font-bold">
          upgrade
        </Text>
        <Text className="text-center text-white">
          Upgrade to Pro to unlock all features
        </Text>
      </View>
      <TouchableOpacity className="absolute top-5 right-5" onPress={() => navigation.goBack()}>
        <Ionicons name="md-close-circle-sharp" size={32} color="#e5962D" />
      </TouchableOpacity>

      <View className="flex items-center">
        <MaterialCommunityIcons name="trophy-award" size={150} color="#e5962D" />
      </View>

      <View className="space-y-5 px-10 pt-5 pb-5">
        <View className="flex-row space-x-10 items-center">
          <Ionicons name="md-key" size={32} color="#e5962D" />
          <View className="flex-1">
            <Text className="text-white font-bold text-lg">
              Access to all pro features
            </Text>
            <Text className="text-white text-sm font-extralight">
              Upgrade to Premium version of the app and enoy all the exclusive features available for only to pro users. {" "}
            </Text>
          </View>
        </View>

        <View className="flex-row space-x-10 items-center">
          <Ionicons name="md-person-add-outline" size={32} color="#e5962D" />
          <View className="flex-1">
            <Text className="text-white font-bold text-lg">
              Helpline 24/7 support from Personal Trainers
            </Text>
            <Text className="text-white text-sm font-extralight">
              Get unlimited access to our finest personal trainers and get your questions answered in real time. {" "}
            </Text>
          </View>
        </View>

        <View className="flex-row space-x-10 items-center">
          <Ionicons name="md-star" size={32} color="#e5962D" />
          <View className="flex-1">
            <Text className="text-white font-bold text-lg">
              Unlock Limited Edition Content
            </Text>
            <Text className="text-white text-sm font-extralight">
              Unlock exclusive content that you can not get anywhere else, like special exclusive videos, articles and more. {" "}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PaywallScreen;
