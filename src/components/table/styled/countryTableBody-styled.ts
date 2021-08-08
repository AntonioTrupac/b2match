import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TableBody = styled.tbody``;
export const TD = styled.td`
  padding: 0.625em;
  text-align: center;
  font-size: 20px;

  img {
    width: 80px;
    height: auto;
  }

  @media screen and (max-width: 700px) {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;

    &::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    &:last-child {
      border-bottom: 0;
    }
  }
`;
export const TR = styled.tr`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
  transition: 0.3s ease-in-out;
  transition-property: color, transform, border;

  &:hover {
    cursor: pointer;
    background-color: #dcdcdc;
    transform: scale(1.02);
    border: none;
  }

  @media screen and (max-width: 700px) {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }
`;
