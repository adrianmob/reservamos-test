import {searchApi} from '../../config/api/searchApi';
import {Place} from '../../domain/entities/place';

export const getPlaces = async (query: string): Promise<Place[]> => {
  try {
    const url = `/places?q=${query}`;
    if (query.length === 0) {
      return [];
    }
    const {data} = await searchApi.get(url);
    return data.filter((places: Place) => places.result_type === 'city');
  } catch (error) {
    throw new Error('Error getting places');
  }
};
