import {View} from 'react-native';
import React, {useState} from 'react';
import {ActivityIndicator, Text, TextInput} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useQuery} from '@tanstack/react-query';
import {getPlaces} from '../../../actions/places/get-places';
import {useDebouncedValue} from '../../hooks/useDebouncedValues';
import {FlatList} from 'react-native-gesture-handler';
import {CardPlace} from './components/CardPlace';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const [queryPlace, setQueryPlace] = useState('');

  const debounceValue = useDebouncedValue(queryPlace);

  const {isLoading, data: placesList = []} = useQuery({
    queryKey: ['places', debounceValue],
    queryFn: () => getPlaces(debounceValue),
  });

  return (
    <View style={{padding: 20, paddingTop: top + 10}}>
      <Text variant="titleLarge" style={{marginBottom: 15}}>
        Pronóstico del Clima
      </Text>
      <TextInput
        placeholder="Buscar una ciudad"
        mode="flat"
        autoFocus
        autoCorrect={false}
        onChangeText={setQueryPlace}
        value={queryPlace}
      />

      {isLoading && <ActivityIndicator style={{paddingTop: 20}} />}

      <FlatList
        style={{marginTop: 15}}
        data={placesList}
        keyExtractor={place => place.id}
        numColumns={1}
        renderItem={({item}) => <CardPlace place={item} />}
      />
    </View>
  );
};
