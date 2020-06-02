import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f2f3f4;
  align-items: center;
  padding: 10px;
`;

export const ShirtInfo = styled.View`
  flex: 1;
  margin-left: 5px;
  width: 100px;
  justify-content: space-evenly;
`;

export const Item = styled.View`
  width: 100%;
  height: 200px;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const DetailsContainer = styled.View`
  width: 100%;
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

export const Shirt = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100px;
  height: 100px;
`;

export const AddItemToCart = styled.TouchableOpacity`
  border-radius: 3px;
  background-color: #5bae59;
  padding: 5px;
  align-items: center;
  justify-content: center;
`;
