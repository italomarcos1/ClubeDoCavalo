import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Avatar, ImageContainer, Item, Field, Value } from './styles';

export default function Account({ navigation }) {
  return (
    <>
      <ImageContainer>
        <Avatar
          source={{
            uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
          }}
        />
        <View
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
        </View>
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
