import React, { useCallback, useState } from 'react';
import { View, ScrollView } from 'react-native';
import Toast from 'react-native-tiny-toast';
import PropTypes from 'prop-types';

import PasswordVerification from '~/assets/password-verification.svg';

import InputMenu from '~/components/InputMenu';
import ButtonMenu from '~/components/ButtonMenu';
import Header from '~/components/HeaderMenu';

import Validation from '~/components/Validation';

import { Form } from '../../../SignUp/styles';

import { api } from '~/services/api';

export default function ForgotPassword({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      await api.post('auth/reset-password', { email });

      setLoading(false);
      navigation.navigate('Verify');
    } catch (err) {
      setLoading(false);
      Toast.info('Não encontramos nenhum usuário com esse endereço de e-mail.');
    }
  }, [email, navigation]);

  return (
    <View style={{ flex: 1 }}>
      <Header title="Recuperar senha" close={() => navigation.goBack()} />
      <Validation title="Digite seu e-mail abaixo" />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
          paddingHorizontal: 30,
        }}
      >
        <PasswordVerification style={{ marginBottom: -20 }} height={160} />
        <Form>
          <InputMenu
            autoFocus
            clear={() => setEmail('')}
            autoCorrect={false}
            selected={!!email}
            keyboardType="email-address"
            maxLength={45}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
            style={{ marginBottom: 20 }}
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
      </ScrollView>
    </View>
  );
}

ForgotPassword.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
};
