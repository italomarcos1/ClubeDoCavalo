import styled from 'styled-components/native';
import {
  TouchableHighlight,
  TouchableOpacity,
  Image as RNImage,
  FlatList,
} from 'react-native';

export const Container = styled.View`
  background: #fff;
  flex: 1;
  position: relative;
`;

export const Header = styled.View`
  margin: 20px 0;
  justify-content: center;
`;

export const ChangeListButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ChangeListButton = styled(TouchableOpacity)`
  background: ${props => (props.active ? '#E58230' : '#fff')};
  border: 1px solid ${props => (props.active ? '#E58230' : '#dcdcdc')};
  border-radius: 50px;
  padding: 10px 20px;
  align-items: center;
  margin: 0 10px;
  min-width: 30%;
`;

export const ChangeListButtonText = styled.Text`
  font-size: 16px;
  color: ${props => (props.active ? '#fff' : '#000')};
`;

export const List = styled(FlatList).attrs({
  showsHorizontalScrollIndicator: false,
})`
  background: #dcdcdc;
  flex: 1;
  border-radius: 8px;
`;

export const ItemList = styled.View`
  background: #fff;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 0.5px;
`;

export const ItemListButton = styled(TouchableOpacity)`
  border: 3px dashed;
  border-color: ${props => (props.selected ? '#e23333' : 'transparent')};
  border-radius: 1px;
  width: 100%;
`;

export const Image = styled(RNImage)`
  height: 100px;
  width: 100%;
`;

export const Bottom = styled.View`
  background: #fff;
  border-style: solid;
  border-top-color: #efefef;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 15px 20px;
  align-items: center;
`;

export const CancelButton = styled(TouchableHighlight)`
  flex-direction: row;
  height: 45px;
  background: #e23333;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  width: 40%;
`;

export const ConfirmButton = styled(TouchableHighlight)`
  flex-direction: row;
  height: 45px;
  background: #5bae59;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  padding: 0 10px;
  width: 40%;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;
