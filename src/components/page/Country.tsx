import { FC } from 'react';
import { useQueryClient } from 'react-query';
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

  const queryClient = useQueryClient();

  const handleRowClick = () => {
    history.push(`/countries/${alpha2Code}`);
  };

  return (
    <>
      <TR onClick={handleRowClick}>
        <TD>{name}</TD>
        <TD>{capital === '' ? 'No capital' : capital}</TD>
        <TD>{region === '' ? 'No region' : region}</TD>
        <TD>{population < 1 ? 'No population' : population}</TD>
        <TD>
          <img src={flag} alt={name} />
        </TD>
      </TR>
    </>
  );
};
