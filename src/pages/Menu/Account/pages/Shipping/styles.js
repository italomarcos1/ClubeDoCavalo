import styled from 'styled-components/native';

export const Address = styled.TouchableOpacity`
  width: 100%;
  height: 150px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 3px;
  margin-bottom: 10px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #f2f3f4;
  padding: 10px 10px 20px 10px;
  align-items: center;
`;

export const AddressInfo = styled.View`
  flex: 1;
  height: 120px;
  padding: 0 10px;
  align-self: flex-start;
  justify-content: space-around;
`;

export const AddressInfoField = styled.Text`
  color: #9f9f9f;
`;

export const AddNewAddressButton = styled.TouchableOpacity`
  align-items: center;
  background-color: #fff;
  border-color: #ddd;
  border-radius: 3px;
  border-width: 1px;
  height: 130px;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  padding: 10px;
  width: 100%;
`;

export const SideContainer = styled.View`
  height: 130px;
  width: 25px;
  padding: 5px 0;
`;
