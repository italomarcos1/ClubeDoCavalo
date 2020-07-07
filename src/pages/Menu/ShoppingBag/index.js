import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  Modal,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import Toast from 'react-native-tiny-toast';

import { sandbox } from '~/services/api';

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

import Header from '~/components/HeaderMenu';

import Gift from '~/assets/ico-gift.svg';
import Shipping from '~/assets/ico-shipping.svg';
import EmptyBag from '~/assets/bag-empty.svg';

import ShirtItem from './components/ShirtItem';

import { cleanCart } from '~/store/modules/shoppingbag/actions';

import AddNewAddress from '../Account/pages/Shipping/AddNewAddress';

Icon.loadFont();

export default function ShoppingBag({ navigation }) {
  const products = useSelector(state => state.shoppingbag.products);
  const user = useSelector(state => state.user.profile);
  const totalOfShirts = useSelector(state => state.shoppingbag.total);

  const signed = useSelector(state => state.auth.signed);
  const newUser = useSelector(state => state.auth.newUser);

  const dispatch = useDispatch();
  const [shirt, setShirt] = useState(0);
  const [cost, setCost] = useState(0);

  const [finalPrice, setFinalPrice] = useState(0);
  const [updatingPrice, setUpdatingPrice] = useState(true);
  const [updatingCost, setUpdatingCost] = useState(true);

  const [addressVisible, setAddressVisible] = useState(false);

  const calculateTotalPrice = useCallback(() => {
    setUpdatingPrice(true);

    const total = products.reduce((totalSum, product) => {
      const { price, amount } = product;

      const itemPrice = parseInt(price, 10) * amount;

      return totalSum + itemPrice + amount * 0.9;
    }, 0);

    const formattedPrice = Number(total).toFixed(2);

    setFinalPrice(Number(formattedPrice));
    setUpdatingPrice(false);
    setUpdatingCost(false);
  }, [products]);

  const loadCost = useCallback(async () => {
    setUpdatingCost(true);
    const { data } = await sandbox.get('checkout/shipping-cost');

    setCost(data.data);
    calculateTotalPrice();
  }, [calculateTotalPrice]);

  useEffect(() => {
    loadCost();
  }, []);

  useEffect(() => {
    loadCost();
  }, [signed, products, loadCost]);

  useEffect(() => {
    calculateTotalPrice();
  }, [totalOfShirts]);

  const handleFinish = useCallback(async () => {
    if (newUser) {
      Toast.show('Você deve finalizar o cadastro antes de finalizar a compra');
      navigation.navigate('Register');
    } else if (user.default_address && user.default_address.length === 0) {
      setAddressVisible(true);
      Toast.show('Você deve cadastrar um endereço antes de efetuar a compra.');
    } else if (signed && user.email !== null) {
      // const {
      //   data: { meta },
      // } = await sandbox.post('checkout', {
      //   shipping_address: user.default_address,
      // });

      // Toast.showSuccess(meta.message);
      navigation.navigate('Success');
      dispatch(cleanCart());
    }
  }, [dispatch, signed, navigation, user, newUser]);

  const exit = () => {
    navigation.goBack();
    navigation.openDrawer();
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Header custom title="Cesto de compras" close={exit} />
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
              {products.length !== 0 && <ShirtItem product={products[shirt]} />}
              <SelectProductContainer>
                <SelectProduct
                  disabled={shirt === 0}
                  onPress={() => setShirt(shirt - 1)}
                >
                  <Icon name="chevron-left" size={30} color="#222" />
                </SelectProduct>
                <Text>{`${shirt + 1} de ${products.length}`}</Text>
                <SelectProduct
                  disabled={shirt === products.length - 1}
                  onPress={() => setShirt(shirt + 1)}
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
                    {user.default_address.length !== 0
                      ? user.default_address.zipcode
                      : 'Nenhum endereço cadastrado.'}
                  </Zipcode>
                </FareDetails>

                {updatingCost ? (
                  <ActivityIndicator size="small" color="#333" />
                ) : (
                  <Price>{`R$ ${cost}`}</Price>
                )}
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

          <Modal
            visible={addressVisible}
            closeModal={() => setAddressVisible(false)}
          >
            <AddNewAddress
              closeModal={() => setAddressVisible(false)}
              asModal
            />
          </Modal>
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
                {updatingPrice ? (
                  <ActivityIndicator size="small" color="#333" />
                ) : (
                  <Text style={{ color: '#fff', fontSize: 20 }}>
                    {`R$ ${Number(finalPrice) + cost}`}
                  </Text>
                )}
              </FinalPrice>
            </Amount>
            <FinishButton onPress={handleFinish}>
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
    goBack: PropTypes.func,
    openDrawer: PropTypes.func,
  }).isRequired,
};
