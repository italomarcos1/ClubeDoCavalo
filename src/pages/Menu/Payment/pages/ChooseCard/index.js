import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// import { Container } from './styles';
import { Container, Item, Option } from '../../styles';

export default function ChooseCard({ navigation }) {
  return (
    <Container>
      <Item onPress={() => navigation.goBack()}>
        <Icon name="credit-card" size={25} color="#2C71B2" />
        <View
          style={{ flex: 1, alignItems: 'flex-start', paddingHorizontal: 10 }}
        >
          <Option>5555 5555 5555 5555</Option>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="x-circle" size={25} color="#A4A4AC" />
        </TouchableOpacity>
      </Item>
      <Item onPress={() => navigation.goBack()}>
        <Icon name="credit-card" color="#2C71B2" size={25} />
        <View
          style={{ flex: 1, alignItems: 'flex-start', paddingHorizontal: 10 }}
        >
          <Option>5555 5555 5555 5555</Option>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="x-circle" size={25} color="#A4A4AC" />
        </TouchableOpacity>
      </Item>
      <Item onPress={() => navigation.navigate('AddCard')}>
        <View
          style={{ flex: 1, alignItems: 'flex-start', paddingHorizontal: 10 }}
        >
          <Text style={{ fontSize: 16, color: '#12b811' }}>
            Adicionar cartão de crédito
          </Text>
        </View>
      </Item>
    </Container>
  );
}
