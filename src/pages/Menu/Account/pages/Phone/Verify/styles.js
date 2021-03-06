import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 80px 20px 80px;
  align-items: center;
  justify-content: center;
`;

export const ValidationCodeInput = styled.TextInput`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background-color: #eceff4;
  text-align: left;
  color: #3a3a3a;
  font-size: 22px;
  text-align: center;
`;

export const ValidationContainer = styled.View`
  width: 100%;
  height: 60px;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;
