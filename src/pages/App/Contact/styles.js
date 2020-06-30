import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #ccc;
  align-items: center;
`;

export const PageText = styled.Text`
  font-size: 15px;
  line-height: 30px;
  text-align: justify;
`;

export const ContactUsText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 25px;
  color: #3a3a3a;
`;

export const Button = styled.TouchableOpacity`
  width: 250px;
  height: 50px;
  background-color: #f2f3f4;
  padding: 10px 10px 10px 20px;
  border-radius: 30;
  flex-direction: row;
  align-items: center;
`;

export const ButtonText = styled.Text`
  width: 140px;
  text-align: center;
  margin-left: 10px;
  font-size: 15px;
`;
