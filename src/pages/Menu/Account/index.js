import React, { useCallback, useState } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Toast from 'react-native-tiny-toast';
import Icon from 'react-native-vector-icons/Feather';

import {
  Avatar,
  AvatarContainer,
  ImageContainer,
  Item,
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
        console.tron.log('lel');
        const photo = `data:image/jpeg;base64,${image.data}`;
        setProfilePhoto(photo);
      }
    });
  }, []);

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

        <TouchableOpacity
          onPress={handleChoosePhoto}
          style={{
            top: -20,
            width: 35,
            height: 35,
            borderRadius: 17.5,
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="camera" color="#fff" size={22} />
        </TouchableOpacity>
      </ImageContainer>
      <View style={{ flex: 1, paddingBottom: 15 }}>
        <Item onPress={() => {}}>
          <Field>Nome</Field>
          <Value>Paulo</Value>
        </Item>
        <Item onPress={() => {}}>
          <Field>Sobrenome</Field>
          <Value>Andrade</Value>
        </Item>
        <Item onPress={() => navigation.navigate('Phone')}>
          <Field>Número de celular</Field>
          <Value>927 609 440</Value>
        </Item>
        <Item onPress={() => navigation.navigate('Gender')}>
          <Field>Sexo</Field>
          <Value>Masculino</Value>
        </Item>
        <Item onPress={() => navigation.navigate('Mail')}>
          <Field>E-mail</Field>
          <Value>pauloandrade@gmail.com</Value>
        </Item>
        <Item onPress={() => navigation.navigate('Pass')}>
          <Field>Palavra-passe</Field>
          <Value>******</Value>
        </Item>
        <Item
          onPress={() => navigation.navigate('Shipping')}
          style={{ borderBottomColor: 'transparent', borderBottomWidth: 0 }}
        >
          <Field>Endereços de entrega</Field>
          <Value>Casa</Value>
        </Item>
      </View>
    </>
  );
}
