import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 20px;
  justify-content: space-evenly;
  margin: 0;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 400px;
  gap: 20px;
  border: 1px solid rgb(169, 153, 153);
  border-radius: 10px;
  background-color: rgb(240, 225, 225);
  padding: 5px;
`;

export const CastValue = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const CastNoCast = styled.p`
  margin: 0 auto;
  font-size: 24px;
  font-weight: 100;
`;

export const CastRightBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px 0 20px;
`;
