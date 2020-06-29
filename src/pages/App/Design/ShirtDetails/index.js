import React, { useCallback, useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/Feather';

import Header from '~/components/HeaderMenu';

import { addToShoppingBag } from '~/store/modules/shoppingbag/actions';

import { Container, TShirtContainer, TShirtImage } from '../styles';
import {
  AddToShoppingBag,
  AddToShoppingBagText,
  Details,
  MainContainer,
  CheckoutContainer,
  ShirtSize,
  ShirtSizeContainer,
  ShirtTypeContainer,
  ShirtType,
  Option,
} from './styles';

Icon.loadFont();

export default function ShirtDetails({
  close,
  shirt,
  stickername,
  color,
  redirect,
  navigation,
}) {
  const [size, setSize] = useState('M');
  const [type, setType] = useState('Masculino');
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();

  // atua como o lifecycle method 'componentWillUnmount
  // executa a ação antes do componente 'morrer'

  const addProduct = useCallback(() => {
    dispatch(
      addToShoppingBag({
        id: Number(String(new Date().getTime() / 1000).slice(7, 10)),
        color,
        size,
        gender: type,
        print: shirt,
        name: stickername,
        amount,
        price: '59,90',
        currency: 'BRL',
      })
    );
    redirect();
  }, [amount, dispatch, redirect, size, type]);

  return (
    <>
      <Header title="Detalhes da camiseta" close={close} />

      <Container>
        <MainContainer>
          <TShirtContainer
            style={{
              marginTop: -20,
              flex: 1,
            }}
          >
            <TShirtImage
              style={{ flex: 1 }}
              source={{ uri: shirt }}
              resizeMode="contain"
            />
          </TShirtContainer>
          <Details>
            <ShirtSizeContainer>
              <ShirtSize onPress={() => setSize('P')} selected={size === 'P'}>
                <Option selected={size === 'P'}>P</Option>
              </ShirtSize>
              <ShirtSize onPress={() => setSize('M')} selected={size === 'M'}>
                <Option selected={size === 'M'}>M</Option>
              </ShirtSize>
              <ShirtSize onPress={() => setSize('G')} selected={size === 'G'}>
                <Option selected={size === 'G'}>G</Option>
              </ShirtSize>
              <ShirtSize onPress={() => setSize('XL')} selected={size === 'XL'}>
                <Option selected={size === 'XL'}>XL</Option>
              </ShirtSize>
              <ShirtSize
                onPress={() => setSize('XXL')}
                selected={size === 'XXL'}
              >
                <Option selected={size === 'XXL'}>XXL</Option>
              </ShirtSize>
            </ShirtSizeContainer>
            <ShirtTypeContainer>
              <ShirtType
                onPress={() => setType('Feminino')}
                selected={type === 'Feminino'}
              >
                <Option selected={type === 'Feminino'}>Feminino</Option>
              </ShirtType>
              <ShirtType
                onPress={() => setType('Masculino')}
                selected={type === 'Masculino'}
              >
                <Option selected={type === 'Masculino'}>Masculino</Option>
              </ShirtType>
              <ShirtType
                onPress={() => setType('Infantil')}
                selected={type === 'Infantil'}
              >
                <Option selected={type === 'Infantil'}>Infantil</Option>
              </ShirtType>
            </ShirtTypeContainer>
            <ShirtSizeContainer
              style={{
                height: 30,
                justifyContent: 'space-around',
              }}
            >
              <View
                style={{
                  width: 120,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  backgroundColor: '#F0F0F0',
                }}
              >
                <TouchableOpacity
                  disabled={amount === 1}
                  onPress={() => {
                    setAmount(amount - 1);
                  }}
                  style={{ paddingHorizontal: 5 }}
                >
                  <Icon size={30} name="minus" color="#505050" />
                </TouchableOpacity>
                <Text style={{ fontSize: 24, color: '#505050' }}>{amount}</Text>
                <TouchableOpacity
                  disabled={amount === 999}
                  onPress={() => setAmount(amount + 1)}
                  style={{ paddingHorizontal: 5 }}
                >
                  <Icon size={30} name="plus" color="#505050" />
                </TouchableOpacity>
              </View>
              <View />
              {/* View propositalmente vazia pra cancelar o padding  */}
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontSize: 24, color: '#505050' }}>R$ 49.99</Text>
              </View>
            </ShirtSizeContainer>
          </Details>
        </MainContainer>
        <CheckoutContainer>
          <AddToShoppingBag
            onPress={() => {
              addProduct();
            }}
          >
            <AddToShoppingBagText>Adicionar ao cesto</AddToShoppingBagText>
          </AddToShoppingBag>
        </CheckoutContainer>
      </Container>
    </>
  );
}

ShirtDetails.propTypes = {
  close: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  shirt: PropTypes.string.isRequired,
  stickername: PropTypes.string.isRequired,
  redirect: PropTypes.func.isRequired,
};
