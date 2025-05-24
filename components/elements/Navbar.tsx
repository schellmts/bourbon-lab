import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';

export default function Navbar() {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <View style={{ paddingTop: 20, paddingVertical: 10 }} className="bg-primary_2 w-full flex flex-row items-center px-2 justify-around">
        <Feather name='menu' size={24} color={'#DDB967'} />
        <Text className='font-marcellus text-secondary text-[33px]'>Bourbon Lab</Text>
        <FontAwesome name="user-circle-o" size={26} color="#DDB967" />
      </View>
    </View>
  );
}
