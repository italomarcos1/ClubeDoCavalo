import React from 'react';
import { View, Text } from 'react-native';
// import { Container } from './styles';

export default function Shipping() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1159c1',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 20, fontColor: '#fff' }}>Shipping</Text>
    </View>
  );
}
