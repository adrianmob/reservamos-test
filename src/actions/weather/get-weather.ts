import {openWeatherApi} from '../../config/api/openWeatherApi';
import {API_KEY_OPEN_WEATHER} from '@env';
import {Weather} from '../../domain/entities/weather';
import {WeatherAPI} from '../../infrastructure/interfaces/weatherapi';

export const getWather = async (
  lat: number,
  lon: number,
): Promise<Weather[]> => {
  try {
    console.log(API_KEY_OPEN_WEATHER);
    const url = `/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts,current&appid=${API_KEY_OPEN_WEATHER}`;
    const {data} = await openWeatherApi.get<WeatherAPI>(url);

    const filterData = data.daily.map(item => ({
      dt: new Date(item.dt * 1000),
      tempMax: item.temp.max,
      tempMin: item.temp.min,
    }));

    return filterData;
  } catch (error) {
    throw new Error('Error getting places');
  }
};
