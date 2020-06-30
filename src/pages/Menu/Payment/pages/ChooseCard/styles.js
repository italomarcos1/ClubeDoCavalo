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
  padding: 5px 5px 5px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardNumber = styled.Text`
  flex: 1;
  font-size: 18px;
  font-weight: bold;
  align-self: flex-start;
`;

export const CardNumberContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const OptionText = styled.Text`
  color: #000;
  font-size: 16px;
`;

export const AddCard = styled.View`
  flex: 1;
  align-items: flex-start;
  padding-right: 10px;
  padding-left: 10px;
`;

export const AddCardText = styled.Text`
  color: #12b118;
  font-size: 16px;
`;
