import styled from 'styled-components/native';

export const AddItemToCart = styled.TouchableOpacity`
  border-radius: 3px;
  width: 170px;
  height: 25px;
  background-color: #5bae59;
  padding: 2px;
  align-items: center;
  justify-content: center;
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

export const ShirtInfo = styled.View`
  flex: 1;
  height: 160px;
  margin-left: 5px;
  justify-content: space-between;
`;
export const ItemInfo = styled.View`
  flex: 1;
  height: 160px;
  margin-left: 5px;
  justify-content: space-between;
`;

export const Container = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const Item = styled.View`
  width: 100%;
  height: 185px;
  border-color: #eee;
  border-width: 0.9px;
  margin-bottom: 10px;
  flex: 1;
  border-radius: 8px;
  padding: 5px;
  padding-top: 10px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const ItemImage = styled.Image`
  width: 110px;
  height: 120px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  color: black;
  text-transform: capitalize;
  align-self: flex-start;
  line-height: 18px;
  padding: 2px;
`;

export const ProductAmount = styled.Text`
  font-size: 14px;
  width: 100%;
  margin-top: 5px;
  color: black;
  align-self: flex-start;
  padding: 2px;
`;

export const ProductPrice = styled.Text`
  font-size: 22px;
  margin: 5px 0;
  font-weight: bold;
  color: #ff9000;
  align-self: flex-start;
`;
