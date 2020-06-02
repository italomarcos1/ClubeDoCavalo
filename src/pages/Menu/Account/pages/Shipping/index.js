import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Container, Data } from './styles';

import { RadioButtonBackground, Selected } from '../Gender/styles';

Icon.loadFont();

export default function Shipping({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F2F3F4',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <Container onPress={() => {}}>
        <View
          style={{
            height: 130,
            width: 19,
            paddingVertical: 5,
          }}
        >
          <RadioButtonBackground>
            <Selected selected={true} />
          </RadioButtonBackground>
        </View>
        <View
          style={{
            flex: 1,
            height: 120,
            paddingHorizontal: 10,
            alignSelf: 'flex-start',
            justifyContent: 'space-around',
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>Casa</Text>
          <Text style={{ color: '#9F9F9F' }}>Rua São Pedro 470</Text>
          <Text style={{ color: '#9F9F9F' }}>95880-000 Estrela RS</Text>
          <Text style={{ color: '#9F9F9F' }}>Mobile: (34) 99580-7642</Text>
        </View>
        <View
          style={{
            height: 130,
            width: 19,
            paddingVertical: 5,
          }}
        >
          <Icon
            name="trash-2"
            color="#404040"
            size={18}
            style={{ marginBottom: 20 }}
          />
          <Icon name="edit-2" color="#404040" size={18} />
        </View>
      </Container>
      <Container
        onPress={() => navigation.navigate('AddNewAddress')}
        style={{
          marginTop: 10,
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: '#ddd',
        }}
      >
        <Icon name="plus" color="#9F9F9F" size={60} />
      </Container>
    </View>
  );
}
