import React, { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Item,
  CardNumber,
  CardNumberContainer,
  AddCard,
  AddCardText,
} from './styles';

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

  const deleteCard = useCallback(
    id => {
      if (cards.length === 1) {
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
          <CardNumberContainer>
            <CardNumber>{card.number}</CardNumber>
          </CardNumberContainer>
          <TouchableOpacity onPress={() => deleteCard(card.id)}>
            <Icon name="x-circle" size={18} color="#A4A4AC" />
          </TouchableOpacity>
        </Item>
      ))}
      <Item onPress={() => navigation.navigate('AddCard')}>
        <AddCard>
          <AddCardText>Adicionar cartão de crédito</AddCardText>
        </AddCard>
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
