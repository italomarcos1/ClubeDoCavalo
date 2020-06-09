import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 10px 20px 0;
  background-color: #f2f3f4;
`;

export const ProductsList = styled.FlatList`
  width: 300px;
  flex: 1;
  background-color: #e6b32a;
  border-color: #4f4;
  border-width: 1px;
`;

export const Product = styled.View`
  flex: 1;
  width: 100%;
  height: 200px;
  background-color: #e6b32a;
  border-color: #4f4;
  align-items: center;
  border-width: 1px;
  padding: 5px;
`;

export const NoProductsContainer = styled.View`
  flex: 1;
  align-items: center;
  align-self: center;
  margin-top: 100px;
  justify-content: center;
  text-align: center;
`;

export const ProductAmountContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
`;

export const ProductBeforeDiscount = styled.Text`
  color: #9f9f9f;
  text-decoration-line: line-through;
`;

export const ProductDiscount = styled.Text`
  color: #f06d85;
  font-weight: bold;
`;

export const PriceContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;

export const NoProductsText = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #3a3a3a;
  align-self: center;
  margin: 20px 0 10px;
`;

export const NoProductsSubtitle = styled.Text`
  font-size: 18px;
  color: #333;
  align-self: center;
  text-align: center;
`;

export const ShirtContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px 0;
  margin-bottom: 5px;
`;

export const DeleteProduct = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 10px;
  border-right-color: #808080;
  border-right-width: 1px;
  margin-right: 10px;
  flex: 1;
`;

export const Separator = styled.View`
  height: 1px;
  align-self: stretch;
  border-color: #999;
  border-width: 0.5px;
  margin: 10px 0;
`;

export const UpdateAmountContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: baseline;
  border-color: #bbb;
  justify-content: space-between;
  border-width: 1px;
  border-radius: 2px;
  padding: 2px 4px;
  margin: 0 4px;
`;

export const Shirt = styled.View`
  width: 100%;
  background-color: #fff;
  flex: 1;
  border-radius: 4px;
  padding: 5px 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 5px;
`;

export const ShirtImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100px;
  height: 110px;
`;

export const ShirtInfo = styled.View`
  flex: 1;
  margin-left: 5px;
  height: 150px;
  justify-content: space-evenly;
`;

export const Item = styled.View`
  width: 100%;
  height: 130px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Options = styled.View`
  width: 300px;
  height: 40px;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
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
  height: 120px;
  background-color: #85d1f3;
  justify-content: flex-end;
`;

export const Amount = styled.View`
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  flex-direction: row;
  padding: 5px 20px;
`;

export const FinalPrice = styled.View`
  width: 135px;
  height: 35px;
  flex-direction: row;
  border-radius: 3px;
  background-color: #85d193;
  justify-content: flex-end;
  align-items: center;
  padding: 2px 15px 2px 2px;
`;

export const Price = styled.Text`
  font-size: 18px;
  color: #283d48;
  font-weight: bold;
`;

export const FinishButton = styled.TouchableOpacity`
  width: 100%;
  height: 70px;
  background-color: #5bae59;
  justify-content: center;
  align-items: center;
`;

export const FinishButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 22px;
`;
