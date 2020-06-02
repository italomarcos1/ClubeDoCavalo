import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Detail, DetailsContainer, Item } from './styles';

export default function Details() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F2F3F4',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <Item>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri:
              'https://2.bp.blogspot.com/-dZNDyYvV0u4/VPuntd8jloI/AAAAAAAAAM8/GR056RmQ7so/s1600/Manchester%2BUnited%2B-%2BHome%2B-%2B2008-2009.png',
          }}
          resizeMode="contain"
        />
        <View
          style={{
            flex: 1,
            marginLeft: 5,
            width: 100,
            justifyContent: 'space-evenly',
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>
            T-shirt Masculina M Vermelha
          </Text>
          <Text>Estampa: Manchester United</Text>
          <Text>Quantidade: 01</Text>
          <Text>R$ 39,90</Text>
          <TouchableOpacity
            style={{
              borderRadius: 3,
              backgroundColor: '#5BAE59',
              padding: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {}}
          >
            <Text style={{ fontSize: 14, color: '#fff' }}>
              Adicionar novamente ao cesto
            </Text>
          </TouchableOpacity>
        </View>
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
      </DetailsContainer>
    </View>
  );
}
