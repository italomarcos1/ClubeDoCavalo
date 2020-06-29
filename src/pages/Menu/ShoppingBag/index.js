import React, { useEffect, useState } from 'react';
import { View, Text, Modal, ScrollView, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

import {
  Product,
  SelectProduct,
  SelectProductContainer,
  Amount,
  CheckoutContainer,
  FinalPrice,
  Price,
  FinishButton,
  FinishButtonText,
  Detail,
  FareDetails,
  PickAddress,
  Address,
  AddressInfo,
  AddressName,
  AddressList,
  IconContainer,
  NoProductsContainer,
  NoProductsText,
  NoProductsSubtitle,
} from './styles';

import Gift from '~/assets/ico-gift.svg';
import Shipping from '~/assets/ico-shipping.svg';
import EmptyBag from '~/assets/bag-empty.svg';

import ShirtItem from './components/ShirtItem';

import { api } from '~/services/api';

import { cleanCart } from '~/store/modules/shoppingbag/actions';

// transformar o detail item em um componente

Icon.loadFont();

export default function ShoppingBag({ navigation }) {
  const products = useSelector(state => state.shoppingbag.products);
  const user = useSelector(state => state.user.profile);

  // verificar para ser apenas caso tenha algum produto
  const dispatch = useDispatch();
  const [position, setPosition] = useState(0);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [selectAddressModal, setSelectAddressVisible] = useState(false);

  useEffect(() => {
    async function loadAddresses() {
      const response = await api.get('addresses');

      setAddresses(response.data.data);
    }

    loadAddresses();
  }, []);

  return (
    <>
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            height: Dimensions.get('window').height - 60,
            paddingTop: 20,
            paddingBottom: 30,
            paddingHorizontal: 20,
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
              <Detail onPress={() => setSelectAddressVisible(true)}>
                <IconContainer>
                  <Shipping height={45} width={45} />
                </IconContainer>

                <FareDetails>
                  <Text style={{ fontSize: 14 }}>Frete</Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#505050',
                      fontWeight: 'bold',
                      borderColor: '#ddd',
                      borderWidth: 0.75,
                      borderRadius: 2,
                      paddingVertical: 1,
                      paddingHorizontal: 7,
                      marginTop: 2,
                    }}
                  >
                    {user.default_address !== []
                      ? user.default_address.zipcode
                      : '71880-662'}
                  </Text>
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
                  <View
                    style={{
                      alignSelf: 'center',
                      flexDirection: 'row',
                      alignItems: 'baseline',
                      paddingRight: 10,
                    }}
                  >
                    <Text style={{ fontSize: 19, color: '#F06D85' }}>10% </Text>
                    <Text style={{ fontSize: 13, fontWeight: '800' }}>
                      de desconto
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 13,
                      alignSelf: 'stretch',
                      fontWeight: '800',
                    }}
                  >
                    na primeira compra
                  </Text>
                </FareDetails>
                <View
                  style={{
                    width: 1.5,
                    backgroundColor: '#F3F3F3',
                    height: 85,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      width: 15,
                      height: 15,
                      borderRadius: 7.5,
                      backgroundColor: '#F2F3F4',
                    }}
                  />
                  <View
                    style={{
                      width: 15,
                      height: 15,
                      borderRadius: 7.5,
                      backgroundColor: '#F2F3F4',
                    }}
                  />
                </View>
                <IconContainer>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#F06D85',
                    }}
                  >
                    ENVIE UM
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#F06D85',
                    }}
                  >
                    PRESENTE
                  </Text>
                </IconContainer>
              </Detail>
            </>
          )}
        </ScrollView>
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
                navigation.navigate('Success');
                dispatch(cleanCart());
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
