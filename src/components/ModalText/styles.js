import styled from 'styled-components/native';
import { TouchableHighlight } from 'react-native';

export const Container = styled.View`
  background: #fff;
  flex: 1;
  position: relative;
`;

export const Header = styled.View`
  margin: 20px 0;
  justify-content: center;
`;

export const HeaderText = styled.Text`
  font-size: 16px;
  color: #000;
  text-align: center;
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
  padding: 0 10px;
  width: 40%;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const TextContainer = styled.View`
  flex: 1;
  padding: 0 0 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#dcdcdc',
})`
  border: 1px solid #dcdcdc;
  border-radius: 50px;
  height: 40px;
  padding: 0 10px;
  text-align: center;
  font-size: 16px;
  margin: 0 20px 20px;
`;

export const ColorsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  justify-content: space-evenly;
`;

export const Color = styled.TouchableOpacity`
  height: 35px;
  width: 35px;
  border-radius: 50px;
  background-color: ${props => props.color};
  border: 3px dotted;
  border-color: ${props => (props.selected ? '#FF1C1C' : '#efefef')};
`;

export const FontPickerContainer = styled.View`
  flex: 1;
`;

export const FontPickerTitle = styled.Text`
  font-family: 'Colibri';
  align-self: center;
  font-size: 16;
  color: #111;
`;

export const FontPickerList = styled.FlatList`
  margin-top: 10px;
`;

export const FontPickerItem = styled.TouchableOpacity`
  background-color: #f6f6f6;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  height: 45px;
  width: 100%;
  border: 3px dashed;
  border-color: ${props => (props.selected ? '#e23333' : 'transparent')};
  border-radius: 1px;
`;

export const FontPickerText = styled.Text`
  color: #111;
  font-size: 20px;
`;
