import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function Help() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333',
      }}
    >
      <Text style={{ fontSize: 28, color: '#eee' }}>Help</Text>
    </View>
  );
}
