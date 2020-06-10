import React, { useRef, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AccessToken } from 'react-native-fbsdk';

import { signInRequest } from '~/store/modules/auth/actions';

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
  FacebookButtonIcon,
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
          <FacebookButton
            style={{
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onLoginFinished={(error, result) => {
              if (error) {
                console.tron.log(`login has error: ${result.error}`);
              } else if (result.isCancelled) {
                console.tron.log('login is cancelled.');
              } else {
                AccessToken.getCurrentAccessToken().then(data => {
                  console.tron.log(data);
                });
              }
              console.tron.log(result.grantedPermissions[0]);
            }}
            onLogoutFinished={data => console.tron.log('logout')}
          />
        </Form>
      </Container>
    </Background>
  );
}
