import React, { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Keyboard } from 'react-native';
import PropTypes from 'prop-types';

import Validation from '~/components/Validation';
import ButtonMenu from '~/components/ButtonMenu';
import InputMenu from '~/components/InputMenu';
// import DateInput from '~/components/DateInput';

import { api } from '~/services/api'; // depois com a rota 'update user'
import { registerComplete } from '~/store/modules/auth/actions';
import { updateProfileSuccess } from '~/store/modules/user/actions';

import {
  Container,
  InputContainer,
  InputName,
  Gender,
  GenderContainer,
  Selected,
  RadioButtonBackground,
  RadioText,
} from './styles';

export default function CompleteRegisterForm() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('male');
  const [last_name, setLastName] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [loading, setLoading] = useState(false);

  const lastNameRef = useRef();
  const cellphoneRef = useRef();

  const dispatch = useDispatch();

  const handleFinishRegister = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await api.put('clients', {
        name,
        last_name,
        cellphone,
        birth: '07/06/1999',
        gender,
        default_address: { id: -5 },
      });

      console.tron.log(data.meta.message);
      const user = { ...data.data, default_address: { id: -5, name: 'none' } };
      console.tron.log(user);
      setLoading(false);

      dispatch(updateProfileSuccess(user));
      dispatch(registerComplete());
    } catch (err) {
      setLoading(false);

      console.tron.log('Erro no Form de completar registro');
    }
  }, [dispatch, name, gender, cellphone, last_name]);

  return (
    <>
      <Validation title="Ajude-nos a saber quem você é" />

      <Container>
        <InputContainer>
          <InputName>Nome</InputName>
          <InputMenu
            autoFocus
            selected={!!name}
            autoCapitalize="words"
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
            selected={!!last_name}
            autoCapitalize="words"
            autoCorrect={false}
            maxLength={45}
            placeholder="Informe seu sobrenome"
            clear={() => setLastName('')}
            ref={lastNameRef}
            value={last_name}
            onChangeText={value => setLastName(value)}
            returnKeyType="next"
            onSubmitEditing={() => cellphoneRef.current.focus()}
          />
        </InputContainer>
        <InputContainer>
          <InputName>Telefone</InputName>
          <InputMenu
            clear={() => setCellphone('')}
            autoCorrect={false}
            selected={!!cellphone}
            keyboardType="phone-pad"
            maxLength={11}
            placeholder="Digite seu número"
            ref={cellphoneRef}
            value={cellphone}
            onChangeText={setCellphone}
            // style={{ marginTop: 10, marginBottom: 10 }}
            returnKeyType="send"
            onSubmitEditing={() => {
              Keyboard.dismiss();
              handleFinishRegister();
            }}
          />
        </InputContainer>

        <InputName>Selecione seu gênero:</InputName>
        <GenderContainer>
          <Gender onPress={() => setGender('male')}>
            <RadioButtonBackground>
              <Selected selected={gender === 'male'} />
            </RadioButtonBackground>
            <RadioText>Masculino</RadioText>
          </Gender>

          <Gender onPress={() => setGender('female')}>
            <RadioButtonBackground>
              <Selected selected={gender === 'female'} />
            </RadioButtonBackground>
            <RadioText>Feminino</RadioText>
          </Gender>

          <Gender onPress={() => setGender('other')}>
            <RadioButtonBackground>
              <Selected selected={gender === 'other'} />
            </RadioButtonBackground>
            <RadioText>Outro</RadioText>
          </Gender>
        </GenderContainer>

        {/* <DateInput date={birthDate} selectDate={value => setBirthDate(value)} /> */}
        <ButtonMenu
          loading={loading}
          disabled={!name || !last_name || !cellphone || !gender}
          onPress={handleFinishRegister}
          style={{ marginTop: 20 }}
        >
          Finalizar cadastro
        </ButtonMenu>
      </Container>
    </>
  );
}

CompleteRegisterForm.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};
