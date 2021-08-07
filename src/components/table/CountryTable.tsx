import { FC } from 'react';
import { CountryTableContainer, Table } from './styled/countryTable-styled';

export const CountryTable: FC = (props) => {
  return (
    <>
      <CountryTableContainer>
        <Table>{props.children}</Table>
      </CountryTableContainer>
    </>
  );
};
