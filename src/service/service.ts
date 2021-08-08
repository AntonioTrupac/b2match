import axios from 'axios';
import { CountryData } from '../types/types';

export const getData = {
  getAllCountries: async (): Promise<CountryData[]> => {
    const { data } = await axios.get('https://restcountries.eu/rest/v2/all');

    return data;
  },
  getCountryByCode: async (code: string): Promise<CountryData> => {
    const { data } = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${code}`
    );

    return data;
  },
};
