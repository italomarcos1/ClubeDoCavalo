import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  align-items: center;
  justify-content: space-evenly;
`;

export const ValidationCodeInput = styled.TextInput`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background-color: #eceff4;
  text-align: left;
  color: #3a3a3a;
  font-size: 22px;
  text-align: center;
`;

export const ValidationContainer = styled.View`
  width: 100%;
  height: 60px;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const CodeSentText = styled.Text`
  margin-top: 5px;
  margin-bottom: 5px;
  flex: 1;
  max-height: 100px;
  font-size: 18px;
  font-weight: bold;
  line-height: 20px;
  color: #596473;
  align-self: center;
  text-align: center;
`;

export const ResendCodeText = styled.Text`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 16px;
  color: #d93150;
  align-self: center;
`;
