import styled from 'styled-components/native';
import { TouchableOpacity, Image } from 'react-native';

export const Container = styled.View`
  background: #fff;
  flex: 1;
`;

export const Bottom = styled.View`
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 20px 15px;
  align-items: center;
`;

export const BottomButton = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

export const TShirtContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const TShirtImage = styled(Image)`
  width: 100%;
`;

export const TopButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const ActionButton = styled(TouchableOpacity)`
  background: ${props => (props.active ? '#E58230' : '#fff')};
  border: 1px solid ${props => (props.active ? '#E58230' : '#dcdcdc')};
  border-radius: 50px;
  display: ${props => (props.visible ? 'flex' : 'none')};
  padding: 8px 20px;
  align-items: center;
  margin: 0 10px;
  min-width: 100px;
`;

export const ActionButtonText = styled.Text`
  font-size: 16px;
  color: ${props => (props.active ? '#fff' : '#000')};
`;

export const AddToCart = styled(TouchableOpacity)`
  background: #5bae59;
  border-radius: 50px;
  padding: 10px 20px;
  display: ${props => (props.visible ? 'flex' : 'none')};
  width: 260px;
  align-items: center;
  align-self: center;
`;

export const AddToCartText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: normal;
`;

export const CannotSendAlert = styled.Text`
  background: #ccc;
  border-radius: 50px;
  padding: 10px 20px;
  width: 260px;
  align-items: center;
  align-self: center;
  text-align: center;
  color: #000;
  font-size: 16px;
`;

export const CustomView = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: 'rgba(0, 0, 0, 0.7)';
  justify-content: center;
`;

export const NoSlider = styled.View`
  width: 100%;
  height: 70px;
  justify-content: center;
  align-self: center;
`;

export const ContainerActions = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  display: flex;
  width: 80%;
`;

export const UploadShirtLoading = styled.View`
  background-color: #333;
  width: 200px;
  height: 120px;
  border-radius: 8px;
  align-self: center;
  align-items: center;
  justify-content: center;
`;
