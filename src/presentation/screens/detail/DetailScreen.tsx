import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigator/StackNavigator';
import {getWather} from '../../../actions/weather/get-weather';
import {useQuery} from '@tanstack/react-query';
import {FlatList} from 'react-native-gesture-handler';
import {CardWeather} from './components/CardWeather';
import {Text} from 'react-native-paper';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route}: Props) => {
  const {place} = route.params;

  const {isLoading, data: weatherList = []} = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWather(place.lat, place.long),
  });

  return (
    <View style={{padding: 20}}>
      {isLoading ? (
        <ActivityIndicator style={{height: 100, justifyContent: 'center'}} />
      ) : (
        <>
          <Text variant="titleMedium">
            {`${place.city_name}, ${place.state}, ${place.country}`}
          </Text>
          <FlatList
            style={{marginTop: 15}}
            data={weatherList}
            keyExtractor={(place, item) =>
              `${place.dt.getMilliseconds()}-${item}`
            }
            numColumns={1}
            renderItem={({item}) => <CardWeather weather={item} />}
          />
        </>
      )}
    </View>
  );
};
