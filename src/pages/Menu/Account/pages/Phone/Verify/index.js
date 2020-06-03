import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-tiny-toast';

import Validation from '~/components/Validation';

import { Container, ValidationContainer, ValidationCodeInput } from './styles';
import { CodeSentText, ResendCodeText } from '../../Mail/styles';

Icon.loadFont();

export default function VerifyPhone() {
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
      <Validation title="Digite o número abaixo" />
      <Container>
        <Icon name="inbox" color="#333" size={80} />
        <Text style={{ fontSize: 20, color: '#3A3A3A', alignSelf: 'center' }}>
          Verificação por SMS
        </Text>

        <CodeSentText numberOfLines={2}>
          SMS foi enviado para o seu celular. Por favor verifique.
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
        <TouchableOpacity
          onPress={() =>
            Toast.showSuccess('Um código foi enviado para seu Email.')
          }
        >
          <ResendCodeText>Reenviar em 30 segundos</ResendCodeText>
        </TouchableOpacity>
      </Container>
    </>
  );
}
