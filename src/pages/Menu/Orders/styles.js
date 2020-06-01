import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f2f3f4;
  align-items: center;
  padding: 10px 10px 30px 10px;
`;

export const Item = styled.TouchableOpacity`
  width: 100%;
  height: 200px;
  border-width: 1px;
  border-color: #ebeced;
  background-color: #fff;
  border-radius: 3px;
  padding: 15px;
`;

export const ContentContainer = styled.View`
  width: 100%;
  height: 30px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
`;

export const Content = styled.Text`
  font-size: 11px;
  color: #283d48;
`;

export const Details = styled.TouchableOpacity`
  background-color: #cbced0;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;
