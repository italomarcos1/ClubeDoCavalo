import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Keyboard } from 'react-native';
import Toast from 'react-native-tiny-toast';
import PropTypes from 'prop-types';

import Validation from '~/components/Validation';
import ButtonMenu from '~/components/ButtonMenu';
import InputMenu from '~/components/InputMenu';

import { api } from '~/services/api';

import {
  Container,
  InputContainer,
  InputName,
} from '../../../../Payment/pages/AddCard/styles';

export default function Pass({ navigation }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const confirmNewPasswordRef = useRef();

  const [loading, setLoading] = useState(false);

  const handleChangePassword = useCallback(async () => {
    try {
      setLoading(true);
      // const { data } = await api.post('addresses', {
      //   newPassword,
      //   confirmNewPassword,
      // });
      console.tron.log(newPassword);
      console.tron.log(confirmNewPassword);

      setLoading(false);

      // Toast.show(`${data.meta.message}`);
      navigation.goBack();
    } catch (err) {
      setLoading(false);

      Toast.show('Houve um erro ao alterar a senha.');
    }
  }, [newPassword, confirmNewPassword, navigation]);

  return (
    <>
      <Validation title="Digite sua nova senha" />

      <Container
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: 30,
        }}
      >
        <InputContainer style={{ marginTop: 0 }}>
          <InputName>Nova senha</InputName>
          <InputMenu
            secureTextEntry
            autoCorrect={false}
            maxLength={45}
            selected={!!newPassword}
            clear={() => setNewPassword('')}
            value={newPassword}
            onChangeText={setNewPassword}
            returnKeyType="next"
            onSubmitEditing={() => confirmNewPasswordRef.current.focus()}
          />
        </InputContainer>
        <InputContainer style={{ marginTop: 0 }}>
          <InputName>Confirmar nova senha</InputName>
          <InputMenu
            secureTextEntry
            autoCorrect={false}
            maxLength={45}
            selected={!!confirmNewPassword}
            clear={() => setConfirmNewPassword('')}
            ref={confirmNewPasswordRef}
            value={confirmNewPassword}
            onChangeText={setConfirmNewPassword}
            returnKeyType="send"
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </InputContainer>

        <ButtonMenu
          loading={loading}
          disabled={
            !newPassword ||
            !confirmNewPassword ||
            confirmNewPassword !== newPassword
          }
          onPress={handleChangePassword}
          style={{ marginTop: 60 }}
        >
          Alterar senha
        </ButtonMenu>
      </Container>
    </>
  );
}

Pass.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};
