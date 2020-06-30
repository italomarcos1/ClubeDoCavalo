import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const Congratulations = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 5px;
  color: #3a3a3a;
`;

export const Subtitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  color: #486473;
  text-align: center;
`;

export const SubtitleContainer = styled.View`
  margin-top: 10px;
  height: 70px;
  width: 85%;
`;
