import React from 'react';
import { View, Text } from 'react-native';
// import { Container } from './styles';

export default function AddCard() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#7159c1',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 20, fontColor: '#fff' }}>Pass</Text>
    </View>
  );
}
