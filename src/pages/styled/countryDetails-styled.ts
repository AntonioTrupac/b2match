import styled from 'styled-components';

export const ButtonContainer = styled.div``;

interface IButtonProps {
  spacedOut: boolean;
}

export const StyledButton = styled.button.attrs<IButtonProps>((props) => ({
  style: props.spacedOut ? { margin: '30px 0 50px' } : {},
}))<IButtonProps>`
  border: 0;
  border-radius: 0;
  box-shadow: 0 0 10px hsla(207, 26%, 0%, 0.5);
  color: inherit;
  display: inline-block;
  padding: 10px 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const CountryDetailsContainer = styled.div`
  display: flex;
  //   flex-direction: column;
  justify-content: center;
  align-items: center;
  //   width: 100%;
  margin: 5rem 0;
  //   border: 1px solid black;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  div {
    margin: 2rem;
  }

  div > p {
    margin-top: 0.2rem;
    font-size: 30px;
    font-weight: 500;
    text-transform: uppercase;
  }
`;
export const FlagContainer = styled.div``;

export const Flag = styled.img`
  height: 300px;
  width: auto;
`;
