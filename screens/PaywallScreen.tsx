//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const PaywallScreen = () => {
  const navigation = useNavigation();
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
    </ScrollView>
  );
};

export default PaywallScreen;
