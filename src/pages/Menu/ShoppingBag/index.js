import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import Toast from 'react-native-tiny-toast';

import {
  Container,
  Product,
  SelectProduct,
  SelectProductContainer,
  FirstPurchaseContainer,
  Amount,
  CheckoutContainer,
  FinalPrice,
  Price,
  FinishButton,
  ProductDiscount,
  FinishButtonText,
  Detail,
  FareDetails,
  TicketSeparator,
  TicketSeparatorCircle,
  IconContainer,
  NoProductsContainer,
  NoProductsText,
  NoProductsSubtitle,
  Zipcode,
} from './styles';

import Gift from '~/assets/ico-gift.svg';
import Shipping from '~/assets/ico-shipping.svg';
import EmptyBag from '~/assets/bag-empty.svg';

import ShirtItem from './components/ShirtItem';

import { cleanCart } from '~/store/modules/shoppingbag/actions';

Icon.loadFont();

export default function ShoppingBag({ navigation }) {
  const products = useSelector(state => state.shoppingbag.products);
  const user = useSelector(state => state.user.profile);
  const newUser = useSelector(state => state.auth.newUser);

  const dispatch = useDispatch();
  const [position, setPosition] = useState(0);

  return (
    <>
      <View style={{ flex: 1 }}>
        <Container
          contentContainerStyle={{
            height: Dimensions.get('window').height - 60,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          {products.length === 0 ? (
            <NoProductsContainer>
              <EmptyBag height={180} width={180} />
              <NoProductsText>Não há itens na cesta!</NoProductsText>
              <NoProductsSubtitle numberOfLines={2}>
                Por favor, adicione itens e volte na sua cesta de compras.
              </NoProductsSubtitle>
            </NoProductsContainer>
          ) : (
            <Product>
              {products.length !== 0 && (
                <ShirtItem product={products[position]} />
              )}
              <SelectProductContainer>
                <SelectProduct
                  disabled={position === 0}
                  onPress={() => setPosition(position - 1)}
                >
                  <Icon name="chevron-left" size={30} color="#222" />
                </SelectProduct>
                <Text>{`${position + 1} de ${products.length}`}</Text>
                <SelectProduct
                  disabled={position === products.length - 1}
                  onPress={() => setPosition(position + 1)}
                >
                  <Icon name="chevron-right" size={30} color="#222" />
                </SelectProduct>
              </SelectProductContainer>
            </Product>
          )}

          {products.length === 0 ? (
            <View />
          ) : (
            <>
              <Detail>
                <IconContainer>
                  <Shipping height={45} width={45} />
                </IconContainer>

                <FareDetails>
                  <Text style={{ fontSize: 14 }}>Frete</Text>
                  <Zipcode>
                    {user.default_address !== []
                      ? user.default_address.zipcode
                      : '71880-662'}
                  </Zipcode>
                </FareDetails>

                <Price>R$ 18,20</Price>
              </Detail>

              <Detail
                style={{
                  paddingRight: 3,
                }}
              >
                <IconContainer>
                  <Gift height={45} width={45} />
                </IconContainer>
                <FareDetails>
                  <FirstPurchaseContainer>
                    <Text style={{ fontSize: 19, color: '#F06D85' }}>10% </Text>
                    <Text style={{ fontSize: 13 }}>de desconto</Text>
                  </FirstPurchaseContainer>
                  <Text
                    style={{
                      fontSize: 13,
                      alignSelf: 'stretch',
                    }}
                  >
                    na primeira compra
                  </Text>
                </FareDetails>
                <TicketSeparator>
                  <TicketSeparatorCircle />
                  <TicketSeparatorCircle />
                </TicketSeparator>
                <IconContainer>
                  <ProductDiscount>ENVIE UM</ProductDiscount>
                  <ProductDiscount>PRESENTE</ProductDiscount>
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
            <FinishButton
              onPress={() => {
                if (newUser) {
                  Toast.show(
                    'Você deve finalizar o cadastro antes de finalizar a compra'
                  );
                  navigation.navigate('Register');
                } else {
                  navigation.navigate('Success');
                  dispatch(cleanCart());
                }
              }}
            >
              <FinishButtonText>Finalizar a compra</FinishButtonText>
            </FinishButton>
          </CheckoutContainer>
        )}
      </View>
    </>
  );
}

ShoppingBag.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
