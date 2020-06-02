import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f2f3f4;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
`;

export const ShirtContainer = styled.View`
  flex: 1;
  max-height: 70%;
  justify-content: space-evenly;
`;

export const Item = styled.TouchableOpacity`
  width: 100%;
  border-bottom: 1px solid #ccc;
  height: 50px;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 5px 10px 5px 10px;
`;

export const Detail = styled.TouchableOpacity`
  width: 100%;
  height: 65px;
  margin: 2px 0;
  background-color: #fff;
  border-radius: 4px;
  padding-right: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.Text`
  font-size: 24px;
  color: #283d48;
  font-weight: bold;
`;
