import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {Place} from '../../../../domain/entities/place';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../../navigator/StackNavigator';

interface Props {
  place: Place;
}

export const CardPlace = ({place}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const navigateToDetailPlace = () => {
    navigation.navigate('DetailScreen', {place});
  };

  return (
    <Pressable onPress={navigateToDetailPlace}>
      <View style={[styles.cardContainer]}>
        <Text>
          <Text style={{fontWeight: 'bold'}}>{place.city_name}</Text>
          {`, ${place.state}, ${place.country}.`}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    color: 'white',
    padding: 8,
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 40,
    flex: 1,
    borderRadius: 0,
    shadowColor: '#000',
    elevation: 5,
  },
});
