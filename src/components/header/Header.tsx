import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderContainer, HeaderContent } from './header-styled';

type HeaderProps = {
  title: string;
};

export const Header: FC<HeaderProps> = (props) => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <HeaderContent>
        {location.pathname === '/countries' ? (
          <span>{props.title}</span>
        ) : (
          <span>Oh! So u like this country?</span>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};
