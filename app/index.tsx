import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import "@/global.css"
import LoginScreen from '@/components/auth/LoginScreen'

export default function App() {
  return (
    <View className='flex flex-1'>
      <LoginScreen />
    </View>
  )
}
