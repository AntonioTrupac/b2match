import axios from 'axios';
import { FC } from 'react';
import { useQuery } from 'react-query';
import { useHistory, useParams } from 'react-router-dom';
import { CountryData } from '../types/types';
import {
  BorderCountries,
  BorderCountriesContainer,
  ButtonContainer,
  CountryDetailsContainer,
  Currency,
  Details,
  Flag,
  FlagContainer,
  StyledButton,
  StyledCountriesButton,
} from './styled/countryDetails-styled';
import { convertPopulation } from '../utils/convertPopulation';

type Params = {
  alpha2Code: string;
};

const fetchCountryByName = async (code: string): Promise<CountryData> => {
  console.log('fetch country code', code);
  const { data } = await axios.get(
    `https://restcountries.eu/rest/v2/alpha/${code}`
  );

  return data;
};

export const CountryDetails: FC = () => {
  const history = useHistory();
  const { alpha2Code } = useParams<Params>();
  const { error, data, isLoading, isError } = useQuery<CountryData, Error>(
    ['countryNames', alpha2Code],
    () => fetchCountryByName(alpha2Code),
    {
      enabled: !!alpha2Code,
    }
  );

  const goBack = async () => {
    history.push('/countries');
  };

  return (
    <>
      {isError && error && <p>{error.message}</p>}
      {isLoading && <p>Fetching data...</p>}
      <ButtonContainer addMargin='20px '>
        <StyledButton onClick={goBack}>go back</StyledButton>
      </ButtonContainer>
      <CountryDetailsContainer>
        <FlagContainer>
          <Flag src={data?.flag} alt={data?.name} />
        </FlagContainer>
        <Details>
          <h1>{data?.name}</h1>
          <p>
            Native name:<span> {data?.nativeName}</span>
          </p>
          <p>
            Capital: <span>{data?.capital}</span>
          </p>
          <p>
            Population:{' '}
            <span>
              {data?.population && convertPopulation(data?.population)}
            </span>
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
            <h1>Bordering countries</h1>
            <BorderCountries>
              <>
                {data && data?.borders && data?.borders?.length === 0 && (
                  <p>No bordering countries</p>
                )}
                {data?.borders.map((borders) => {
                  const id = Math.random() * 1000;
                  return (
                    <StyledCountriesButton
                      key={id}
                      onClick={() => history.push(`/countries/${borders}`)}
                    >
                      {borders}
                    </StyledCountriesButton>
                  );
                })}
              </>
            </BorderCountries>
          </BorderCountriesContainer>
        </Details>
      </CountryDetailsContainer>
    </>
  );
};
