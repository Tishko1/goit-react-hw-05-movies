import Container from 'components/Container/Container';
import React from 'react';

import { NavHeader, HeaderNav, NavLinkStyled } from './Header.styled';

export default function Header() {
  return (
    <NavHeader>
      <Container>
        <HeaderNav>
          <NavLinkStyled to="/">Home </NavLinkStyled>
          <NavLinkStyled to="/movies">Movies </NavLinkStyled>
        </HeaderNav>
      </Container>
    </NavHeader>
  );
}
