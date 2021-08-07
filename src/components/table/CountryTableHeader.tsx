import { FC } from 'react';
import { TableHeader, TH, TR } from './styled/countryTableHeader-styled';
// import { TR } from './styled/countryTable-styled';

export const CountryTableHeader: FC = () => {
  return (
    <>
      <TableHeader>
        <TR>
          <TH>Name</TH>
          <TH>Capital</TH>
          <TH>Region</TH>
          <TH>Population</TH>
          <TH>Flag</TH>
        </TR>
      </TableHeader>
    </>
  );
};
