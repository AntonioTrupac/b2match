import { FC } from 'react';
import { TableBody } from './styled/countryTableBody-styled';

export const CountryTableBody: FC = (props) => {
  return (
    <>
      <TableBody>{props.children}</TableBody>
    </>
  );
};
