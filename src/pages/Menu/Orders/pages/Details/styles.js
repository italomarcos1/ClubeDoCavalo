import styled from 'styled-components/native';

export const Item = styled.View`
  width: 100%;
  height: 200px;
  background-color: #fff;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const DetailsContainer = styled.View`
  width: 100%;
`;

export const Detail = styled.View`
  width: 100%;
  height: 60px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-top-color: #ccc;
  border-top-width: 1px;
`;
