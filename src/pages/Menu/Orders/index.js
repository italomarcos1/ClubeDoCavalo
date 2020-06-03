import React, { useState } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import {
  Container,
  Content,
  ContentContainer,
  DeliveryDate,
  DeliveryStatus,
  Item,
  Details,
  ShippingDetails,
  ShippingStatus,
  Order,
  OrderNumberContainer,
} from './styles';

export default function Orders({ navigation }) {
  const encomenda = { id: 1, number: '#00127' };
  const [height, setHeight] = useState(200);
  return (
    <>
      <Container>
        <Item
          style={{ height }}
          onLayout={({ nativeEvent: { layout } }) => {
            console.tron.log(layout.width);
            setHeight(layout.width);
          }}
        >
          <OrderNumberContainer>
            <ContentContainer>
              <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                Encomenda #00127
              </Text>
            </ContentContainer>
          </OrderNumberContainer>

          <Order>
            <ContentContainer>
              <Content>Produtos</Content>
              <Content>R$ 39,90</Content>
            </ContentContainer>

            <ContentContainer>
              <Content>Frete</Content>
              <Content>R$ 18,20</Content>
            </ContentContainer>

            <ContentContainer>
              <Content>Cupom de desconto</Content>
              <Content>---</Content>
            </ContentContainer>

            <ContentContainer>
              <Content>Total de encomenda</Content>
              <Content>R$ 58,10</Content>
            </ContentContainer>
          </Order>

          <ShippingDetails>
            <DeliveryStatus>
              <Content>Entrega da Encomenda</Content>
              <ShippingStatus>EM TRÂNSITO</ShippingStatus>
            </DeliveryStatus>

            <DeliveryDate>
              <Content style={{ textAlign: 'right' }}>Entrega Estimada</Content>
              <ShippingStatus style={{ textAlign: 'right' }}>
                20 de Julho de 2020
              </ShippingStatus>
            </DeliveryDate>
          </ShippingDetails>

          <Details
            onPress={() => navigation.navigate('Details', { encomenda })}
          >
            <Text>Detalhes</Text>
          </Details>
        </Item>
      </Container>
    </>
  );
}

Orders.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
