import React from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PayPal from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';
import Validation from '~/components/Validation';

import { Container, Item, Option } from './styles';

Icon.loadFont();

export default function Payment({ close }) {
  return (
    <>
      <Header title="Pagamento" closePage={close} />
      <Validation title="Escolha o método de pagamento" />
      <Container>
        <Item>
          <Icon name="credit-card" size={25} color="#2C71B2" />
          <View
            style={{ flex: 1, alignItems: 'flex-start', paddingHorizontal: 10 }}
          >
            <Option>Cartão de crédito ou débito</Option>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="chevron-right" size={25} color="#A4A4AC" />
          </TouchableOpacity>
        </Item>
        <Item>
          <PayPal name="cc-paypal" color="#2C71B2" size={25} />
          <View
            style={{ flex: 1, alignItems: 'flex-start', paddingHorizontal: 10 }}
          >
            <Option>Paypal</Option>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="chevron-right" size={25} color="#A4A4AC" />
          </TouchableOpacity>
        </Item>
      </Container>
    </>
  );
}
