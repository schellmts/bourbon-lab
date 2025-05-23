import { View, Text, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router';
import { CheckBox } from '@rneui/themed';

export default function LoginScreen() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(true);

  const toggleCheckbox = () => setChecked(!checked);



  return (
    <View className='flex bg-primary flex-1 items-center gap-5 justify-center px-10'>
      <View>
        <Text className='font-marcellus text-[33px] text-secondary text-center'>Bourbon Lab</Text>
        <Text className='font-marcellus text-[16px] text-white text-center'>Your personal cocktail laboratory</Text>
      </View>
      <View className='w-[80%] flex gap-4'>
        <TextInput className='border border-1 border-secondary rounded-xl bg-primary_2 px-4 text-secondary' placeholder='Username' placeholderTextColor='#DDB967' />
        <TextInput className='border border-1 border-secondary rounded-xl bg-primary_2 px-4 text-secondary' placeholder='Password' secureTextEntry placeholderTextColor='#DDB967' />
      </View>
      <View className='w-[80%] flex gap-4'>
        <TouchableOpacity className='bg-secondary rounded-xl py-2 px-4'>
          <Text className='text-center font-marcellus text-primary text-xl'>ENTER</Text>
        </TouchableOpacity>
        <Text className='font-marcellus text-[14px] text-white text-center'>Don't have a account? <Link className='text-third' href={'/'}>Register Now</Link></Text>
      </View>

    </View>
  )
}