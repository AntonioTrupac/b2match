import { FC } from 'react';
import { HeaderContainer, HeaderContent } from './header-styled';

type HeaderProps = {
  title: string;
};

export const Header: FC<HeaderProps> = (props) => {
  return (
    <HeaderContainer>
      <HeaderContent>{props.title}</HeaderContent>
    </HeaderContainer>
  );
};
