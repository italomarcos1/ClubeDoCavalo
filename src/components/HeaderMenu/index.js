import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';

import { Container, Title } from './styles';

Icon.loadFont();

export default function Header({ title, close }) {
  return (
    <Container>
      <TouchableOpacity
        onPress={close}
        style={{ width: 30, height: 30, borderRadius: 15, marginRight: 15 }}
      >
        <Icon name="chevron-left" color="#fff" size={30} />
      </TouchableOpacity>
      <Title>{title}</Title>
    </Container>
  );
}
