import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f2f3f4;
  padding: 10px 10px 30px;
`;

export const Content = styled.Text`
  font-weight: bold;
`;

export const Value = styled.Text`
  color: #888888;
`;

export const Shirt = styled.View`
  width: 100%;
  height: 180px;

  flex: 1;
  border-radius: 4px;
  padding: 5px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ShirtImage = styled.Image`
  width: 110px;
  height: 120px;
`;

export const ShirtInfo = styled.View`
  flex: 1;
  height: 160px;
  margin-left: 5px;
  justify-content: space-between;
`;
export const Item = styled.View`
  width: 100%;
  flex: 1;
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
  background-color: #fff;
  border-radius: 4px;
  flex: 1;
  padding: 10px 15px;
`;

export const Separator = styled.View`
  height: 1px;
  align-self: stretch;

  border-color: #ccc;
  border-width: 0.5px;
  margin: 10px 0;
`;

export const Detail = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
`;

export const CustomerInfo = styled.View`
  width: 100%;
  height: 30px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 10px 5px 0;
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
  width: 185px;
  height: 30px;
  background-color: #5bae59;
  padding: 2px;
  align-items: center;
  justify-content: center;
`;

export const FinishButton = styled.TouchableOpacity`
  width: 100%;
  height: 70px;
  background-color: #5bae59;
  justify-content: center;
  align-items: center;
`;

export const CheckoutContainer = styled.View`
  width: 100%;
  height: 70px;
  justify-content: flex-end;
`;
