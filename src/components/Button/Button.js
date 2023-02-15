// import { Component } from 'react';
import { ButtonStyled } from './Button.styled';

export const Button = ({ onButtonLoadMore }) => {
  return (
    <ButtonStyled onClick={onButtonLoadMore} type="button">
      Load More
    </ButtonStyled>
  );
};
