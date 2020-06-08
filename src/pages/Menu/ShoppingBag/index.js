import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

import {
  Container,
  ProductsList,
  Amount,
  CheckoutContainer,
  FinalPrice,
  Price,
  FinishButton,
  FinishButtonText,
  Detail,
  FareDetails,
  IconContainer,
  NoProductsContainer,
  NoProductsText,
  NoProductsSubtitle,
} from './styles';

import ShirtItem from './components/ShirtItem';

// transformar o detail item em um compon

Icon.loadFont();

export default function ShoppingBag({ navigation }) {
  const products = useSelector(state => state.shoppingbag.products);

  console.tron.log(`array: ${products}`);
  console.tron.log(`array a: ${products.length}`);

  return (
    <>
      <Container>
        {products.length === 0 ? (
          <NoProductsContainer>
            <Icon name="shopping-bag" color="#333" size={80} />
            <NoProductsText>Não há itens na cesta!</NoProductsText>
            <NoProductsSubtitle numberOfLines={2}>
              Por favor, adicione itens e volte na sua cesta de compras.
            </NoProductsSubtitle>
          </NoProductsContainer>
        ) : (
          <ProductsList
            data={products}
            extraData={products}
            keyExtractor={product => String(product.id)}
            renderItem={({ item }) => <ShirtItem product={item} />}
          />
        )}

        {products.length === 0 ? (
          <View />
        ) : (
          <>
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
              <IconContainer>
                <Text style={{ fontWeight: 'bold', color: '#F06D85' }}>
                  ENVIE UM
                </Text>
                <Text style={{ fontWeight: 'bold', color: '#F06D85' }}>
                  PRESENTE
                </Text>
              </IconContainer>
            </Detail>
          </>
        )}
      </Container>
      {products.length === 0 ? (
        <View />
      ) : (
        <CheckoutContainer>
          <Amount>
            <Text style={{ color: '#000', fontSize: 22, fontWeight: 'bold' }}>
              Total
            </Text>
            <FinalPrice>
              <Text style={{ color: '#fff', fontSize: 20 }}>R$ 58.10</Text>
            </FinalPrice>
          </Amount>
          <FinishButton onPress={() => navigation.navigate('Success')}>
            <FinishButtonText>Finalizar a compra</FinishButtonText>
          </FinishButton>
        </CheckoutContainer>
      )}
    </>
  );
}

ShoppingBag.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
