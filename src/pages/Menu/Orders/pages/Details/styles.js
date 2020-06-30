import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f2f3f4;
  padding: 10px 10px 60px;
`;

export const Content = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const Value = styled.Text`
  color: #888888;
  font-size: 16px;
`;

export const Price = styled.Text`
  color: #ff9000;
  font-size: 18px;
  font-weight: bold;
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
  border-color: #eee;
  border-width: 0.75px;
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

export const ShippingToContainer = styled.View`
  height: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 10px 5px 0;
`;

export const ShippingDetailsContainer = styled.View`
  flex: 1;
  border-top-color: #ccc;
  border-top-width: 0.5px;
  background-color: #fff;
`;

export const ShippingAddressContainer = styled.View`
  flex: 1;
  margin: 10px 0 25px;
  justify-content: space-evenly;
`;

export const Detail = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 2px;
  border-bottom-color: #ddd;
  border-bottom-width: 0.75px;
`;

export const DetailStatus = styled.Text`
  color: ${props => (props.status ? '#11ce19' : '#F06D85')};
  font-weight: bold;
`;

export const DetailField = styled.Text`
  font-weight: bold;
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

export const FinishButton = styled.TouchableOpacity`
  width: 100%;
  height: 70px;
  background-color: #5bae59;
  justify-content: center;
  align-items: center;
`;

export const FinishButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const CheckoutContainer = styled.View`
  width: 100%;
  height: 70px;
  justify-content: flex-end;
`;
