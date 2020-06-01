import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '~/components/Header';

import { Container, Item } from './styles';

export default function Orders({ close, navigation }) {
  const encomenda = { id: 1, number: '#00127' };
  return (
    <>
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
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', { encomenda })}
        >
          <Text>Detalhes da encomenda</Text>
        </TouchableOpacity>
      </Container>
    </>
  );
}
