import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 0px 5px 10px;
  flex-direction: row;
  background-color: ${props => (props.custom ? '#fff' : '#5bae59')};
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-top: 5px;
  color: ${props => (props.custom ? '#000' : '#fff')};
`;
