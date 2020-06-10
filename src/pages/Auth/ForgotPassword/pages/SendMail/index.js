import React, { useCallback, useRef, useState } from 'react';
import Toast from 'react-native-tiny-toast';

import PasswordVerification from '~/assets/password-verification.svg';

import InputMenu from '~/components/InputMenu';
import ButtonMenu from '~/components/ButtonMenu';
import Header from '~/components/HeaderMenu';

import Validation from '~/components/Validation';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from '../../../SignUp/styles';

import { api } from '~/services/api';

export default function ForgotPassword({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      console.tron.log(`email: ${email}`);
      const response = await api.post('auth/reset-password', { email });
      console.tron.log(`message: ${response.data.meta.message}`);

      setLoading(false);
      navigation.navigate('Verify');
    } catch (err) {
      setLoading(false);
      Toast.info('Não encontramos nenhum usuário com esse endereço de e-mail.');
    }
  }, [email, navigation]);

  return (
    <>
      <Header title="Recuperar senha" close={() => navigation.goBack()} />
      <Validation title="Digite seu e-mail abaixo" />
      <Container>
        <PasswordVerification style={{ marginBottom: -20 }} height={200} />
        <Form>
          <InputMenu
            autoFocus
            clear={() => setEmail('')}
            autoCorrect={false}
            selected={!!email}
            keyboardType="email-address"
            maxLength={11}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
            style={{ marginTop: 10, marginBottom: 20 }}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <ButtonMenu
            disabled={!email}
            loading={loading}
            onPress={handleSubmit}
          >
            Recuperar senha
          </ButtonMenu>
        </Form>
      </Container>
    </>
  );
}
