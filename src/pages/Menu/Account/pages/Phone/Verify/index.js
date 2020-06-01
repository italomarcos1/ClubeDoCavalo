import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Keyboard } from 'react-native';
// import { Container } from './styles';
import Icon from 'react-native-vector-icons/Feather';

import Validation from '~/components/Validation';

import { ValidationContainer, ValidationCodeInput } from './styles';

Icon.loadFont();

export default function VerifyPhone({ navigation }) {
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
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          padding: 20,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Icon name="inbox" color="#333" size={80} />
        <Text style={{ fontSize: 20, color: '#3A3A3A', alignSelf: 'center' }}>
          Verificação por SMS
        </Text>

        <Text
          numberOfLines={2}
          style={{
            marginTop: 5,
            marginBottom: 5,
            width: 230,
            height: 60,
            fontSize: 14,
            color: '#596473',
            alignSelf: 'center',
            textAlign: 'center',
          }}
        >
          SMS foi enviado para o seu celular. Por favor verifique.
        </Text>
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
        <TouchableOpacity onPress={() => {}}>
          <Text
            style={{
              marginBottom: 5,
              marginTop: 5,
              fontSize: 16,
              color: '#D93150',
              alignSelf: 'center',
            }}
          >
            Reenviar em 30 segundos
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
