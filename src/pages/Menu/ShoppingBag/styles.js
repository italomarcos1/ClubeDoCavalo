import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #3b8e39;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.TouchableOpacity`
  width: 100%;
  border-bottom: 1px solid #ccc;
  height: 50px;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 5px 10px 5px 10px;
`;
