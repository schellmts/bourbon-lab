import { View, Text } from 'react-native'
import React from 'react'
import Navbar from '@/components/elements/Navbar'
import { Slot } from 'expo-router'

export default function _layout() {
  return (
    <View className='flex flex-1 bg-primary'>
      <Navbar />
      <Slot />
    </View>
  )
}