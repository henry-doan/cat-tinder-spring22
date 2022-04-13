import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MyCatHeader = styled.h1`
  color: #584036;
  font-size: 50px;
  text-align: left;
  font-weight: bolder;

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const CatNavLink = styled(Link)`
  text-decoration: none !important;
  color: #584036;

  &:hover {
    color: #F2994B;
  }
`