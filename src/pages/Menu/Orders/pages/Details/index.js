import React from 'react';
import { View, Text } from 'react-native';
import {
  Container,
  Content,
  CheckoutContainer,
  FinishButton,
  Detail,
  CustomerInfo,
  DetailsContainer,
  Separator,
  Value,
} from './styles';

import OrderItem from './components/OrderItem';

export default function Details({ navigation }) {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <Container
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <DetailsContainer>
          <OrderItem close={goBack} />
          <Separator />
          <View>
            <Detail>
              <Content>Frete</Content>
              <Value>R$ 18,20</Value>
            </Detail>
            <Separator />
            <Detail>
              <Content>Cupom</Content>
              <Value>- - -</Value>
            </Detail>
            <Separator />
            <Detail>
              <Content>Total</Content>
              <Value>R$ 58,10</Value>
            </Detail>
          </View>
          <Separator />

          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              paddingTop: 10,
              paddingHorizontal: 5,
            }}
          >
            <View
              style={{
                height: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Content>Envio para:</Content>
              <Text />
            </View>
            <View style={{ marginTop: 10, marginBottom: 10 }}>
              <CustomerInfo>
                <Content>Nome: </Content>
                <Value>Carla Santos</Value>
              </CustomerInfo>
              <CustomerInfo>
                <Content>Email: </Content>
                <Value>csantos11873@gmail.com</Value>
              </CustomerInfo>
              <CustomerInfo>
                <Content>CPF: </Content>
                <Value>089.678.620-08</Value>
              </CustomerInfo>
              <CustomerInfo>
                <Content>Celular: </Content>
                <Value>(34) 99580-7641</Value>
              </CustomerInfo>
            </View>
            <View
              style={{
                flex: 1,
                marginBottom: 20,
                justifyContent: 'space-evenly',
              }}
            >
              <Content>Casa</Content>
              <Value>Rua São Pedro 470</Value>
              <Value>95880-000 Estrela RS</Value>
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
            <View style={{ paddingVertical: 10 }}>
              <Detail>
                <Text style={{ fontWeight: 'bold' }}>Estado da encomenda</Text>
                <Text style={{ color: '#F06D85', fontWeight: 'bold' }}>
                  EM TRÂNSITO
                </Text>
              </Detail>
              <Detail>
                <Text style={{ fontWeight: 'bold' }}>Método de pagamento</Text>
                <Text style={{ color: '#11CE19', fontWeight: 'bold' }}>
                  Cartão de Crédito
                </Text>
              </Detail>
              <Detail>
                <Text style={{ fontWeight: 'bold' }}>Estado de pagamento</Text>
                <Text style={{ color: '#11CE19', fontWeight: 'bold' }}>
                  PAGO
                </Text>
              </Detail>
              <Detail>
                <Text style={{ fontWeight: 'bold' }}>Data da encomenda</Text>
                <Text style={{ color: '#11CE19', fontWeight: 'bold' }}>
                  15 de julho de 2020
                </Text>
              </Detail>
              <Detail>
                <Text style={{ fontWeight: 'bold' }}>Entrega estimadada</Text>
                <Text style={{ color: '#F06D85', fontWeight: 'bold' }}>
                  20 de julho de 2020
                </Text>
              </Detail>
            </View>
          </View>
        </DetailsContainer>
      </Container>
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
    </>
  );
}
