import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useHistory, useParams } from 'react-router-dom';
import { CountryData } from '../types/types';
import {
  BorderCountriesContainer,
  ButtonContainer,
  CountryDetailsContainer,
  Currency,
  Details,
  Flag,
  FlagContainer,
  StyledButton,
} from './styled/countryDetails-styled';

type Params = {
  alpha2Code: string;
};

const fetchCountryByName = async (code: string): Promise<CountryData> => {
  console.log('fetch country code', code);
  const { data } = await axios.get(
    `https://restcountries.eu/rest/v2/alpha/${code}`
  );
  console.log(data);
  return data;
};

export const CountryDetails: FC = () => {
  const history = useHistory();
  //   const queryClient = useQueryClient();
  const { alpha2Code } = useParams<Params>();
  const { error, data, status, isLoading, isError } = useQuery<
    CountryData,
    Error
  >(['countryNames', alpha2Code], () => fetchCountryByName(alpha2Code), {
    enabled: !!alpha2Code,
  });

  const goBack = async () => {
    history.goBack();
    // queryClient.invalidateQueries(['countryNames', alpha2Code]);
    // queryClient.removeQueries('countryNames', { inactive: true });

    //check dis out
  };

  if (status === 'error') {
    error && <p>{error.message}</p>;
  }

  if (status === 'loading') {
    return <p>Fetching data</p>;
  }

  //   const doFetch = {
  //       fetch: fetchCountryByName
  //   }

  return (
    <>
      {isError && error && <p>{error.message}</p>}
      {isLoading && <p>Fetching data...</p>}
      <ButtonContainer>
        <StyledButton onClick={goBack} addMargin='100px 0 50px'>
          go back
        </StyledButton>
      </ButtonContainer>
      <CountryDetailsContainer>
        <FlagContainer>
          <Flag src={data?.flag} alt={data?.name} />
        </FlagContainer>
        <Details>
          <p>
            Country name:<span> {data?.name}</span>
          </p>
          <p>
            Capital: <span>{data?.capital}</span>
          </p>
          <p>
            Population: <span>{data?.population}</span>
          </p>
          <p>
            Region: <span>{data?.region}</span>
          </p>
          <p>
            Area: <span>{data?.area} km^2</span>
          </p>
          <Currency>
            Currency:{' '}
            {data?.currencies.map((currency) => {
              const id = Math.random() * 1000;
              return (
                <div key={id}>
                  <span>{currency.code}</span>
                  <span>({currency.symbol})</span>
                </div>
              );
            })}
          </Currency>
          <BorderCountriesContainer>
            <h1>Border Countries</h1>
          </BorderCountriesContainer>
        </Details>
      </CountryDetailsContainer>
    </>
  );
};
