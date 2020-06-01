import React, { useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import {
  Container,
  OptionsContainer,
  Selected,
  RadioButtonBackground,
  RadioText,
} from './styles';

import ButtonMenu from '~/components/ButtonMenu';

export default function Gender({ navigation }) {
  const [gender, setGender] = useState(''); // habilitar pro valor retornado no 'useSelector'

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F2F3F4',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <OptionsContainer>
        <Container onPress={() => setGender('Masculino')}>
          <RadioButtonBackground>
            <Selected selected={gender === 'Masculino'} />
          </RadioButtonBackground>
          <RadioText>Masculino</RadioText>
        </Container>

        <Container onPress={() => setGender('Feminino')}>
          <RadioButtonBackground>
            <Selected selected={gender === 'Feminino'} />
          </RadioButtonBackground>
          <RadioText>Feminino</RadioText>
        </Container>

        <Container onPress={() => setGender('Outro')}>
          <RadioButtonBackground>
            <Selected selected={gender === 'Outro'} />
          </RadioButtonBackground>
          <RadioText>Outro</RadioText>
        </Container>
      </OptionsContainer>
      <ButtonMenu
        onPress={() => navigation.goBack()}
        style={{ marginTop: 20, fontSize: 20 }}
      >
        Gravar
      </ButtonMenu>
    </View>
  );
}

Gender.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};
