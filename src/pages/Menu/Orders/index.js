import React from 'react';
import { View, Text } from 'react-native';
import Header from '~/components/Header';

import { Container, Item } from './styles';

export default function Orders({ close }) {
  return (
    <>
      <Header title="Minhas compras" closePage={close} />
      <Container>
        <Item>
          <View style={{ height: 20, alignItems: 'flex-start' }}>
            <Text>Encomenda </Text>
          </View>
          <View style={{ height: 20, alignItems: 'flex-start' }}>
            <Text style={{ fontSize: 14, color: '#283D48' }}>Produtos</Text>
            <Text style={{ fontSize: 14, color: '#283D48' }}>Frete</Text>
            <Text style={{ fontSize: 14, color: '#283D48' }}>
              Cupom de desconto #f0ff0f
            </Text>
            <Text style={{ fontSize: 14, color: '#283D48' }}>
              Total de encomenda
            </Text>
          </View>
        </Item>
      </Container>
    </>
  );
}
