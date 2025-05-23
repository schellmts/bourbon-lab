import React from 'react';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { Text } from 'react-native';
import "@/global.css";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    MarcellusSC: require('../assets/fonts/MarcellusSC-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>; // Ou um componente de loading mais elaborado
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
