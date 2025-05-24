import React from 'react';
import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import { Text } from 'react-native';
import "@/global.css";

export default function _layout() {

  const [fontsLoaded] = useFonts({
    MarcellusSC: require('../assets/fonts/MarcellusSC-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
  }
  return (
    <Slot />
  )
}