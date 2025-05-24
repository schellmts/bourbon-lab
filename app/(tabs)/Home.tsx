import { View, Text } from 'react-native'
import React from 'react'
import SearchArea from '@/components/page_elements/SearchArea'

export default function Home() {
  return (
    <View className='flex-1 px-5 py-10'>
      <SearchArea />
    </View>
  )
}