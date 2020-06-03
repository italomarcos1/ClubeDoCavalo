import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import Header from '~/components/HeaderMenu';

import { Container, ShirtContainer, Detail, Price } from './styles';
import { Item, Shirt, ShirtInfo } from '../Orders/pages/Details/styles';

// transformar o detail item em um compon

export default function ShoppingBag({ navigation }) {
  return (
    <>
      <Container>
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
            <View
              style={{
                paddingHorizontal: 20,
                alignItems: 'center',
                borderRadius: 4,
                justifyContent: 'center',
              }}
            >
              <Icon name="truck" size={25} color="#333" />
            </View>
            <View
              style={{
                flex: 1,
                maxHeight: 70,
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingHorizontal: 5,
              }}
            >
              <View>
                <Text style={{ fontSize: 14 }}>Frete</Text>
                <Text style={{ fontSize: 16 }}>95880-000</Text>
              </View>
            </View>

            <Price>R$ 18,20</Price>
          </Detail>

          <Detail>
            <View
              style={{
                paddingHorizontal: 20,
                alignItems: 'center',
                borderRadius: 4,
                justifyContent: 'center',
              }}
            >
              <Icon name="truck" size={25} color="#333" />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingHorizontal: 5,
              }}
            >
              <View>
                <Text style={{ fontSize: 14 }}>10%</Text>
                <Text style={{ fontSize: 16 }}>Desconto</Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingHorizontal: 5,
              }}
            >
              <Icon name="gift" size={25} color="#f53030" />
            </View>
          </Detail>
        </ShirtContainer>

        <View
          style={{
            flex: 1,
            maxHeight: 70,
            justifyContent: 'flex-end',
          }}
        >
          <View
            style={{
              width: 300,
              height: 60,
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',

              flexDirection: 'row',
              paddingVertical: 5,
              paddingHorizontal: 20,
            }}
          >
            <Text>Total</Text>
            <View
              style={{
                width: 90,
                height: 40,
                flexDirection: 'row',
                backgroundColor: '#85D193',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ color: '#fff' }}>R$ 58.10</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Success')}
            style={{
              width: 300,
              height: 60,
              backgroundColor: '#12b118',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
              Finalizar a compra
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    </>
  );
}

ShoppingBag.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
