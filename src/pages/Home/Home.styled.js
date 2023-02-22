import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HomeList = styled.ul`
  list-style: none;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: black;
  padding: 5px;
  &:hover {
    color: rgb(59, 44, 44);
    border: 1px solid rgb(169, 153, 153);
    border-radius: 10px;
    background-color: rgb(240, 225, 225);
  }
`;
