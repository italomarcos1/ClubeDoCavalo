import React from 'react';
import { View, Text } from 'react-native';
import {
  AddItemToCart,
  Container,
  Content,
  CheckoutContainer,
  FinishButton,
  Detail,
  DetailsContainer,
  Item,
  Shirt,
  ShirtInfo,
  Value,
} from './styles';

export default function Details() {
  return (
    <Container
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <DetailsContainer>
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
        <Detail>
          <Content>Frete</Content>
          <Value>R$ 18,20</Value>
        </Detail>
        <Detail>
          <Content>Cupom</Content>
          <Value>---</Value>
        </Detail>
        <Detail>
          <Content>Total</Content>
          <Value>R$ 58,10</Value>
        </Detail>
        <View
          style={{
            flex: 1,
            borderTopColor: '#ccc',
            borderTopWidth: 1,
            backgroundColor: '#fff',
            justifyContent: 'space-between',
            padding: 20,
          }}
        >
          <View
            style={{
              height: 40,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Content>Envio para:</Content>
            <Text />
          </View>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <Detail style={{ marginTop: 0 }}>
              <Content>Nome: </Content>
              <Value>Carla Santos</Value>
            </Detail>
            <Detail>
              <Content>Email: </Content>
              <Value>csantos11873@gmail.com</Value>
            </Detail>
            <Detail>
              <Content>CPF: </Content>
              <Value>089.678.620-08</Value>
            </Detail>
            <Detail>
              <Content>Celular: </Content>
              <Value>(34) 99580-7641</Value>
            </Detail>
          </View>
          <View>
            <Content>Casa</Content>
            <Text>Rua São Pedro 470</Text>
            <Text>95880-000 Estrela RS</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            borderTopColor: '#ccc',
            borderTopWidth: 1,
            backgroundColor: '#fff',
          }}
        >
          <View style={{ padding: 10 }}>
            <Detail style={{ height: 40, borderTopWidth: 0 }}>
              <Text>Estado da encomenda</Text>
              <Text style={{ color: '#F06D85' }}>EM TRÂNSITO</Text>
            </Detail>
            <Detail style={{ height: 40, borderTopWidth: 0 }}>
              <Text>Método de pagamento</Text>
              <Text style={{ color: '#11CE19' }}>Cartão de Crédito</Text>
            </Detail>
            <Detail style={{ height: 40, borderTopWidth: 0 }}>
              <Text>Estado de pagamento</Text>
              <Text style={{ color: '#11CE19' }}>PAGO</Text>
            </Detail>
            <Detail style={{ height: 40, borderTopWidth: 0 }}>
              <Text>Data da encomenda</Text>
              <Text style={{ color: '#11CE19' }}>15 de julho de 2020</Text>
            </Detail>
            <Detail style={{ height: 40, borderTopWidth: 0 }}>
              <Text>Entrega estimadada</Text>
              <Text style={{ color: '#F06D85' }}>20 de julho de 2020</Text>
            </Detail>
          </View>
        </View>
      </DetailsContainer>

      <CheckoutContainer>
        <FinishButton onPress={() => {}}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
            }}
          >
            Adicionar todos os produtos ao cesto
          </Text>
        </FinishButton>
      </CheckoutContainer>
    </Container>
  );
}
