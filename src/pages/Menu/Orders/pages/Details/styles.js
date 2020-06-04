import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f2f3f4;
`;

export const Content = styled.Text`
  font-weight: bold;
`;

export const Value = styled.Text`
  color: #888888;
`;

export const Shirt = styled.View`
  width: 100%;
  height: 220px;
  background-color: #fff;
  flex: 1;
  border-radius: 4px;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
  height: 50px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const DetailsContainer = styled.View`
  width: 100%;
  padding: 10px;
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
export const ShippingDetails = styled.View`
  width: 100%;
  height: 15px;
  background-color: #fff;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 10px;
`;

export const AddItemToCart = styled.TouchableOpacity`
  border-radius: 3px;
  background-color: #5bae59;
  padding: 5px;
  align-items: center;
  justify-content: center;
`;

export const FinishButton = styled.TouchableOpacity`
  width: 100%;
  height: 70px;
  background-color: #12b118;
  justify-content: center;
  align-items: center;
`;

export const CheckoutContainer = styled.View`
  width: 100%;
  height: 130px;
  justify-content: flex-end;
`;
