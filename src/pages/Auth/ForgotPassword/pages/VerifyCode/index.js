import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, Keyboard, Platform } from 'react-native';
import Toast from 'react-native-tiny-toast';

import Validation from '~/components/Validation';

import EmailVerificationImage from '~/assets/email-verification.svg';

import {
  Container,
  CodeSentText,
  ValidationContainer,
  ValidationCodeInput,
  ResendCodeText,
} from './styles';

import Button from '~/components/Button';

export default function Verify({ navigation }) {
  const [code1, setCode1] = useState('');
  const [code2, setCode2] = useState('');
  const [code3, setCode3] = useState('');
  const [code4, setCode4] = useState('');

  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();

  useEffect(() => inputRef2.current.focus(), [code1]);
  useEffect(() => inputRef3.current.focus(), [code2]);
  useEffect(() => inputRef4.current.focus(), [code3]);
  useEffect(() => Keyboard.dismiss(), [code4]);

  return (
    <>
      <Validation title="Digite seu e-mail abaixo" />
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <EmailVerificationImage height={180} />
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
            color: '#3A3A3A',
            alignSelf: 'center',
          }}
        >
          Verificação por email
        </Text>

        <CodeSentText numberOfLines={2}>
          Um código foi enviado para o email informado. Informe o código abaixo.
        </CodeSentText>
        <ValidationContainer>
          <ValidationCodeInput
            autoFocus
            maxLength={1}
            keyboardType="numeric"
            placeholder="0"
            value={code1}
            onChangeText={setCode1}
          />
          <ValidationCodeInput
            maxLength={1}
            keyboardType="numeric"
            placeholder="0"
            ref={inputRef2}
            value={code2}
            onChangeText={setCode2}
          />
          <ValidationCodeInput
            maxLength={1}
            keyboardType="numeric"
            placeholder="0"
            ref={inputRef3}
            value={code3}
            onChangeText={setCode3}
          />
          <ValidationCodeInput
            maxLength={1}
            keyboardType="numeric"
            placeholder="0"
            ref={inputRef4}
            value={code4}
            onChangeText={setCode4}
            onSubmitEditing={() => {}}
          />
        </ValidationContainer>
        <Button onPress={() => {}}>Validar código</Button>
        <TouchableOpacity onPress={() => {}}>
          <ResendCodeText>Reenviar em 30 segundos</ResendCodeText>
        </TouchableOpacity>
      </Container>
    </>
  );
}
