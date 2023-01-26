//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import useRevenueCat from "../hooks/useRevenueCat";

type Props = {
  title: string;
  screen: any;
  color: string;
  requiresPro?: boolean;
  icon?: string;
  vertical?: boolean;
}

const ActionRow = ({title, screen, color, requiresPro, icon, vertical}: Props) => {
  const navigation = useNavigation();
  const {isProMember } = useRevenueCat();
  const lockedForProMembers = requiresPro && !isProMember;
  return (
    <TouchableOpacity onPress={() => lockedForProMembers ? navigation.navigate('Paywall') : navigation.navigate(screen)} className={`flex m-2 flex-1 justify-center items-center py-6 shadow-sm rounded-lg space-x-2 ${vertical ? "flex-col" : "flex-row"}`} activeOpacity={0.7} style={{backgroundColor: lockedForProMembers ? "gray": color}}>
      {lockedForProMembers && (
        <View className="absolute top-4 right-4 rotate-12 items-center">
          <Ionicons name="lock-closed" size={20} color="white" />
          <Text className="text-white font-extrabold">PRO</Text>
        </View>
      )}

      <Ionicons name={icon} size={24} color="white" />
      <Text className="text-white font-bold text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionRow;
