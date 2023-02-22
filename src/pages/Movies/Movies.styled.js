import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
`;

export const MovieInput = styled.input`
  height: 25px;
  font-size: medium;
  border: 1px solid rgb(169, 153, 153);
  border-radius: 10px 0 0 10px;
  background-color: rgb(240, 225, 225);
  padding: 2px 3px 2px 10px;
`;

export const MovieSubmitBtn = styled.button`
  font-size: medium;
  height: 100%;
  padding: 2px 3px;
  border: 1px solid rgb(169, 153, 153);
  border-radius: 0 10px 10px 0;
  background-color: rgb(240, 225, 225);
`;

export const MovieList = styled.ul`
  list-style: none;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MovieLink = styled(Link)`
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
