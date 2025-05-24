import { View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

type InputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  onChange?: () => void;
  isSearch?: boolean;
  onSearch?: (searchVal: string) => void;
}

export default function Input({
  value,
  onChangeText,
  placeholder,
  onChange,
  isSearch = false,
  onSearch
}: InputProps) {
  return (
    <View className='relative'>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onChange={onChange}
        className='border border-1 border-secondary rounded-xl bg-primary_2 px-4 text-secondary'
        placeholder={placeholder}
        placeholderTextColor='#DDB967'
      />
      {isSearch && (
        <TouchableOpacity
          className='absolute top-2.5 right-2'
          onPress={() => onSearch?.(value)}
        >
          <AntDesign name='search1' size={24} color={'#DDB967'} />
        </TouchableOpacity>
      )}
    </View>
  )
}
