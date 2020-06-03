import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

export const Item = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-bottom-width: 0.5px;
  border-bottom-color: #d2d2d4;
  padding: 5px 5px 5px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Option = styled.Text`
  flex: 1;
  align-items: flex-start;
  padding: 0 10px;
`;

export const OptionText = styled.Text`
  color: #000;
  font-size: 16px;
`;
