// @ts-nocheck
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React from "react";
import {StatusBar} from "expo-status-bar";

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}