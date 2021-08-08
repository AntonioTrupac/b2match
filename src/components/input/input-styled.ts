import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 0.5rem 1rem;
  border: 2px solid black;
  border-radius: 0.5rem;
  font-size: 16px;
  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    text-align: center;
  }
`;
