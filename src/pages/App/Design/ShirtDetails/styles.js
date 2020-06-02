import styled from 'styled-components/native';

export const Details = styled.View`
  width: 100%;
  height: 35%;
  align-items: center;
  justify-content: space-evenly;
`;

export const ShirtSizeContainer = styled.View`
  width: 100%;
  height: 70px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const ShirtSize = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  border-radius: 8px;
  background-color: ${props => (props.selected ? '#5BAE59' : '#F0F0F0')};
  align-items: center;
  justify-content: center;
`;

export const ShirtTypeContainer = styled.View`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const ShirtType = styled.TouchableOpacity`
  width: 100px;
  height: 25px;
  border-radius: 12px;
  background-color: ${props => (props.selected ? '#5BAE59' : '#F0F0F0')};
  align-items: center;
  justify-content: center;
  padding: 2px 5px;
`;

export const Option = styled.Text`
  font-size: 14px;
  color: ${props => (props.selected ? '#FFF' : '#1e1e1e')};
`;
