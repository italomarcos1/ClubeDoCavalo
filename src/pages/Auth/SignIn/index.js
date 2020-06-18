import React, { useCallback, useRef, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import Toast from 'react-native-tiny-toast';

import Icon from 'react-native-vector-icons/FontAwesome';

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
  FacebookButtonText,
} from './styles';

Icon.loadFont();

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);
  const [loggingIn, setLoggingIn] = useState(false);

  const handleFacebookLogin = useCallback(() => {
    setLoggingIn(true);
    LoginManager.logInWithPermissions(['public_profile'])
      .then(() => {
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
              Toast.showSuccess('Bem-vindo ao Clube do Cavalo!');
              setLoggingIn(false);
              dispatch(signInSuccess(token, user));
            })
            .catch(() => {
              setLoggingIn(false);
              Toast.show('Erro ao logar com Facebook. Logue com seu e-mail. ');
            });
        });
      })
      .catch(() => {
        setLoggingIn(false);
        Toast.show('Erro ao logar com Facebook. Logue com seu e-mail. ');
      });
  }, [dispatch]);

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

          <FacebookButton
            disabled={loggingIn}
            onPress={handleFacebookLogin}
            title="Continue with FB"
            style={{
              backgroundColor: '#4267B2',
            }}
          >
            <Icon name="facebook-square" color="#fff" size={20} />
            <FacebookButtonText>Entrar com Facebook</FacebookButtonText>
          </FacebookButton>
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
