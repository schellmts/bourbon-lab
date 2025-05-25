import { View, Text } from 'react-native'
import React from 'react'
import SearchArea from '@/components/page_elements/SearchArea'
import TrendigDrinks from '@/components/page_elements/TrendingDrinks'
import FavoriteDrinks from '@/components/page_elements/FavoriteDrinks'
import TrendingDrinks from '@/components/page_elements/TrendingDrinks'

export default function Home() {
  return (
    <View className='flex-1 gap-10 px-5 py-10'>
      <SearchArea />
      <FavoriteDrinks />
      <TrendingDrinks />
    </View>
  )
}