import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { favoriteDrinks } from '@/mocks/favoriteDrinks';
import { AntDesign } from '@expo/vector-icons';

type Drink = {
  id: string;
  name: string;
  imageUrl: string;
};

export default function FavoriteDrinks() {
  const [favorites, setFavorites] = useState<Drink[]>([]);

  const fetchFavorites = async () => {
    try {
      const response = favoriteDrinks;
      setFavorites(response);
    } catch (error) {
      console.error('Erro ao requisitar', error);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <View className='w-full'>
      <Text className='font-marcellus text-secondary pb-3 text-[33px]'>Favorite Drinks</Text>
      <View className='bg-primary_2 w-full rounded-lg py-5 px-5'>
        {favorites.length === 0 ? (
          <View className='flex-row gap-6 justify-between items-center w-full'>
            <AntDesign name='warning' size={64} color={'#DDB967'} />
            <Text className='text-white font-marcellus text-xl flex-1'>
              Oops... we don't found any favorite drink
            </Text>
          </View>
        ) : (
          <View className='gap-3'>
            {favorites.map((record, index) => (
              <View key={record.id ?? index}>
                <Text className='text-white font-marcellus text-lg'>{record.imageUrl}</Text>
                <Text className='text-white font-marcellus text-lg'>{record.name}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}
