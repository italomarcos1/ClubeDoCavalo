import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

export const Item = styled.TouchableOpacity`
  width: 100%;
  height: 70px;

  border-bottom-width: 0.5px;
  border-bottom-color: #d2d2d4;
  padding: 0 5px 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Option = styled.View`
  flex: 1;
  font-size: 18px;
  padding: 10px;
  justify-content: center;
  align-items: flex-start;
`;

export const OptionText = styled.Text`
  color: #000;
  font-size: 16px;
`;
