import React from 'react';
import { View, Text } from 'react-native';
import {
  AddItemToCart,
  Container,
  Content,
  CheckoutContainer,
  FinishButton,
  Detail,
  CustomerInfo,
  DetailsContainer,
  Item,
  Separator,
  Shirt,
  ShirtImage,
  ShirtInfo,
  Value,
} from './styles';

export default function Details() {
  return (
    <>
      <Container
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <DetailsContainer>
          <Item>
            <Shirt>
              <ShirtImage
                source={{
                  uri:
                    'https://2.bp.blogspot.com/-dZNDyYvV0u4/VPuntd8jloI/AAAAAAAAAM8/GR056RmQ7so/s1600/Manchester%2BUnited%2B-%2BHome%2B-%2B2008-2009.png',
                }}
              />

              <ShirtInfo>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={{ fontWeight: 'bold' }}>
                    T-shirt Masculina M Vermelha
                  </Text>
                  <Text style={{ fontSize: 15 }}>
                    Estampa: Manchester United
                  </Text>
                  <Text style={{ fontSize: 15 }}>Quantidade: 01</Text>
                  <Text style={{ fontSize: 15 }}>R$ 39,90</Text>
                </View>
                <View
                  style={{
                    marginTop: 20,
                    justifyContent: 'flex-end',
                  }}
                >
                  <AddItemToCart>
                    <Text style={{ fontSize: 14, color: '#fff' }}>
                      Adicionar este item ao cesto
                    </Text>
                  </AddItemToCart>
                </View>
              </ShirtInfo>
            </Shirt>
          </Item>
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
