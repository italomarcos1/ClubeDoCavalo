import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// import { Container } from './styles';

import PurchaseSuccess from '~/assets/purchase-confirmation.svg';

export default function Success() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <PurchaseSuccess height={180} width={180} />
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          marginTop: 30,
          marginBottom: 5,
          color: '#3A3A3A',
        }}
      >
        Parabéns!
      </Text>
      <View
        style={{
          marginTop: 10,
          height: 70,
          width: 300,
        }}
      >
        <Text
          numberOfLines={2}
          style={{
            fontSize: 16,
            color: '#486473',
            textAlign: 'center',
          }}
        >
          Seu pedido está em processo.
        </Text>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 16,
            color: '#486473',
            textAlign: 'center',
          }}
        >
          Pode verificar as atualizações por email.
        </Text>
      </View>
    </View>
  );
}
