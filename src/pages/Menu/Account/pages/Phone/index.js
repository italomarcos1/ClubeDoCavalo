import React, { useState } from 'react';
import { Text } from 'react-native';

import PropTypes from 'prop-types';

import Validation from '~/components/Validation';
import InputMenu from '~/components/InputMenu';
import ButtonMenu from '~/components/ButtonMenu';

import { Container, Subtitle } from './styles';

export default function Phone({ navigation }) {
  const [phone, setPhone] = useState('');

  return (
    <>
      <Validation title="Atualização do celular" />
      <Container>
        <Text style={{ fontSize: 16 }}>
          Número do celular (digite apenas números)
        </Text>
        <InputMenu
          autoFocus
          clear={() => setPhone('')}
          autoCorrect={false}
          selected={!!phone}
          keyboardType="phone-pad"
          maxLength={11}
          autoCapitalize="none"
          placeholder="Digite seu número"
          value={phone}
          onChangeText={setPhone}
          style={{ marginTop: 10, marginBottom: 10 }}
        />
        <Subtitle>
          Será enviado um código de verificação via SMS para este celular
        </Subtitle>

        <ButtonMenu
          disabled={!(phone.length >= 10 && Number(phone))}
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate('VerifyPhone', { phone })}
        >
          Verificar Celular
        </ButtonMenu>
      </Container>
    </>
  );
}

Phone.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
