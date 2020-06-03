import styled from 'styled-components/native';

export const ImageContainer = styled.View`
  height: 150px;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  padding: 30px 0px 10px 20px;
  background-color: #3b8e39;
`;

export const AvatarContainer = styled.View`
  position: relative;
  width: 90px;
  align-items: center;
  justify-content: center;
  height: 90px;
  border-radius: 45px;
  border-color: #fff;
  border-width: 2px;
`;
export const Avatar = styled.Image`
  position: relative;
  width: 90px;
  height: 90px;
  border-radius: 45px;
  border-color: #fff;
  border-width: 2px;
`;

export const Item = styled.TouchableOpacity`
  flex: 1;
  border-bottom-width: 0.5px;
  border-bottom-color: #d2d2d4;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 2px 0px 2px 20px;
`;

export const ChoosePhotoButton = styled.TouchableOpacity`
  top: -20px;
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
  background-color: #000;
  align-items: center;
  justify-content: center;
`;

export const Field = styled.Text`
  color: #818181;
  font-size: 11px;
`;
export const Value = styled.Text`
  color: #000;
  font-size: 15px;
`;

// export const Text;
