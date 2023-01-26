//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, Alert} from 'react-native';
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import useRevenueCat from "../hooks/useRevenueCat";
import Purchases from "react-native-purchases";

const PaywallScreen = () => {
  const navigation = useNavigation();
  const { currentOffering, customerInfo, isProMember } = useRevenueCat();

  if(!currentOffering) {
    return (
      <View className="items-center justify-center h-screen">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  const restorePurchases = async () => {
    const purchaserInfo = await Purchases.restorePurchases();

    if(purchaserInfo.activeSubscriptions.length > 0) {
      Alert.alert("Success", "Your subscription has been restored");
    } else {
      Alert.alert("Error", "No subscriptions found");
    }
  }

  const handleAnnualPurchase = async () => {
    if(!currentOffering?.annual) return;

    const purchaserInfo = await Purchases.purchasePackage(currentOffering.annual);
    console.log("You purchased: ", purchaserInfo);

    if(purchaserInfo.customerInfo.entitlements.active.pro) {
      navigation.goBack();
      Alert.alert("Success!", "You are now a Pro Member!");
    }
  }

  const handleMonthlyPurchase = async () => {
    if(!currentOffering?.monthly) return;

    const purchaserInfo = await Purchases.purchasePackage(currentOffering.monthly);
    console.log("You purchased: ", purchaserInfo);

    if(purchaserInfo.customerInfo.entitlements.active.pro) {
      navigation.goBack();
      Alert.alert("Success!", "You are now a Pro Member!");
    }
  }

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

      <TouchableOpacity onPress={handleAnnualPurchase} className="items-center px-10 py-5 bg-[#e5962D] mx-10 rounded-full" activeOpacity={0.7}>
        <Text className="text-white text-md text-center font-bold mb-1">FREE trial for 1 week...</Text>
        <Text className="text-white">{currentOffering.monthly?.product.priceString}/month after</Text>
      </TouchableOpacity>

      {currentOffering?.annual && (
        <TouchableOpacity onPress={handleMonthlyPurchase} className="items-center px-10 py-5 border-2 border-[#e5962D] mt-2 mx-10 rounded-full" activeOpacity={0.7}>
          <Text className="text-white text-md text-center font-bold mb-1">Save{" "} {((1 - currentOffering.annual?.product.price! / (currentOffering.monthly?.product.price! * 12)) * 100).toPrecision(2)}% Annually</Text>
          <Text className="text-white">{currentOffering.annual?.product.priceString}/year</Text>
        </TouchableOpacity>
      ) }

      <TouchableOpacity activeOpacity={0.7} onPress={restorePurchases}>
        <Text className="text-center text-[#e5962D]">Restore Purchases</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PaywallScreen;
