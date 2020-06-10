import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

import Validation from '~/components/Validation';
import ButtonMenu from '~/components/ButtonMenu';
import InputMenu from '~/components/InputMenu';

import { api } from '~/services/api'; // depois com a rota 'update user'
import { signInSuccess } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container, InputContainer, InputName, CustomView } from './styles';

export default function AddCard({ navigation }) {
  const [name, setName] = useState('');
  const [last_name, setLastName] = useState('');
  const [birth, setBirthDate] = useState(''); // date picker
  const [cell_phone, setCellphone] = useState(''); // date picker

  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.user.profile);

  console.tron.log(`token: ${token}`);
  console.tron.log(`user: ${user}`);

  const lastNameRef = useRef();
  const cellphoneRef = useRef();

  const dispatch = useDispatch();

  const handleFinishRegister = useCallback(() => {
    console.tron.log(`name: ${name}`);
    console.tron.log(`last: ${last_name}`);
    console.tron.log(`cell: ${cell_phone}`);
    dispatch(signInSuccess(token, user));
  }, [dispatch, token, user, name, cell_phone, last_name]);

  return (
    <>
      <Validation title="Ajude-nos a saber quem você é" />

      <Container>
        <InputContainer>
          <InputName>Nome</InputName>
          <InputMenu
            autoFocus
            selected={!!name}
            autoCapitalize="characters"
            autoCorrect={false}
            maxLength={25}
            placeholder="Informe seu nome"
            clear={() => setName('')}
            value={name}
            onChangeText={value => setName(value)}
            returnKeyType="next"
            onSubmitEditing={() => lastNameRef.current.focus()}
          />
        </InputContainer>
        <InputContainer>
          <InputName>Sobrenome</InputName>
          <InputMenu
            autoFocus
            selected={!!last_name}
            autoCapitalize="characters"
            autoCorrect={false}
            maxLength={25}
            placeholder="Informe seu sobrenome"
            clear={() => setLastName('')}
            value={last_name}
            onChangeText={value => setLastName(value)}
            returnKeyType="next"
            onSubmitEditing={() => cellphoneRef.current.focus()}
            // returnKeyType="send"
            // onSubmitEditing={() => {
            //   Keyboard.dismiss();
            //   handleFinishRegister();
            // }}
          />
        </InputContainer>
        <InputContainer>
          <InputName>Telefone</InputName>
          <InputMenu
            clear={() => setCellphone('')}
            autoCorrect={false}
            selected={!!cell_phone}
            keyboardType="phone-pad"
            maxLength={11}
            placeholder="Digite seu número"
            ref={cellphoneRef}
            value={cell_phone}
            onChangeText={setCellphone}
            // style={{ marginTop: 10, marginBottom: 10 }}
            returnKeyType="send"
            onSubmitEditing={() => {
              Keyboard.dismiss();
              handleFinishRegister();
            }}
          />
        </InputContainer>

        <ButtonMenu
          disabled={!name || !last_name || !cell_phone}
          onPress={handleFinishRegister}
          style={{ marginTop: 20 }}
        >
          Finalizar cadastro
        </ButtonMenu>
      </Container>
    </>
  );
}

AddCard.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};
