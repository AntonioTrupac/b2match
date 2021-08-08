import axios from 'axios';
import { FC, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { Input } from '../components/input/Input';
import { Country } from '../components/page/Country';
import { CountryTable } from '../components/table/CountryTable';
import { CountryTableBody } from '../components/table/CountryTableBody';
import { CountryTableHeader } from '../components/table/CountryTableHeader';
import { CountryData } from '../types/types';
import { InputContainer } from './styled/countries-styled';

export const Countries: FC = () => {
  const [search, setSearch] = useState('');

  const { isError, isLoading, data, error } = useQuery<CountryData[], Error>(
    ['countries'],
    async () => {
      const { data } = await axios.get('https://restcountries.eu/rest/v2/all');

      return data;
    },
    {}
  );

  const filterCountries = useMemo(() => {
    return data?.filter(
      (country) =>
        country.name.toLowerCase().includes(search.toLowerCase()) ||
        country.capital.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  return (
    <>
      {isError && error && <p>{error.message}</p>}
      {isLoading && <p>Fetching data...</p>}
      <InputContainer>
        <Input
          placeholder='Search countries'
          type='text'
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputContainer>
      <CountryTable>
        <CountryTableHeader />
        <CountryTableBody>
          {filterCountries?.map((country) => {
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
    </>
  );
};
