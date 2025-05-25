import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { trendings } from '@/mocks/trending';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

type TrendingDrinks = {
  id: number,
  imageUrl: string,
  drinkName: string,
  rating: number
}

export default function TrendingDrinks() {
  const [trending, setTrending] = useState<TrendingDrinks[]>([]);

  const fetchTrending = async () => {
    try {
      const response = trendings;
      setTrending(response);
    } catch (error) {
      console.error('Erro ao trazer dados', error)
    }
  }

  useEffect(() => {
    fetchTrending();
  }, [])


  return (
    <View>
      <Text className='font-marcellus text-secondary pb-3 text-[33px]'>Trending Drinks</Text>
      <View className=''>
        {trending.length === 0 ? (
          <View className='flex-row gap-6 justify-between items-center w-full'>
            <AntDesign name='warning' size={64} color={'#DDB967'} />
            <Text className='text-white font-marcellus text-xl flex-1'>
              Oops... we don't found any trending drink
            </Text>
          </View>
        ) : (
          <View className='gap-3 '>
            {trending.map((record, index) => (
              <View className='bg-primary_2 relative flex-row justify-between w-full rounded-lg py-5 px-5' key={record.id ?? index}>
                <View className='flex-row gap-5'>
                  <Image source={{ uri: record.imageUrl }} className='w-24 h-24 rounded-lg' />
                  <Text className='text-secondary font-marcellus text-xl'>{record.drinkName}</Text>
                </View>
                <View className='flex-row items-end'>
                  {[...Array(5)].map((_, i) => {
                    if (i < Math.floor(record.rating)) {
                      return (
                        <FontAwesome
                          key={i}
                          name='star'
                          size={16}
                          color={'#DDB967'}
                        />
                      );
                    } else if (i < record.rating) {
                      return (
                        <FontAwesome
                          key={i}
                          name='star-half-empty'
                          size={16}
                          color={'#DDB967'}
                        />
                      );
                    } else {
                      return (
                        <FontAwesome
                          key={i}
                          name='star-o'
                          size={16}
                          color={'#DDB967'}
                        />
                      );
                    }
                  })}
                </View>
              </View>
            ))}
          </View>
        )}
      </View>

    </View>
  )
}