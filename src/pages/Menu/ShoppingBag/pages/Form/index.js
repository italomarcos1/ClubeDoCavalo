import React, { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Keyboard } from 'react-native';

import PropTypes from 'prop-types';

import Validation from '~/components/Validation';
import ButtonMenu from '~/components/ButtonMenu';
import InputMenu from '~/components/InputMenu';

import { api } from '~/services/api';
import { registerComplete } from '~/store/modules/auth/actions';
import { updateProfileSuccess } from '~/store/modules/user/actions';

import {
  Container,
  CustomView,
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
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const [gender, setGender] = useState('male');
  const [last_name, setLastName] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [loading, setLoading] = useState(false);

  const lastNameRef = useRef();
  const cellphoneRef = useRef();

  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();

  const dispatch = useDispatch();

  const handleFinishRegister = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await api.put('clients', {
        name,
        last_name,
        cellphone,
        birth: `${day}/${month}/${year}`,
        gender,
      });

      const user = { ...data.data };
      setLoading(false);

      dispatch(updateProfileSuccess(user));
      dispatch(registerComplete());
    } catch (err) {
      setLoading(false);
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
            returnKeyType="send"
            onSubmitEditing={() => dayRef.current.focus()}
          />
        </InputContainer>

        <CustomView>
          <InputContainer style={{ flex: 1, marginRight: 20 }}>
            <InputName>Dia</InputName>
            <InputMenu
              style={{ flex: 1, maxHeight: 45 }}
              maxLength={2}
              selected={!!day}
              autoCorrect={false}
              keyboardType="phone-pad"
              clear={() => setDay('')}
              ref={dayRef}
              value={day}
              onChangeText={setDay}
              returnKeyType="next"
              onSubmitEditing={() => monthRef.current.focus()}
            />
          </InputContainer>

          <InputContainer style={{ flex: 1, marginLeft: 20 }}>
            <InputName>Mês</InputName>
            <InputMenu
              maxLength={2}
              selected={!!month}
              autoCorrect={false}
              keyboardType="phone-pad"
              clear={() => setMonth('')}
              ref={monthRef}
              value={month}
              onChangeText={setMonth}
              returnKeyType="next"
              onSubmitEditing={() => yearRef.current.focus()}
            />
          </InputContainer>
          <InputContainer style={{ flex: 1, marginLeft: 20 }}>
            <InputName>Ano</InputName>
            <InputMenu
              maxLength={4}
              selected={!!year}
              autoCorrect={false}
              keyboardType="phone-pad"
              clear={() => setYear('')}
              ref={yearRef}
              value={year}
              onChangeText={setYear}
              returnKeyType="next"
              onSubmitEditing={() => Keyboard.dismiss()}
            />
          </InputContainer>
        </CustomView>

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
          disabled={
            !name ||
            !last_name ||
            !cellphone ||
            !day ||
            !month ||
            !year ||
            !gender
          }
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
