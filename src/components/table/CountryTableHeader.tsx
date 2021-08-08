import { FC } from 'react';
import { TableHeader, TH, TR } from './styled/countryTableHeader-styled';
// import { TR } from './styled/countryTable-styled';

export const CountryTableHeader: FC = () => {
  return (
    <>
      <TableHeader>
        <TR>
          <TH scope='col'>Name</TH>
          <TH scope='col'>Capital</TH>
          <TH scope='col'>Region</TH>
          <TH scope='col'>Population</TH>
          <TH scope='col'>Flag</TH>
        </TR>
      </TableHeader>
    </>
  );
};
