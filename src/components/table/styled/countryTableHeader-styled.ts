import styled from 'styled-components';

export const TableHeader = styled.thead`
  @media screen and (max-width: 700px) {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;
export const TR = styled.tr`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
  @media screen and (max-width: 700px) {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }
`;
export const TH = styled.th`
  padding: 0.625em;
  text-align: center;
  background: #7fffd4;
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  /* padding: 1rem; */
  /* text-align: left; */
`;
