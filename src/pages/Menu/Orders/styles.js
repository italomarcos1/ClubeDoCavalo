import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f2f3f4;
  align-items: center;
  padding: 10px 10px 30px 10px;
`;

export const Item = styled.TouchableOpacity`
  width: 100%;
  height: 200px;
  border-width: 1px;
  border-color: #ebeced;
  background-color: #fff;
  border-radius: 3px;
  padding: 15px;
`;

export const Order = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: space-around;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
  padding: 0 10px 20px 10px;
`;

export const OrderNumberContainer = styled.View`
  height: 40px;
  align-items: flex-start;
  justify-content: center;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
  padding: 0 10px;
`;

export const ContentContainer = styled.View`
  width: 100%;
  height: 30px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
`;

export const Content = styled.Text`
  font-size: 11px;
  font-weight: bold;
  color: #283d48;
`;

export const Details = styled.TouchableOpacity`
  background-color: #cbced0;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

export const ShippingDetails = styled.View`
  height: 65px;
  padding: 10px 0 0 0;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const DeliveryStatus = styled.View`
  flex: 1;
  border-right-width: 0.5px;
  border-right-color: #ccc;
  padding: 0 10px 0 0;
  align-items: flex-start;
`;

export const DeliveryDate = styled.View`
  flex: 1;
  border-left-width: 0.5px;
  border-left-color: #ccc;
  padding: 0 0 0 10px;
  align-items: flex-end;
`;

export const ShippingStatus = styled.Text`
  font-size: 11px;
  font-weight: bold;
  color: #f06d85;
`;
