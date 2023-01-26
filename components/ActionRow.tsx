//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

type Props = {
  title: string;
  screen: any;
  color: string;
  requiresPro?: boolean;
  icon?: string;
  vertical?: boolean;
}

const ActionRow = ({title, screen, color, requiresPro, icon, vertical}: Props) => {
  return (
    <TouchableOpacity className={`flex m-2 flex-1 justify-center items-center py-6 shadow-sm rounded-lg space-x-2 ${vertical ? "flex-col" : "flex-row"}`} activeOpacity={0.7} style={{backgroundColor: color}}>
      <Ionicons name={icon} size={24} color="white" />
      <Text className="text-white font-bold text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionRow;
