import { FC, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { HeaderContainer, HeaderContent } from './header-styled';

type HeaderProps = {
  title: string;
};

type Params = {
  countries: string;
};

export const Header: FC<HeaderProps> = (props) => {
  const { countries } = useParams<Params>();
  const location = useLocation();

  return (
    <HeaderContainer>
      <HeaderContent>
        {location.pathname === '/countries' ? (
          props.title
        ) : (
          <p>Oh! So u like this country?</p>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};
