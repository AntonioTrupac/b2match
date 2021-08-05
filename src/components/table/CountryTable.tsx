import { FC } from 'react';
import { CountryTableContainer } from './countryTable-styled';

export const CountryTable: FC = (props) => {
  return (
    <>
      <CountryTableContainer>{props.children}</CountryTableContainer>
    </>
  );
};
