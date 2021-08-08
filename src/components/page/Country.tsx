import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { TD, TR } from '../table/styled/countryTableBody-styled';

type CountryProps = {
  name: string;
  capital: string;
  region: string;
  population: string | number;
  flag: string;
  alpha2Code: string;
};

export const Country: FC<CountryProps> = (props) => {
  const { name, capital, region, population, flag, alpha2Code } = props;
  const history = useHistory();

  const handleRowClick = () => {
    history.push(`/countries/${alpha2Code}`);
  };

  return (
    <>
      <TR onClick={handleRowClick}>
        <TD scope='row' data-label='Name'>
          {name}
        </TD>
        <TD scope='row' data-label='Capital'>
          {capital === '' ? 'No capital' : capital}
        </TD>
        <TD scope='row' data-label='Region'>
          {region === '' ? 'No region' : region}
        </TD>
        <TD scope='row' data-label='Population'>
          {population < 1 ? 'No population' : population}
        </TD>
        <TD scope='row' data-label='Flag'>
          <img src={flag} alt={name} />
        </TD>
      </TR>
    </>
  );
};
