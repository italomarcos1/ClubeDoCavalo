import React, { useRef, useState } from 'react';
import { Text, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

import Validation from '~/components/Validation';
import ButtonMenu from '~/components/ButtonMenu';
import InputMenu from '~/components/InputMenu';

import {
  Container,
  InputContainer,
  InputName,
  CustomView,
} from '../../../../Payment/pages/AddCard/styles';

export default function EditAddress({ navigation, route }) {
  const addressInfo = route.params.address;

  // estático. deve puxar esse campo do redux e atualizar por action
  // não será necessário mandar o dado do usuário na rota

  const [name, setName] = useState(addressInfo.name);
  const [cep, setCep] = useState(addressInfo.cep);
  const [number, setNumber] = useState(addressInfo.number);
  const [address, setAddress] = useState(addressInfo.street);
  const [complement, setComplement] = useState(addressInfo.complement);
  const [city, setCity] = useState(addressInfo.city);
  const [state, setState] = useState(addressInfo.state);

  const cepRef = useRef();
  const numberRef = useRef();
  const addressRef = useRef();
  const complementRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();

  return (
    <>
      <Validation title="Digite o seu endereço" />

      <Container
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: 30,
        }}
      >
        <InputContainer>
          <Text style={{ fontSize: 12, color: '#76797E', marginBottom: 5 }}>
            Nome (Casa, Trabalho...)
          </Text>
          <InputMenu
            autoFocus
            selected={!!name}
            autoCorrect={false}
            maxLength={20}
            clear={() => setName('')}
            value={name}
            onChangeText={setName}
            returnKeyType="next"
            onSubmitEditing={() => cepRef.current.focus()}
          />
        </InputContainer>

        <CustomView>
          <InputContainer style={{ flex: 1, marginRight: 20 }}>
            <InputName>CEP</InputName>
            <InputMenu
              style={{ flex: 1, maxWidth: 300, maxHeight: 45 }}
              maxLength={9}
              selected={!!cep}
              autoCorrect={false}
              placeholder="95880-000"
              clear={() => setCep('')}
              ref={cepRef}
              value={cep}
              onChangeText={setCep}
              returnKeyType="next"
              onSubmitEditing={() => numberRef.current.focus()}
            />
          </InputContainer>

          <InputContainer style={{ flex: 1, marginLeft: 20 }}>
            <InputName>Número</InputName>
            <InputMenu
              maxLength={4}
              selected={!!number}
              autoCorrect={false}
              keyboardType="numeric"
              ref={numberRef}
              value={number}
              onChangeText={setNumber}
              returnKeyType="next"
              onSubmitEditing={() => addressRef.current.focus()}
            />
          </InputContainer>
        </CustomView>

        <InputContainer style={{ marginBottom: 0 }}>
          <InputName>Endereço</InputName>
          <InputMenu
            autoCapitalize="characters"
            autoCorrect={false}
            maxLength={45}
            selected={!!address}
            clear={() => setAddress('')}
            ref={addressRef}
            value={address}
            onChangeText={setAddress}
            returnKeyType="next"
            onSubmitEditing={() => complementRef.current.focus()}
          />
        </InputContainer>

        <InputContainer style={{ marginTop: 0 }}>
          <InputName>Complemento</InputName>
          <InputMenu
            autoCapitalize="characters"
            autoCorrect={false}
            maxLength={45}
            selected={!!complement}
            clear={() => setComplement('')}
            ref={complementRef}
            value={complement}
            onChangeText={setComplement}
            returnKeyType="next"
            onSubmitEditing={() => cityRef.current.focus()}
          />
        </InputContainer>

        <CustomView>
          <InputContainer style={{ flex: 1, marginRight: 20 }}>
            <InputName>Cidade</InputName>
            <InputMenu
              style={{ flex: 1, maxWidth: 300, maxHeight: 45 }}
              maxLength={35}
              selected={!!city}
              autoCapitalize="characters"
              clear={() => setCity('')}
              autoCorrect={false}
              ref={cityRef}
              value={city}
              onChangeText={setCity}
              returnKeyType="next"
              onSubmitEditing={() => stateRef.current.focus()}
            />
          </InputContainer>

          <InputContainer style={{ flex: 1, marginLeft: 20 }}>
            <InputName>Estado (sigla)</InputName>
            <InputMenu
              maxLength={2}
              selected={!!state}
              autoCorrect={false}
              autoCapitalize="characters"
              placeholder="GO, SP, RN..."
              clear={() => setState('')}
              ref={stateRef}
              value={state}
              onChangeText={setState}
              returnKeyType="send"
              onSubmitEditing={() => Keyboard.dismiss()}
            />
          </InputContainer>
        </CustomView>

        <ButtonMenu
          disabled={
            !name ||
            !cep ||
            !number ||
            !address ||
            !complement ||
            !city ||
            !state
          }
          onPress={() => navigation.goBack()}
          style={{ marginTop: 20 }}
        >
          Salvar alterações
        </ButtonMenu>
      </Container>
    </>
  );
}

EditAddress.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};
