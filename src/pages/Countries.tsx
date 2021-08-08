import { FC, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { Input } from '../components/input/Input';
import { Country } from '../components/page/Country';
import { CountryTable } from '../components/table/CountryTable';
import { CountryTableBody } from '../components/table/CountryTableBody';
import { CountryTableHeader } from '../components/table/CountryTableHeader';
import { getData } from '../service/service';
import { CountryData } from '../types/types';
import { InputContainer } from './styled/countries-styled';
import { Spinner, SpinnerContainer } from './styled/countryDetails-styled';

export const Countries: FC = () => {
  const [search, setSearch] = useState('');

  const { isError, isLoading, data, error } = useQuery<CountryData[], Error>(
    ['countries'],
    getData.getAllCountries
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
      {isLoading && (
        <>
          <SpinnerContainer>
            <Spinner color='black' type='spin' width='200px' height='200px' />
          </SpinnerContainer>
        </>
      )}

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
