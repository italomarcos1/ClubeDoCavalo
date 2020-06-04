import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 10px;
  background-color: #f2f3f4;
  align-items: center;
  justify-content: space-between;
`;

export const ShirtContainer = styled.View`
  flex: 1;
  max-height: 70%;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 20px;
`;

export const DeleteProduct = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-around;
  padding: 0 10px;
  border-right-color: #808080;
  border-right-width: 1px;
  margin-right: 10px;
  flex: 1;
`;

export const UpdateAmountContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: baseline;
  border-right-color: #808080;
  justify-content: space-between;
  border-right-width: 1px;
  padding: 0 5px;
`;

export const Shirt = styled.View`
  width: 100%;
  height: 200px;
  background-color: #fff;
  flex: 1;
  border-radius: 4px;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const ShirtImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100px;
  height: 100px;
`;

export const ShirtInfo = styled.View`
  flex: 1;
  margin-left: 5px;
  height: 140px;
  justify-content: space-evenly;
`;
export const Item = styled.View`
  width: 100%;
  height: 140px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Options = styled.View`
  width: 300px;
  height: 25px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Detail = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  margin: 5px 0;
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
  width: 100%;
  height: 130px;
  background-color: #85d1f3;
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
  width: 125px;
  height: 30px;
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
  height: 70px;
  background-color: #12b118;
  justify-content: center;
  align-items: center;
`;
