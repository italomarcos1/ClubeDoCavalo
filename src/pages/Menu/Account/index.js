import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import ImagePicker from 'react-native-image-picker';
import Toast from 'react-native-tiny-toast';
import Icon from 'react-native-vector-icons/Feather';

import {
  Avatar,
  AvatarContainer,
  ChoosePhotoButton,
  Content,
  ImageContainer,
  Item,
  NameInput,
  VerifiedField,
  VerifiedFieldContainer,
  Field,
  Value,
} from './styles';

export default function Account({ navigation }) {
  const [profilePhoto, setProfilePhoto] = useState(
    'https://api.adorable.io/avatars/90/abott@adorable.png'
  );

  const handleChoosePhoto = useCallback(() => {
    const options = {
      title: 'Selecionar imagem',
      cancelButtonTitle: 'Cancelar',
      takePhotoButtonTitle: 'Tirar foto',
      chooseFromLibraryButtonTitle: 'Selecionar imagem da galeria',
      mediaType: 'photo',
    };

    ImagePicker.showImagePicker(options, image => {
      if (image.error) Toast.show('Erro ao selecionar a imagem.');
      else {
        const photo = `data:image/jpeg;base64,${image.data}`;
        setProfilePhoto(photo);
      }
    });
  }, []);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  return (
    <>
      <ImageContainer>
        <AvatarContainer>
          <Avatar
            style={{ width: 90, height: 90 }}
            source={{
              uri:
                profilePhoto !== ''
                  ? profilePhoto
                  : 'https://api.adorable.io/avatars/50/profile@adorable.png',
            }}
          />
        </AvatarContainer>

        <ChoosePhotoButton onPress={handleChoosePhoto}>
          <Icon name="camera" color="#fff" size={22} />
        </ChoosePhotoButton>
      </ImageContainer>
      <View style={{ flex: 1, paddingBottom: 15 }}>
        <Content>
          <Item onPress={() => {}}>
            <Field>Nome</Field>

            <NameInput autoCorrect={false} value={name} onChangeText={setName}>
              Paulo
            </NameInput>
          </Item>
        </Content>

        <Content>
          <Item onPress={() => {}}>
            <Field>Sobrenome</Field>
            <NameInput
              autoCorrect={false}
              value={surname}
              onChangeText={setSurname}
            >
              Andrade
            </NameInput>
          </Item>
        </Content>

        <Content>
          <Item onPress={() => navigation.navigate('Phone')}>
            <VerifiedFieldContainer>
              <Field>Número de celular</Field>
              <VerifiedField verified>Verificado</VerifiedField>
            </VerifiedFieldContainer>
            <Value>927 609 440</Value>
          </Item>
          <Icon name="chevron-right" size={15} color="#808080" />
        </Content>

        <Content>
          <Item onPress={() => navigation.navigate('Gender')}>
            <Field>Sexo</Field>
            <Value>Masculino</Value>
          </Item>
          <Icon name="chevron-right" size={15} color="#808080" />
        </Content>

        <Content>
          <Item onPress={() => navigation.navigate('Mail')}>
            <VerifiedFieldContainer>
              <Field>E-mail</Field>
              <VerifiedField verified={false}>Não-verificado</VerifiedField>
            </VerifiedFieldContainer>

            <Value>pauloandrade@gmail.com</Value>
          </Item>
          <Icon name="chevron-right" size={15} color="#808080" />
        </Content>

        <Content>
          <Item onPress={() => navigation.navigate('Pass')}>
            <Field>Palavra-passe</Field>
            <Value>******</Value>
          </Item>
          <Icon name="chevron-right" size={15} color="#808080" />
        </Content>

        <Content>
          <Item
            onPress={() => navigation.navigate('Shipping')}
            style={{ borderBottomColor: 'transparent', borderBottomWidth: 0 }}
          >
            <Field>Endereços de entrega</Field>
            <Value>Casa</Value>
          </Item>
          <Icon name="chevron-right" size={15} color="#808080" />
        </Content>
      </View>
    </>
  );
}

Account.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
