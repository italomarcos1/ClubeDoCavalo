import React from 'react';
import { View, Text } from 'react-native';
// import { Container } from './styles';

import Header from '~/components/HeaderMenu';

export default function Details() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F2F3F4',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 20, color: '#333' }}>Details</Text>
    </View>
  );
}
