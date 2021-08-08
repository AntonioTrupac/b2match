import styled from 'styled-components';
import ReactLoading from 'react-loading';

interface IButtonProps {
  addMargin?: string;
}

export const ButtonContainer = styled.div<IButtonProps>`
  display: flex;
  justify-content: flex-end;
  margin-top: ${(props) => (props.addMargin ? props.addMargin : 0)};

  @media only screen and (max-width: 1200px) {
    justify-content: flex-start;
  }
`;

export const StyledButton = styled.button`
  border: 0;
  box-shadow: 0 0 10px hsla(207, 26%, 0%, 0.5);
  color: inherit;
  display: inline-block;
  padding: 15px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease-out;

  &:first-letter {
    text-transform: uppercase;
  }

  &:hover {
    background-color: #7fffd4;
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

  @media only screen and (max-width: 900px) {
    margin-top: 1rem;
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
  width: 500px;
  min-width: 500px;

  @media only screen and (max-width: 1200px) {
    width: 100%;
    height: auto;
    min-width: 300px;
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

export const BorderCountries = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 1rem;

  & > p {
    font-size: 20px;
    font-weight: 300;
  }

  @media only screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
    width: 100%;
    justify-content: center;
    /* & > p {
      justify-content: center;
      align-items: center;
    } */
  }
`;

export const StyledCountriesButton = styled.button<IButtonProps>`
  margin: ${(props) => (props.addMargin ? props.addMargin : 0)};
  border: 0;
  box-shadow: 0 0 10px hsla(207, 26%, 0%, 0.5);
  color: inherit;
  display: inline-block;
  padding: 15px 20px;
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:first-letter {
    text-transform: uppercase;
  }

  &:hover {
    background-color: hsl(0, 0%, 100%);
  }

  @media only screen and (max-width: 1200px) {
    margin: ${(props) => (props.addMargin ? '30px 0 5px' : props.addMargin)};
  }
`;

export const SpinnerContainer = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
`;

export const Spinner = styled(ReactLoading)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.7;
  z-index: 1;
`;
