import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieDetailsBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  padding: 30px;
  border: 1px solid rgb(169, 153, 153);
  border-radius: 10px;
  background-color: rgb(240, 225, 225);
`;

export const MovieDetailsRightBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px 0 20px;
`;

export const MovieDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 10px;
  padding: 0;
`;

export const MovieDetailsMainTitle = styled.h1`
  font-size: 32px;
  margin-top: 5px;
`;

export const MovieDetailsValue = styled.span`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: large;
  font-weight: 500;
  margin-left: 10px;
`;

export const MovieDetailsOverview = styled.p`
  font-size: medium;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 500;
  margin: 0;
  text-indent: 3ch;
`;

export const MovieDetailsMore = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

export const MovieDetailsLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: larger;
  padding: 5px;
  background-color: rgb(245, 227, 227);
  border-radius: 5px;
  &:hover {
    scale: 1.05;
    background-color: rgb(255, 255, 255);
  }
`;
