import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { AddItemToCart, Item, Shirt, ShirtImage, ShirtInfo } from './styles';

import { addToShoppingBag } from '~/store/modules/shoppingbag/actions';

export default function OrderItem({ close }) {
  const dispatch = useDispatch();

  const product = {
    id: Number(String(new Date().getTime() / 1000).slice(7, 10)),
    color: 'Vermelha',
    size: 'M',
    gender: 'Masculino',
    print:
      'https://2.bp.blogspot.com/-dZNDyYvV0u4/VPuntd8jloI/AAAAAAAAAM8/GR056RmQ7so/s1600/Manchester%2BUnited%2B-%2BHome%2B-%2B2008-2009.png',
    name: 'Teste',
    amount: 1,
    price: '59,90',
    currency: 'BRL',
  };

  const handleAddToCart = useCallback(
    prod => {
      dispatch(addToShoppingBag(prod));
      close();
    },
    [dispatch]
  );

  return (
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
              T-shirt {product.gender} {product.size} {product.color}
            </Text>
            <Text style={{ fontSize: 15 }}>Estampa: {product.name}</Text>
            <Text style={{ fontSize: 15 }}>Quantidade: {product.amount}</Text>
            <Text style={{ fontSize: 15 }}>R$ {product.price}</Text>
          </View>
          <View
            style={{
              marginTop: 20,
              // justifyContent: 'flex-end',
            }}
          >
            <AddItemToCart onPress={() => handleAddToCart(product)}>
              <Text style={{ fontSize: 14, color: '#fff' }}>
                Adicionar este item ao cesto
              </Text>
            </AddItemToCart>
          </View>
        </ShirtInfo>
      </Shirt>
    </Item>
  );
}
