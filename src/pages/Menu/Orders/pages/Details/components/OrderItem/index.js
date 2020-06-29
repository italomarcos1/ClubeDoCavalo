import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import {
  AddItemToCart,
  Item,
  Shirt,
  ItemImage,
  ItemInfo,
  ProductAmount,
  ProductPrice,
  ProductTitle,
} from './styles';

import { addToShoppingBag } from '~/store/modules/shoppingbag/actions';

export default function OrderItem({ product }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddToCart = useCallback(
    prod => {
      dispatch(addToShoppingBag(prod));
      navigation.goBack();
    },
    [dispatch]
  );

  return (
    <Item>
      <Shirt>
        <ItemImage
          source={{
            uri: product.thumbs,
          }}
        />

        <ItemInfo>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
            }}
          >
            <ProductTitle>
              T-shirt {product.gender} {product.size} {product.color}
            </ProductTitle>
            <ProductAmount>Estampa: {product.title}</ProductAmount>
            <ProductAmount>Quantidade: {product.quantity}</ProductAmount>
            <ProductPrice>R$ {product.unit_price}</ProductPrice>
          </View>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <AddItemToCart onPress={() => handleAddToCart(product)}>
              <Text style={{ fontSize: 14, color: '#fff' }}>
                Adicionar ao cesto
              </Text>
            </AddItemToCart>
          </View>
        </ItemInfo>
      </Shirt>
    </Item>
  );
}

OrderItem.propTypes = {
  product: PropTypes.shape({
    gender: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    thumbs: PropTypes.string,
    title: PropTypes.string,
    quantity: PropTypes.number,
    unit_price: PropTypes.number,
  }),
};

OrderItem.defaultProps = {
  product: PropTypes.shape({
    gender: 'Masculino',
    size: 'M',
    color: 'Preta',
  }),
};
