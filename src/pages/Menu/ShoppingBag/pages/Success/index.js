import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function Success() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7159c1',
      }}
    >
      <Text style={{ fontSize: 28, color: '#eee' }}>Compra realizada!</Text>
    </View>
  );
}
