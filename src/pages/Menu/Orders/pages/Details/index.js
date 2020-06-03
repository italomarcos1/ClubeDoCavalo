import React from 'react';
import { View, Text } from 'react-native';
import {
  AddItemToCart,
  Container,
  Detail,
  DetailsContainer,
  Item,
  Shirt,
  ShirtInfo,
} from './styles';

import ButtonMenu from '~/components/ButtonMenu';

export default function Details() {
  return (
    <Container>
      <Item>
        <Shirt
          source={{
            uri:
              'https://2.bp.blogspot.com/-dZNDyYvV0u4/VPuntd8jloI/AAAAAAAAAM8/GR056RmQ7so/s1600/Manchester%2BUnited%2B-%2BHome%2B-%2B2008-2009.png',
          }}
        />
        <ShirtInfo>
          <Text style={{ fontWeight: 'bold' }}>
            T-shirt Masculina M Vermelha
          </Text>
          <Text>Estampa: Manchester United</Text>
          <Text>Quantidade: 01</Text>
          <Text>R$ 39,90</Text>
          <AddItemToCart>
            <Text style={{ fontSize: 14, color: '#fff' }}>
              Adicionar novamente ao cesto
            </Text>
          </AddItemToCart>
        </ShirtInfo>
      </Item>
      <DetailsContainer>
        <Detail>
          <Text>Frete</Text>
          <Text>R$ 18,20</Text>
        </Detail>
        <Detail>
          <Text>Cupom</Text>
          <Text>---</Text>
        </Detail>
        <Detail>
          <Text>Total</Text>
          <Text>R$ 58,10</Text>
        </Detail>
        <View style={{ flex: 1, borderTopColor: '#ccc', borderTopWidth: 1 }}>
          <Text>Nome: Carla Santos</Text>
          <Text>csantos11873@gmail.com</Text>
          <Text>CPF: 089.678.620-08</Text>
          <Text>Celular: (34) 99580-7641</Text>
          <Text>Casa</Text>
          <Text>Rua São Pedro 470</Text>
          <Text>95880-000 Estrela RS</Text>
        </View>
        <View style={{ flex: 1, borderTopColor: '#ccc', borderTopWidth: 1 }}>
          <Detail>
            <Text>Estado da encomenda</Text>
            <Text>EM TRÂNSITO</Text>
          </Detail>
          <Detail>
            <Text>Método de pagamento</Text>
            <Text>Cartão de Crédito</Text>
          </Detail>
          <Detail>
            <Text>Estado de pagamento</Text>
            <Text>PAGO</Text>
          </Detail>
          <Detail>
            <Text>Data da encomenda</Text>
            <Text>15 de julho de 2020</Text>
          </Detail>
          <Detail>
            <Text>Entrega estimadada</Text>
            <Text>20 de julho de 2020</Text>
          </Detail>
        </View>
      </DetailsContainer>

      <ButtonMenu onPress={() => {}}>
        Adicionar todos os produtos novamente ao cesto
      </ButtonMenu>
    </Container>
  );
}
