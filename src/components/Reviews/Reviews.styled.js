import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-right: 40px;
  gap: 20px;
`;

export const ReviewsItem = styled.li`
  padding: 10px;
  border: 1px solid rgb(169, 153, 153);
  border-radius: 10px;
  background-color: rgb(240, 225, 225);
`;

export const ReviewsDate = styled.p`
  font-size: 12px;
`;

export const ReviewsNoReview = styled.p`
  margin: 0 auto;
  font-size: 24px;
  font-weight: 100;
`;
