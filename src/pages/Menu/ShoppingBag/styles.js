import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f2f3f4;
  align-items: center;
  justify-content: space-between;
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

export const IconContainer = styled.View`
  padding: 0 20px;
  align-items: center;
  border-radius: 4px;
  justify-content: center;
`;

export const FareDetails = styled.View`
  flex: 1;
  max-height: 70px;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
`;

export const CheckoutContainer = styled.View`
  flex: 1;
  width: 100%;
  max-height: 70px;
  justify-content: flex-end;
`;

export const Amount = styled.View`
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  flex-direction: row;
  padding: 5px 20px;
`;

export const FinalPrice = styled.View`
  width: 90px;
  height: 40px;
  flex-direction: row;
  background-color: #85d193;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.Text`
  font-size: 24px;
  color: #283d48;
  font-weight: bold;
`;

export const FinishButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background-color: #12b118;
  justify-content: center;
  align-items: center;
`;
