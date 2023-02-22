import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export const HeaderNav = styled.nav`
  gap: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 26px;
  text-decoration: none;
  color: black;
  padding: 0 30px;
  &:hover {
    color: rgb(59, 44, 44);
    border: 1px solid rgb(169, 153, 153);
    border-radius: 10px;
    background-color: rgb(240, 225, 225);
  }
  &.active {
    font-size: 26px;
    text-decoration: none;
    color: black;
    padding: 0 30px;
    background-color: rgb(169, 153, 153);
    border-radius: 10px;
  }
`;
