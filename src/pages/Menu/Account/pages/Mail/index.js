import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  TouchableOpacity,
  Keyboard,
  Modal,
  View,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-tiny-toast';
import Icon from 'react-native-vector-icons/Feather';

import Validation from '~/components/Validation';

import EmailVerificationImage from '~/assets/email-verification.svg';

import { signInSuccess } from '~/store/modules/auth/actions';

import api from '~/services/api';

import {
  Container,
  CodeSentText,
  ValidationContainer,
  ValidationCodeInput,
  ValidationCodeButton,
  VerificationMailText,
  ResendCodeText,
  TransparentBackground,
  SendingMailContainer,
  SendingMailText,
} from './styles';

Icon.loadFont();

export default function Mail() {
  const [code1, setCode1] = useState('');
  const [code2, setCode2] = useState('');
  const [code3, setCode3] = useState('');
  const [code4, setCode4] = useState('');
  const [code5, setCode5] = useState('');
  const [code6, setCode6] = useState('');

  const [sendingMail, setSendingMail] = useState(false);
  const [verifyingMail, setVerifyingMail] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.user.profile);

  useEffect(() => {
    async function sendVerificationMail() {
      try {
        setSendingMail(true);
        await api.post('clients/email');
        setSendingMail(false);
      } catch (err) {
        setSendingMail(false);

        Toast.show(
          'Houve um erro no envio do email. Confira sua conexão à internet.'
        );
      }
    }

    sendVerificationMail();
  }, []);

  const verifyCode = useCallback(async () => {
    try {
      const code = `${code1}${code2}${code3}${code4}${code5}${code6}`;

      if (!Number(code)) {
        Toast.show('Informe apenas números no código de validação.');
        return;
      }
      if (!!code1 && !!code2 && !!code3 && !!code4 && !!code5 && !!code6) {
        Toast.show('Verificando código...');
        setVerifyingMail(true);

        await api.post('clients/email/verify', {
          code,
        });

        const updatedUser = { ...user, email_verified: 1 };

        dispatch(signInSuccess(token, updatedUser));

        setVerifyingMail(false);

        Toast.showSuccess('Seu email foi verificado com sucesso.');
        navigation.goBack();
      }
    } catch (err) {
      setVerifyingMail(false);
      Toast.show('O código informado é inválido.');
    }
  }, [code1, code2, code3, code4, code5, code6, dispatch, token, user]);

  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const inputRef5 = useRef();
  const inputRef6 = useRef();

  useEffect(() => inputRef2.current.focus(), [code1]);
  useEffect(() => inputRef3.current.focus(), [code2]);
  useEffect(() => inputRef4.current.focus(), [code3]);
  useEffect(() => inputRef5.current.focus(), [code4]);
  useEffect(() => inputRef6.current.focus(), [code5]);
  useEffect(() => Keyboard.dismiss(), [code6]);

  return (
    <>
      <View style={{ flex: 1 }}>
        <Validation title="Digite o número abaixo" />
        {!sendingMail ? (
          <Container
            contentContainerStyle={{
              height: 450,
              padding: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <EmailVerificationImage height={180} />
            <VerificationMailText>Verificação por email</VerificationMailText>

            <CodeSentText numberOfLines={2}>
              Código foi enviado para o seu email. Por favor verifique.
            </CodeSentText>
            <ValidationContainer>
              <ValidationCodeInput
                autoFocus
                value={code1}
                onChangeText={setCode1}
              />
              <ValidationCodeInput
                ref={inputRef2}
                value={code2}
                onChangeText={setCode2}
              />
              <ValidationCodeInput
                ref={inputRef3}
                value={code3}
                onChangeText={setCode3}
              />
              <ValidationCodeInput
                ref={inputRef4}
                value={code4}
                onChangeText={setCode4}
              />
              <ValidationCodeInput
                ref={inputRef5}
                value={code5}
                onChangeText={setCode5}
              />
              <ValidationCodeInput
                ref={inputRef6}
                value={code6}
                onChangeText={setCode6}
                onSubmitEditing={() => {}}
              />
              <ValidationCodeButton
                disabled={verifyingMail}
                onPress={verifyCode}
              >
                {verifyingMail ? (
                  <ActivityIndicator size="large" color="#fff" />
                ) : (
                  <Icon name="chevron-right" color="#fff" size={25} />
                )}
              </ValidationCodeButton>
            </ValidationContainer>
            <TouchableOpacity
              onPress={() =>
                Toast.showSuccess('Um código foi enviado para seu Email.')
              }
            >
              <ResendCodeText>Reenviar em 30 segundos</ResendCodeText>
            </TouchableOpacity>
          </Container>
        ) : (
          <Modal
            visible={sendingMail}
            transparent
            onRequestClose={() => setSendingMail(false)}
          >
            <TransparentBackground>
              <SendingMailContainer>
                <SendingMailText>
                  Enviando código para o seu email, aguarde...
                </SendingMailText>
                <ActivityIndicator size="large" color="#222" />
              </SendingMailContainer>
            </TransparentBackground>
          </Modal>
        )}
      </View>
    </>
  );
}
