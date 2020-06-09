import React, { useState, useEffect } from 'react';
import { Modal as RNModal } from 'react-native';
import PropTypes from 'prop-types';

import { api } from '~/services/api';

import {
  Container,
  Bottom,
  CancelButton,
  ConfirmButton,
  ButtonText,
  Header,
  ItemList,
  ItemListButton,
  Image,
  List,
  ChangeListButtonsContainer,
  ChangeListButton,
  ChangeListButtonText,
} from './styles';

export default function ModalPrintable({ visible, onCancelPress, done }) {
  const [activedList, setActivedList] = useState('print');
  const [selectedItem, setSelectedItem] = useState('');

  const [listImages, setListImages] = useState([]);
  const [listStickers, setListStickers] = useState([]);
  const [listData, setListData] = useState([]);

  function handleDone() {
    done(selectedItem.url);
  }

  async function populateLists() {
    const [imgs, stk] = await Promise.all([
      api.get('printables/image'),
      api.get('printables'),
    ]);

    setListImages(imgs.data.data);
    setListStickers(stk.data.data);
  }

  useEffect(() => {
    populateLists();
  }, []);

  useEffect(() => {
    setListData(listImages);
  }, [listImages]);

  useEffect(() => {
    setListData(activedList === 'print' ? listImages : listStickers);
  }, [activedList]);

  return (
    <RNModal visible={visible} animated={true}>
      <Container>
        <Header>
          <ChangeListButtonsContainer>
            <ChangeListButton
              active={activedList === 'print'}
              onPress={() => setActivedList('print')}
            >
              <ChangeListButtonText active={activedList === 'print'}>
                Estampas {activedList === 'print'}
              </ChangeListButtonText>
            </ChangeListButton>
            <ChangeListButton
              active={activedList === 'sticker'}
              onPress={() => setActivedList('sticker')}
            >
              <ChangeListButtonText active={activedList === 'sticker'}>
                Stickers
              </ChangeListButtonText>
            </ChangeListButton>
          </ChangeListButtonsContainer>
        </Header>
        <List
          data={listData}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) =>
            !item.empty && (
              <ItemList>
                <ItemListButton
                  onPress={() => setSelectedItem(item)}
                  selected={item.id === selectedItem.id}
                >
                  <Image
                    source={{ uri: item.thumbnail }}
                    resizeMode="contain"
                  />
                </ItemListButton>
              </ItemList>
            )
          }
          numColumns={3}
        />
      </Container>
      <Bottom>
        <CancelButton onPress={onCancelPress}>
          <ButtonText>Cancelar</ButtonText>
        </CancelButton>
        <ConfirmButton disabled={selectedItem === ''} onPress={handleDone}>
          <ButtonText>Adicionar</ButtonText>
        </ConfirmButton>
      </Bottom>
    </RNModal>
  );
}

ModalPrintable.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancelPress: PropTypes.func.isRequired,
  done: PropTypes.func.isRequired,
};
