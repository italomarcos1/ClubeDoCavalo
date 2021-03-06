import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

import {
  ShirtContainer,
  UpdateAmountContainer,
  DeleteProduct,
  Item,
  Shirt,
  PriceContainer,
  Price,
  ShirtImage,
  ShirtInfo,
  Separator,
  Options,
  ProductAmountContainer,
  ProductAmountText,
  ProductPrice,
  ProductDiscount,
  ProductBeforeDiscount,
} from '../styles';

import {
  addAmount,
  removeAmount,
  removeFromShoppingBag,
} from '~/store/modules/shoppingbag/actions';

function ShirtItem({ product }) {
  const dispatch = useDispatch();

  return (
    <ShirtContainer>
      <Shirt>
        <Item>
          <ShirtImage source={{ uri: product.print }} />
          <ShirtInfo style={{ height: 100 }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ fontWeight: 'bold' }}>
                {`T-Shirt  ${product.gender} ${product.size} ${product.color}`}
              </Text>
              <Text>{`Estampa: ${product.name}`}</Text>
              <Text>{`Quantidade: ${product.amount}`}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  height: 30,
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                }}
              >
                <ProductBeforeDiscount>{`R$ ${product.price}`}</ProductBeforeDiscount>
                <ProductPrice>{`R$ ${product.price}`}</ProductPrice>
                <ProductDiscount>-15%</ProductDiscount>
              </View>
            </View>
          </ShirtInfo>
        </Item>
        <Separator />
        <Options>
          <DeleteProduct>
            <Text>Excluir</Text>
            <TouchableOpacity
              onPress={() => dispatch(removeFromShoppingBag(product.id))}
            >
              <Icon name="x" size={18} color="#808080" />
            </TouchableOpacity>
          </DeleteProduct>
          <UpdateAmountContainer>
            <TouchableOpacity
              onPress={() => dispatch(removeAmount(product.id))}
            >
              <Icon name="minus" size={20} color="#808080" />
            </TouchableOpacity>
            <ProductAmountContainer>
              <ProductAmountText>{product.amount}</ProductAmountText>
            </ProductAmountContainer>
            <TouchableOpacity onPress={() => dispatch(addAmount(product.id))}>
              <Icon name="plus" size={20} color="#808080" />
            </TouchableOpacity>
          </UpdateAmountContainer>
          <PriceContainer>
            <Price style={{ fontSize: 18 }}>R$ {product.price}</Price>
          </PriceContainer>
        </Options>
      </Shirt>
    </ShirtContainer>
  );
}

ShirtItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    gender: PropTypes.string,
    name: PropTypes.string,
    print: PropTypes.string,
    amount: PropTypes.number,
    price: PropTypes.string,
    currency: PropTypes.string,
  }).isRequired,
};

export default ShirtItem;
