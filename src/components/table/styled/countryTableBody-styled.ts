import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TableBody = styled.tbody``;
export const TD = styled.td`
  padding: 1rem;
  border: 1px solid #ccc;
  text-align: left;
  font-size: 20px;

  img {
    width: 80px;
    height: auto;
  }
`;
export const TR = styled.tr`
  height: 90px;
  transition: 0.3s ease-in-out;
  transition-property: color, transform, border;

  &:hover {
    cursor: pointer;
    background-color: #dcdcdc;
    transform: scale(1.02);
    border: none;
  }
`;
