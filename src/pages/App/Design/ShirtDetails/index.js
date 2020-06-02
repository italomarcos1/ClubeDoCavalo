import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import Header from '~/components/HeaderMenu';

import { Container, TShirtContainer, TShirtImage } from '../styles';
import {
  Details,
  ShirtSize,
  ShirtSizeContainer,
  ShirtTypeContainer,
  ShirtType,
  Option,
} from './styles';

Icon.loadFont();

export default function ShirtDetails({ close, shirt, redirect }) {
  const [size, setSize] = useState('M');
  const [type, setType] = useState('Masculino');

  return (
    <>
      <Header title="Detalhes da camiseta" close={close} />
      <Container
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
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
            <ShirtSize onPress={() => setSize('XXL')} selected={size === 'XXL'}>
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
                backgroundColor: '#FFF0F0',
              }}
            >
              <TouchableOpacity
                onPress={() => {}}
                style={{ paddingHorizontal: 5 }}
              >
                <Icon size={30} name="minus" color="#333" />
              </TouchableOpacity>
              <Text style={{ fontSize: 24, color: '#333' }}>1</Text>
              <TouchableOpacity
                onPress={() => {}}
                style={{ paddingHorizontal: 5 }}
              >
                <Icon size={30} name="plus" color="#333" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ fontSize: 24, color: '#333' }}>R$ 49.99</Text>
            </View>
          </ShirtSizeContainer>
        </Details>
        <TouchableOpacity
          onPress={redirect}
          style={{
            width: 300,
            marginTop: 10,
            height: 60,
            backgroundColor: '#12b118',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
            Adicionar ao cesto
          </Text>
        </TouchableOpacity>
      </Container>
    </>
  );
}

ShirtDetails.propTypes = {
  close: PropTypes.func.isRequired,
  shirt: PropTypes.string.isRequired,
  redirect: PropTypes.func.isRequired,
};
