import React, { useEffect, useState } from 'react';
import { View, Text, Modal, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

import {
  Container,
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

import ShirtItem from './components/ShirtItem';

import { api } from '~/services/api';

// transformar o detail item em um compon

Icon.loadFont();

export default function ShoppingBag({ navigation }) {
  const products = useSelector(state => state.shoppingbag.products);

  // verificar para ser apenas caso tenha algum produto
  const dispatch = useDispatch();
  const [position, setPosition] = useState(0);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState({});
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
      <Container
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Modal
          visible={selectAddressModal}
          onRequestClose={() => setSelectAddressVisible(false)}
          transparent
        >
          <PickAddress>
            <Text style={{ color: '#fff', fontSize: 20, marginBottom: 10 }}>
              Selecione o endereço para entrega:
            </Text>
            <View style={{ height: 150, width: 300 }}>
              <AddressList
                data={addresses}
                keyExtractor={address => address.id}
                renderItem={({ item }) => (
                  <Address
                    onPress={() => {
                      setSelectedAddress(item);
                      setSelectAddressVisible(false);
                    }}
                  >
                    <AddressName>{item.name}</AddressName>
                    <AddressInfo>
                      {item.address} - {item.number}
                    </AddressInfo>
                  </Address>
                )}
              />
            </View>
          </PickAddress>
        </Modal>
        {products.length === 0 ? (
          <NoProductsContainer>
            <Icon name="shopping-bag" color="#333" size={80} />
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
                <Icon name="truck" size={25} color="#333" />
              </IconContainer>
              <FareDetails>
                <View>
                  <Text style={{ fontSize: 14 }}>Frete</Text>
                  <Text style={{ fontSize: 16 }}>
                    {selectedAddress !== {}
                      ? selectedAddress.zipcode
                      : '71880-662'}
                  </Text>
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
          <FinishButton
            onPress={() => {
              navigation.navigate('Success');
              dispatch({ type: `@shoppingbag/AFTER_PURCHASE` });
            }}
          >
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
