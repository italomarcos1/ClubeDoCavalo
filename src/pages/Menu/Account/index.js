import React, { useCallback, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ActivityIndicator, View, PermissionsAndroid } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import PropTypes from 'prop-types';
import ImagePicker from 'react-native-image-picker';
import Toast from 'react-native-tiny-toast';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import {
  Avatar,
  AvatarContainer,
  Container,
  ChoosePhotoButton,
  Content,
  ImageContainer,
  Item,
  VerifiedField,
  VerifiedFieldContainer,
  Field,
  Value,
} from './styles';

import api from '~/services/api';

export default function Account() {
  const user = useSelector(state => state.user.profile);
  const navigation = useNavigation();

  const captureViewRef = useRef();

  const [profilePhoto, setProfilePhoto] = useState(
    'https://api.adorable.io/avatars/90/abott@adorable.png'
  );

  const [uploading, setUploading] = useState(false);

  async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  const handleUploadAvatar = useCallback(async () => {
    try {
      const uri = await captureRef(captureViewRef, {
        format: 'jpg',
        quality: 1,
      });

      if (!(await hasAndroidPermission())) {
        return;
      }

      const upload = new FormData(); // eslint-disable-line

      upload.append('avatar', {
        uri,
        type: 'image/jpeg',
        name: `${user.name}-${Date.now()}.jpeg`,
      });

      const response = await api.post('clients/avatars', upload);

      Toast.showSuccess(response.data.meta.message);
    } catch (error) {
      Toast.show('Erro no atualização da foto de perfil.');
    }
    setUploading(false);
  }, [user.name]);

  const handleChoosePhoto = useCallback(() => {
    const options = {
      title: 'Selecionar imagem',
      cancelButtonTitle: 'Cancelar',
      takePhotoButtonTitle: 'Tirar foto',
      chooseFromLibraryButtonTitle: 'Selecionar imagem da galeria',
      mediaType: 'photo',
    };

    ImagePicker.showImagePicker(options, image => {
      setUploading(true);

      if (image.error) Toast.show('Erro ao selecionar a imagem.');
      else {
        const source = {
          uri: `data:image/jpeg;base64,${image.data}`,
        };
        setProfilePhoto(source.uri);
        setTimeout(() => handleUploadAvatar(), 1000);
      }
    });
  }, []);

  return (
    <>
      <Container
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: 5,
        }}
      >
        <ImageContainer>
          <AvatarContainer ref={captureViewRef}>
            <Avatar source={{ uri: profilePhoto }} />
          </AvatarContainer>

          <ChoosePhotoButton disabled={uploading} onPress={handleChoosePhoto}>
            {uploading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Icon name="camera" color="#fff" size={22} />
            )}
          </ChoosePhotoButton>
        </ImageContainer>

        <View style={{ flex: 1, paddingBottom: 15 }}>
          <Content>
            <Item
              onPress={() =>
                navigation.navigate('EditName', {
                  currentName: user.name,
                  currentLastName: user.last_name,
                })
              }
            >
              <Field>Nome</Field>
              <Value>
                {user.name} {user.last_name}
              </Value>
            </Item>
          </Content>

          <Content>
            <Item onPress={() => navigation.navigate('Phone')}>
              <VerifiedFieldContainer>
                <Field>Número de celular</Field>
                <VerifiedField verified={user.cellphone}>
                  {user.cellphone ? 'Verificado' : 'Não-verificado'}
                </VerifiedField>
              </VerifiedFieldContainer>
              <Value>
                {user.cellphone ? user.cellphone : 'Nenhum número cadastrado.'}
              </Value>
            </Item>
            <Icon name="chevron-right" size={15} color="#808080" />
          </Content>

          <Content>
            <Item
              onPress={() =>
                navigation.navigate('Gender', { currentGender: user.gender })
              }
            >
              <Field>Gênero</Field>
              <Value>Masculino</Value>
            </Item>
            <Icon name="chevron-right" size={15} color="#808080" />
          </Content>

          <Content>
            <Item
              disabled={!!user.email_verified}
              onPress={() => navigation.navigate('Mail')}
            >
              <VerifiedFieldContainer>
                <Field>E-mail</Field>
                <VerifiedField verified={!!user.email_verified}>
                  {user.email_verified ? 'Verificado' : 'Não-verificado'}
                </VerifiedField>
              </VerifiedFieldContainer>
              <Value>
                {user.email === null
                  ? 'Nenhum endereço de e-mail foi cadastrado'
                  : user.email}
              </Value>
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
              <Value>
                {user.default_address.length !== 0
                  ? user.default_address.name
                  : 'Nenhum endereço cadastrado.'}
              </Value>
            </Item>
            <Icon name="chevron-right" size={15} color="#808080" />
          </Content>
        </View>
      </Container>
    </>
  );
}

Account.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
