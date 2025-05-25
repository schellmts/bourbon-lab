import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import "@/global.css"
import LoginScreen from '@/components/auth/LoginScreen'
import RegisterScreen from '@/components/auth/Register'

export default function Register() {
  return (
    <View className='flex flex-1'>
      <RegisterScreen />
    </View>
  )
}
