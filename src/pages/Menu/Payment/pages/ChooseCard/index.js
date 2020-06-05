import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-tiny-toast';
// import { Container } from './styles';
import { Container, Item, Option } from '../../styles';

export default function ChooseCard({ navigation }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards([
      { id: 1, number: '5412 1254 1412 5412' },
      { id: 2, number: '4432 9321 1432 4436' },
      { id: 3, number: '9432 1732 4432 3431' },
      { id: 4, number: '2432 1432 9432 7439' },
      { id: 5, number: '8432 6432 2432 4435' },
    ]);
  }, []);

  console.tron.log(cards);

  const deleteCard = useCallback(
    id => {
      if (cards.length === 1) {
        console.tron.log('lel');

        setCards([]);
      } else {
        const filtered = cards.filter(card => card.id !== id);
        setCards(filtered);
      }
    },
    [cards]
  );

  return (
    <Container>
      {cards.map(card => (
        <Item key={card.id} onPress={() => navigation.goBack()}>
          <Icon name="credit-card" size={25} color="#2C71B2" />
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 15,
            }}
          >
            <Option>{card.number}</Option>
          </View>
          <TouchableOpacity onPress={() => deleteCard(card.id)}>
            <Icon name="x-circle" size={18} color="#A4A4AC" />
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
