import React, { useState } from 'react';
import { Modal as RNModal } from 'react-native';
import PropTypes from 'prop-types';

import {
  Container,
  Bottom,
  CancelButton,
  ConfirmButton,
  ButtonText,
  Header,
  HeaderText,
  TextContainer,
  Input,
  ColorsContainer,
  Color,
  FontPickerContainer,
  FontPickerTitle,
  FontPickerList,
  FontPickerItem,
  FontPickerText,
} from './styles';

export default function ModalText({ visible, onCancelPress, done, text }) {
  const availableFonts = [
    { id: 1, font: 'Montserrat' },
    { id: 2, font: 'Learning Curve' },
    { id: 3, font: 'Hunting' },
    { id: 4, font: 'Oswald' },
    { id: 5, font: 'Rotulona Hand' },
    { id: 6, font: 'Shopie' },
    { id: 7, font: 'Andis' },
    { id: 8, font: 'Carily' },
    { id: 9, font: 'Source Sans Pro' },
    { id: 10, font: 'Poppins' },
    { id: 11, font: 'Titillium' },
    { id: 12, font: 'Sofia' },
    { id: 13, font: 'League Gothic' },
    { id: 14, font: 'Cinzel' },
    { id: 15, font: 'Exo 2' },
    { id: 16, font: 'Art Plot' },
    { id: 17, font: 'Dancing Script OT' },
  ];

  const [selectedFont, setSelectedFont] = useState('');
  const [selectedColor, setSelectedColor] = useState('#fff');
  const [currentText, setCurrentText] = useState(text);

  const [currentTextColor, setCurrentTextColor] = useState('#fff');
  const [currentTextFont, setCurrentTextFont] = useState('');
  const [currentTextSize, setCurrentTextSize] = useState(10);

  return (
    <RNModal visible={visible} animated={true}>
      <Container>
        <Header>
          <HeaderText>Informe o texto abaixo</HeaderText>
        </Header>
        <TextContainer>
          <Input
            value={currentText}
            onLayout={({ nativeEvent: { layout } }) => {
              setCurrentTextSize(layout.width);
            }}
            placeholder="Digite aqui"
            onChangeText={txt => setCurrentText(txt)}
            maxLength={15}
            returnKeyType="send"
            onSubmitEditing={() => {
              setCurrentText(text);
            }}
            underlineColorAndroid="transparent"
          />
          <ColorsContainer>
            <Color
              selected={selectedColor === '#000'}
              hitSlop={{ top: 2, bottom: 2, left: 2, right: 2 }}
              color="#000"
              onPress={() => {
                setCurrentTextColor('#000');
                setSelectedColor('#000');
              }}
            />
            <Color
              selected={selectedColor === '#000ff0'}
              hitSlop={{ top: 2, bottom: 2, left: 2, right: 2 }}
              color="#000ff0"
              onPress={() => {
                setCurrentTextColor('#000ff0');
                setSelectedColor('#000ff0');
              }}
            />
            <Color
              selected={selectedColor === '#e6b32a'}
              hitSlop={{ top: 2, bottom: 2, left: 2, right: 2 }}
              color="#e6b32a"
              onPress={() => {
                setCurrentTextColor('#e6b32a');
                setSelectedColor('#e6b32a');
              }}
            />
            <Color
              selected={selectedColor === '#ff0000'}
              hitSlop={{ top: 2, bottom: 2, left: 2, right: 2 }}
              color="#ff0000"
              onPress={() => {
                setCurrentTextColor('#ff0000');
                setSelectedColor('#ff0000');
              }}
            />
            <Color
              selected={selectedColor === '#008800'}
              hitSlop={{ top: 2, bottom: 2, left: 2, right: 2 }}
              color="#008800"
              onPress={() => {
                setCurrentTextColor('#008800');
                setSelectedColor('#008800');
              }}
            />
            <Color
              selected={selectedColor === '#ff00f0'}
              hitSlop={{ top: 2, bottom: 2, left: 2, right: 2 }}
              color="#ff00f0"
              onPress={() => {
                setCurrentTextColor('#ff00f0');
                setSelectedColor('#ff00f0');
              }}
            />
            <Color
              selected={selectedColor === '#fff'}
              hitSlop={{ top: 2, bottom: 2, left: 2, right: 2 }}
              color="#fff"
              onPress={() => {
                setCurrentTextColor('#fff');
                setSelectedColor('#fff');
              }}
            />
          </ColorsContainer>
          <FontPickerContainer>
            <FontPickerTitle>Selecione a fonte:</FontPickerTitle>
            <FontPickerList
              data={availableFonts}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <FontPickerItem
                  selected={item.font === selectedFont}
                  onPress={() => {
                    setCurrentTextFont(item.font);
                    setSelectedFont(item.font);
                  }}
                >
                  <FontPickerText style={{ fontFamily: item.font }}>
                    A frase fica assim
                  </FontPickerText>
                </FontPickerItem>
              )}
            />
          </FontPickerContainer>
        </TextContainer>
      </Container>
      <Bottom>
        <CancelButton onPress={onCancelPress}>
          <ButtonText>Cancelar</ButtonText>
        </CancelButton>
        <ConfirmButton
          onPress={() =>
            done(
              currentTextColor,
              currentTextFont,
              currentTextSize,
              currentText
            )
          }
        >
          <ButtonText>Adicionar</ButtonText>
        </ConfirmButton>
      </Bottom>
    </RNModal>
  );
}

ModalText.propTypes = {
  visible: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onCancelPress: PropTypes.func.isRequired,
  done: PropTypes.func.isRequired,
};
