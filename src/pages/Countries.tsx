import axios from 'axios';
import { FC } from 'react';
import { useQuery, UseMutationResult } from 'react-query';
import { CountryTable } from '../components/table/CountryTable';
import { CountryTableBody } from '../components/table/CountryTableBody';
import { CountryTableHeader } from '../components/table/CountryTableHeader';

type CountryData = {
  name: string;
  topLevelDomain: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  population: number | string;
  latlng: number[];
  area: number;
  timezones: string[];
  flag: string;
};

export const Countries: FC = () => {
  const { status, data, error } = useQuery<CountryData[], Error>(
    'countries',
    async () => {
      const { data } = await axios.get('https://restcountries.eu/rest/v2/all');
      console.log('Fetch', data);
      return data;
    }
  );

  if (status === 'error') {
    error && <p>{error.message}</p>;
  }

  if (status === 'loading') {
    return <p>Fetching data</p>;
  }

  return (
    <div>
      {data?.map((country) => {
        const id = Math.random() * 100;
        //   console.log('ID', id);
        return (
          <div key={id}>
            <CountryTable>
              <CountryTableHeader />
              <CountryTableBody />
            </CountryTable>
          </div>
        );
      })}
    </div>
  );
};
