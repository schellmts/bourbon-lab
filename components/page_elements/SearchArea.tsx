import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from '../elements/Input'

export default function SearchArea() {
  const [searchVal, setSearchVal] = useState("");

  const searchDrink = (value: string) => {
    setSearchVal(value);
    Alert.alert("Buscando por:", value);
  }

  return (
    <View>
      <Text className='font-marcellus text-secondary pb-3 text-[33px]'>Search</Text>
      <Input
        placeholder='Search Everything...'
        onChangeText={setSearchVal}
        value={searchVal}
        isSearch={true}
        onSearch={searchDrink}
      />
    </View>
  )
}
