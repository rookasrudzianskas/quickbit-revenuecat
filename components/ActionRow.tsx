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
    <TouchableOpacity activeOpacity={0.7} style={{backgroundColor: color}}>
      <Ionicons name={icon} size={24} color="white" />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionRow;
