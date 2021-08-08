import styled from 'styled-components';

export const ButtonContainer = styled.div``;

interface IButtonProps {
  addMargin?: string;
}

export const StyledButton = styled.button<IButtonProps>`
  margin: ${(props) => (props.addMargin ? props.addMargin : 0)};
  border: 0;
  border-radius: 0;
  box-shadow: 0 0 10px hsla(207, 26%, 0%, 0.5);
  color: inherit;
  display: inline-block;
  padding: 15px 20px;
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  &:first-letter {
    text-transform: uppercase;
  }

  &:hover {
    background-color: hsla(134, 56%, 75%, 0.64);
  }

  @media only screen and (max-width: 1200px) {
    margin: ${(props) => (props.addMargin ? '30px 0 5px' : props.addMargin)};
  }
`;

export const CountryDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 5rem 0;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    margin: 2rem 0;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  p {
    margin-top: 5px;
    font-size: 20px;
    font-weight: 400;

    & > span {
      font-weight: 300;
    }
  }

  p:nth-child(1) {
    margin-top: 0;
  }
`;

export const Currency = styled.div`
  margin-top: 5px;
  font-size: 20px;
  display: flex;

  div > span {
    margin-left: 6px;
    font-weight: 300;
  }
`;

export const FlagContainer = styled.div`
  margin-top: 5px;
  margin-right: 3rem;
  height: 350px;
  width: 620px;

  @media only screen and (max-width: 1200px) {
    width: 100%;
    height: auto;
  }
`;

export const Flag = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const BorderCountriesContainer = styled.div`
  margin-top: 2rem;

  h1 {
    font-size: 24px;
    font-weight: 500;
  }
`;

export const BorderCountries = styled.div``;
