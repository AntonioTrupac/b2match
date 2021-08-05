import axios from 'axios';
import { FC } from 'react';
import { useQuery } from 'react-query';
export const Countries: FC = () => {
  const { status, data, error, isFetching } = useQuery(
    'countries',
    async () => {
      const { data } = await axios.get('https://restcountries.eu/rest/v2/all');
      console.log('data', data);
      return data;
    }
  );
  return (
    <div>
      <h1>Hey</h1>
    </div>
  );
};
