import React, { useState } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import Validation from '~/components/Validation';
import InputMenu from '~/components/InputMenu';
import ButtonMenu from '~/components/ButtonMenu';

import { Container } from './styles';

export default function Phone({ navigation }) {
  const [phone, setPhone] = useState('');

  return (
    <>
      <Validation title="Atualização do celular" />
      <Container>
        <Text style={{ fontSize: 14 }}>Número do celular</Text>
        <InputMenu
          autoFocus
          clear={() => setPhone('')}
          autoCorrect={false}
          selected={!!phone}
          keyboardType="phone-pad"
          maxLength={15}
          autoCapitalize="none"
          placeholder="Digite seu número"
          value={phone}
          onChangeText={setPhone}
          style={{ marginTop: 5, marginBottom: 5 }}
        />
        <Text style={{ fontSize: 14 }}>
          Será enviado um código de verificação via SMS para este celular
        </Text>

        <ButtonMenu
          disabled={!(phone.length >= 10)}
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate('VerifyPhone')}
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
