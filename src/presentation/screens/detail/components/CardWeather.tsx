import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {Weather} from '../../../../domain/entities/weather';
import {Place} from '../../../../domain/entities/place';
import {getDate} from '../../../utils/dates';
import {Card} from 'react-native-paper';

interface Props {
  weather: Weather;
}

export const CardWeather = ({weather}: Props) => {
  return (
    <Card style={[styles.cardContainer]}>
      <Card.Title title={getDate(weather.dt)} />
      <Card.Content>
        <Text
          style={{
            marginBottom: 15,
          }}>{`Temperatura Maxima ${weather.tempMax}°C`}</Text>
        <Text>{`Temperatura Minima ${weather.tempMin}°C`}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    color: 'white',
    backgroundColor: 'white',
    height: 120,
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: '#000',
    elevation: 5,
  },
});
