import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

import {
  Container,
  Amount,
  CheckoutContainer,
  ShirtContainer,
  Detail,
  FareDetails,
  FinalPrice,
  FinishButton,
  Price,
  IconContainer,
} from './styles';
import { Item, Shirt, ShirtInfo } from '../Orders/pages/Details/styles';

// transformar o detail item em um compon

export default function ShoppingBag({ navigation }) {
  return (
    <>
      <Container>
        <Container
          style={{
            alignItems: 'center',
            backgroundColor: '#321',
            paddingHorizontal: 20,
          }}
        >
          <ShirtContainer>
            <Item style={{ height: 150 }}>
              <Shirt
                source={{
                  uri:
                    'https://2.bp.blogspot.com/-dZNDyYvV0u4/VPuntd8jloI/AAAAAAAAAM8/GR056RmQ7so/s1600/Manchester%2BUnited%2B-%2BHome%2B-%2B2008-2009.png',
                }}
              />
              <ShirtInfo style={{ height: 100 }}>
                <Text style={{ fontWeight: 'bold' }}>
                  T-shirt Masculina M Vermelha
                </Text>
                <Text>Estampa: Manchester United</Text>
                <Text>Quantidade: 01</Text>
                <Text>R$ 39,90</Text>
              </ShirtInfo>
            </Item>

            <Detail>
              <IconContainer>
                <Icon name="truck" size={25} color="#333" />
              </IconContainer>
              <FareDetails>
                <View>
                  <Text style={{ fontSize: 14 }}>Frete</Text>
                  <Text style={{ fontSize: 16 }}>95880-000</Text>
                </View>
              </FareDetails>

              <Price>R$ 18,20</Price>
            </Detail>

            <Detail>
              <IconContainer>
                <Icon name="truck" size={25} color="#333" />
              </IconContainer>
              <FareDetails>
                <View>
                  <Text style={{ fontSize: 14 }}>10%</Text>
                  <Text style={{ fontSize: 16 }}>Desconto</Text>
                </View>
              </FareDetails>
              <IconContainer
              // style={{
              //   justifyContent: 'center',
              //   alignItems: 'flex-start',
              //   paddingHorizontal: 5,
              // }}
              >
                <Icon name="gift" size={25} color="#f53030" />
              </IconContainer>
            </Detail>
          </ShirtContainer>
        </Container>
        <CheckoutContainer>
          <Amount>
            <Text>Total</Text>
            <FinalPrice>
              <Text style={{ color: '#fff' }}>R$ 58.10</Text>
            </FinalPrice>
          </Amount>
          <FinishButton onPress={() => navigation.navigate('Success')}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
              Finalizar a compra
            </Text>
          </FinishButton>
        </CheckoutContainer>
      </Container>
    </>
  );
}

ShoppingBag.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
