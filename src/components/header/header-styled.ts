import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: hsl(0, 0%, 100%);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

export const HeaderContent = styled.p`
  font-size: 30px;
  font-weight: 500;

  @media only screen and (max-width: 1200px) {
    font-size: 20px;
    font-weight: 400;
  }
`;
