import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// import { Container } from './styles';

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
      <Icon name="check-circle" size={60} color="#3A3A3A" />
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          marginVertical: 10,
          color: '#3A3A3A',
        }}
      >
        Parabéns!
      </Text>
      <Text
        numberOfLines={2}
        style={{
          fontWeight: 'bold',
          marginTop: 10,
          width: 260,
          height: 70,
          fontSize: 16,
          color: '#486473',
          textAlign: 'center',
        }}
      >
        Seu pedido está em processo pode verificar as atualizações por email.
      </Text>
    </View>
  );
}
