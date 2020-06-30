import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 10px 20px;
`;
export const InputContainer = styled.View`
  flex-direction: column;
  height: 90px;
  align-items: flex-start;
  justify-content: center;
  margin: 5px 0px;
`;
export const InputName = styled.Text`
  font-size: 12px;
  color: #76797e;
  margin-bottom: 5px;
`;

export const CustomView = styled.View`
  flex-direction: row;
  height: 51px;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Gender = styled.TouchableOpacity`
  flex: 1;
  height: 40px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  background-color: #fff;
  border-radius: 4px;
  padding: 2px;
  margin: 0 2px;
`;

export const GenderContainer = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  padding: 0;
  justify-content: space-between;
  flex-direction: row;
`;

export const RadioButtonBackground = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background-color: #fff;
  border-width: 1px;
  border-color: #f06d85;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

export const Selected = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #f06d85;

  display: ${props => (props.selected ? 'flex' : 'none')};
`;

export const RadioText = styled.Text`
  font-size: 14px;
  color: #3a3a3a;
  margin-left: 5px;
`;
