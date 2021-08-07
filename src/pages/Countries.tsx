import axios from 'axios';
import { FC } from 'react';
import { useQuery } from 'react-query';
import { Country } from '../components/page/Country';
import { CountryTable } from '../components/table/CountryTable';
import { CountryTableBody } from '../components/table/CountryTableBody';
import { CountryTableHeader } from '../components/table/CountryTableHeader';
import { CountryData } from '../types/types';

export const Countries: FC = () => {
  const { status, data, error } = useQuery<CountryData[], Error>(
    ['countries'],
    async () => {
      const { data } = await axios.get('https://restcountries.eu/rest/v2/all');
      console.log('Fetch', data);
      return data;
    },
    {}
  );

  if (status === 'error') {
    error && <p>{error.message}</p>;
  }

  if (status === 'loading') {
    return <p>Fetching data</p>;
  }

  return (
    <div>
      <CountryTable>
        <CountryTableHeader />
        <CountryTableBody>
          {data?.map((country) => {
            const id = Math.random() * 100;
            return (
              <Country
                key={id}
                name={country.name}
                capital={country.capital}
                population={country.population}
                region={country.region}
                flag={country.flag}
                alpha2Code={country.alpha2Code}
              />
            );
          })}
        </CountryTableBody>
      </CountryTable>
    </div>
  );
};
