import axios from 'axios';

export const searchApi = axios.create({
  baseURL: 'https://search.reservamos.mx/api/v2',
});
