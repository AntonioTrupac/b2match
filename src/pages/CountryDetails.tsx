import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useHistory, useParams } from 'react-router-dom';
import { CountryData } from '../types/types';
import {
  ButtonContainer,
  CountryDetailsContainer,
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
  const queryClient = useQueryClient();
  const { alpha2Code } = useParams<Params>();
  const { error, data, status } = useQuery<CountryData, Error>(
    ['countryNames', alpha2Code],
    () => fetchCountryByName(alpha2Code),
    {
      enabled: !!alpha2Code,
    }
  );

  const goBack = async () => {
    history.goBack();
    queryClient.invalidateQueries(['countryNames', alpha2Code]);
    queryClient.removeQueries('countryNames', { inactive: true });
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
      <ButtonContainer>
        <StyledButton onClick={goBack} spacedOut>
          go back
        </StyledButton>
      </ButtonContainer>
      <CountryDetailsContainer>
        <FlagContainer>
          <Flag src={data?.flag} alt={data?.name} />
        </FlagContainer>
        <Details>
          <div>
            <p>
              Country Name:<span> {data?.name}</span>
            </p>
            <p>
              Country Capital: <span>{data?.capital}</span>
            </p>
            <p>
              Country Population: <span>{data?.population}</span>
            </p>
            <p>
              Country Region: <span>{data?.region}</span>
            </p>
            <p>
              Country Area: <span>{data?.area} km^2</span>
            </p>
          </div>
        </Details>
      </CountryDetailsContainer>
    </>
  );
};
