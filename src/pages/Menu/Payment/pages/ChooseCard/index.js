import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-tiny-toast';
// import { Container } from './styles';
import { Container, Item, Option } from '../../styles';

export default function ChooseCard({ navigation }) {
  const [cards, setCards] = useState([
    { id: 1, number: '5412 5412 5412 5412' },
    { id: 2, number: '4432 4432 4432 4432' },
  ]);

  const deleteCard = useCallback(id => {
    if (cards.length === 1)
      Toast.show('Você deve ter no mínimo um cartão de crédito adicionado.');
    else setCards(cards.filter(card => card.id !== id));
  }, []);

  return (
    <Container>
      {cards.map(card => (
        <Item key={card.id} onPress={() => navigation.goBack()}>
          <Icon name="credit-card" size={25} color="#2C71B2" />
          <View
            style={{ flex: 1, alignItems: 'flex-start', paddingHorizontal: 10 }}
          >
            <Option>{card.number}</Option>
          </View>
          <TouchableOpacity onPress={() => deleteCard(card.id)}>
            <Icon name="x-circle" size={25} color="#A4A4AC" />
          </TouchableOpacity>
        </Item>
      ))}
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

ChooseCard.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
