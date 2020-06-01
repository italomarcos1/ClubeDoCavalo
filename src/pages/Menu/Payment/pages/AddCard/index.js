import React, { useRef, useState } from 'react';
import { Text, Keyboard } from 'react-native';
import { Container, InputContainer, InputName, CustomView } from './styles';

import Validation from '~/components/Validation';
import ButtonMenu from '~/components/ButtonMenu';
import InputMenu from '~/components/InputMenu';

export default function AddCard({ navigation }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const expireDateRef = useRef();
  const cvvRef = useRef();
  const nameRef = useRef();

  return (
    <>
      <Validation title="Digite o seu cartão" />

      <Container>
        <InputContainer>
          <Text style={{ fontSize: 12, color: '#76797E', marginBottom: 5 }}>
            Número do cartão
          </Text>
          <InputMenu
            card
            autoFocus
            autoCorrect={false}
            maxLength={16}
            keyboardType="numeric"
            placeholder="5555 5555 5555 5555"
            value={cardNumber}
            onChangeText={setCardNumber}
            returnKeyType="next"
            onSubmitEditing={() => expireDateRef.current.focus()}
          />
        </InputContainer>

        <CustomView>
          <InputContainer style={{ flex: 1, marginRight: 20 }}>
            <InputName>Data de validade</InputName>
            <InputMenu
              style={{ flex: 1, maxWidth: 300, maxHeight: 45 }}
              help
              maxLength={4}
              autoCapitalize="characters"
              autoCorrect={false}
              placeholder="MM/AA"
              ref={expireDateRef}
              value={expireDate}
              onChangeText={setExpireDate}
              returnKeyType="next"
              onSubmitEditing={() => cvvRef.current.focus()}
            />
          </InputContainer>

          <InputContainer style={{ flex: 1, marginLeft: 20 }}>
            <InputName>CVV</InputName>
            <InputMenu
              help
              maxLength={3}
              autoCorrect={false}
              keyboardType="numeric"
              placeholder="CVV"
              ref={cvvRef}
              value={cvv}
              onChangeText={setCvv}
              returnKeyType="next"
              onSubmitEditing={() => nameRef.current.focus()}
            />
          </InputContainer>
        </CustomView>

        <InputContainer>
          <InputName>Nome no cartão</InputName>
          <InputMenu
            autoCapitalize="characters"
            autoCorrect={false}
            ref={nameRef}
            value={name}
            onChangeText={setName}
            returnKeyType="send"
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </InputContainer>

        <ButtonMenu
          onPress={() => navigation.goBack()}
          style={{ marginTop: 20 }}
        >
          Adicionar Cartão
        </ButtonMenu>
      </Container>
    </>
  );
}