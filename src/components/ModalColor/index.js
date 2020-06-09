import React, { useCallback, useState } from 'react';
import { Modal as RNModal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Container,
  Bottom,
  CancelButton,
  ConfirmButton,
  ButtonText,
  Header,
  HeaderText,
  ContainerList,
  ItemList,
  Image,
  List,
} from './styles';

export default function ModalColor({
  visible,
  onCancelPress,
  listData,
  done,
  color,
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Branca');
  // baseado no type filtra os indices do array, extrai usando o slice ou sla oq
  const dispatch = useDispatch();

  const tFronts = useSelector(state => state.shirts.tFronts);
  const bFronts = useSelector(state => state.shirts.bFronts);
  const hFronts = useSelector(state => state.shirts.hFronts);

  function handleChangeSelected({ item, index }) {
    setSelectedIndex(index);
    setSelectedItem(item);
  }

  function handleDispath() {
    dispatch({
      type: `@shirts/update_color`,
      payload: {
        tf: tFronts[selectedIndex].uri,
        bf: bFronts[selectedIndex].uri,
        hf: hFronts[selectedIndex].uri,
      },
    });
    done(selectedItem.uri);
    color(selectedColor);
  }

  const handleColor = useCallback(index => {
    switch (index) {
      case 0:
        setSelectedColor('Branca');
        break;
      case 1:
        setSelectedColor('Preta');
        break;
      case 2:
        setSelectedColor('Cinza');
        break;
      case 3:
        setSelectedColor('Azul');
        break;
      case 4:
        setSelectedColor('Verde');
        break;
      case 5:
        setSelectedColor('Vermelha');
        break;
      default:
    }
  }, []);

  return (
    <RNModal visible={visible} animated={true}>
      <Container>
        <Header>
          <HeaderText>Escolha a cor abaixo</HeaderText>
        </Header>
        <List
          data={listData}
          keyExtractor={item => String(item.uri)}
          renderItem={({ item, index }) => (
            <ContainerList>
              <ItemList
                selected={index === selectedIndex}
                onPress={() => {
                  handleChangeSelected({ item, index });
                  handleColor(index);
                }}
              >
                <Image source={{ uri: item.uri }} resizeMode="contain" />
              </ItemList>
            </ContainerList>
          )}
          numColumns={2}
        />
      </Container>
      <Bottom>
        <CancelButton onPress={onCancelPress}>
          <ButtonText>Cancelar</ButtonText>
        </CancelButton>
        <ConfirmButton onPress={handleDispath}>
          <ButtonText>Selecionar</ButtonText>
        </ConfirmButton>
      </Bottom>
    </RNModal>
  );
}

ModalColor.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancelPress: PropTypes.func.isRequired,
};
