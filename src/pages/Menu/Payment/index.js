import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import PayPal from 'react-native-vector-icons/FontAwesome';

import Validation from '~/components/Validation';

import { Container, Item, Option, OptionText } from './styles';

Icon.loadFont();

export default function Payment({ navigation }) {
  return (
    <>
      <Validation title="Escolha o método de pagamento" />
      <Container>
        <Item onPress={() => navigation.navigate('ChooseCard')}>
          <Icon name="credit-card" size={25} color="#2C71B2" />
          <Option>
            <OptionText>Cartão de crédito ou débito</OptionText>
          </Option>
          <TouchableOpacity onPress={() => navigation.navigate('ChooseCard')}>
            <Icon name="chevron-right" size={25} color="#A4A4AC" />
          </TouchableOpacity>
        </Item>

        <Item onPress={() => navigation.navigate('ChooseCard')}>
          <PayPal name="cc-paypal" color="#2C71B2" size={25} />
          <Option>
            <OptionText>Paypal</OptionText>
          </Option>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="chevron-right" size={25} color="#A4A4AC" />
          </TouchableOpacity>
        </Item>
      </Container>
    </>
  );
}

Payment.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
