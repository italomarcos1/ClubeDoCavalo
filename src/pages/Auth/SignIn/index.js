import React, { useRef, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AccessToken, LoginButton } from 'react-native-fbsdk';
import Toast from 'react-native-tiny-toast';

import PropTypes from 'prop-types';

import { api } from '~/services/api';

import { signInRequest, signInSuccess } from '~/store/modules/auth/actions';

import Background from '~/components/Background';

import SealImage from '~/assets/seal.svg';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SubmitButtonText,
  TitleText,
  SubtitleText,
  RecoveryButton,
  RecoveryText,
  FacebookButton,
} from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <SealImage height={150} />

        <TitleText>Bem-vindo</TitleText>
        <SubtitleText>Cadastre-se gratuitamente em 15 segundos</SubtitleText>

        <Form>
          <FormInput
            autoFocus
            icon="person-outline"
            placeholder="Seu email"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Sua senha"
            secureTextEntry
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <RecoveryButton
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}
          >
            <RecoveryText>Recuperar Senha?</RecoveryText>
          </RecoveryButton>
          <SubmitButton onPress={handleSubmit}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <SubmitButtonText>Entrar ou Cadastrar</SubmitButtonText>
            )}
          </SubmitButton>
          <LoginButton
            style={{
              height: 30,
              marginTop: 10,
              borderRadius: 20,
              borderWidth: 5,
              borderColor: '#333',
            }}
            onLoginFinished={(error, result) => {
              if (error) {
                Toast.show('Ocorreu um erro no login. Verifique sua conexão.');
              } else if (result.isCancelled) {
                Toast.show('Você pode se cadastrar/logar acima.');
              } else {
                AccessToken.getCurrentAccessToken().then(data => {
                  const { accessToken, userID } = data;

                  api
                    .post('auth/facebook', {
                      token: accessToken,
                      userID,
                    })
                    .then(response => {
                      const { token, user } = response.data.data;
                      api.defaults.headers.Authorization = `Bearer ${token}`;
                      dispatch(signInSuccess(token, user));
                    })
                    .catch(() => {
                      Toast.show(
                        'Erro ao logar com Facebook. Logue com seu e-mail. '
                      );
                    });
                });
              }
            }}
            onLogoutFinished={() => console.tron.log('logout')}
          />
        </Form>
      </Container>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
