import styled from 'styled-components';

export const CountryTableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Table = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 50px;
  padding: 0;
  width: 100%;
  table-layout: fixed;

  @media screen and (max-width: 700px) {
    border: 0;
  }
`;
