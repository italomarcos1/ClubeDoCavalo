import React, { useState } from 'react';
import { Modal } from 'react-native';

import { Container, Item, ItemText } from './styles';

import Account from '../Account';
import Help from '../Help';
import Payment from '../Payment';
import Orders from '../Orders';
import ShoppingBag from '../ShoppingBag';

export default function Main() {
  const [accountOpen, setAccountOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [ordersOpen, setOrdersOpen] = useState(false);
  const [shoppingBagOpen, setShoppingBagOpen] = useState(false);

  return (
    <Container>
      <Item onPress={() => setAccountOpen(true)}>
        <ItemText>Ver conta</ItemText>
        <Modal
          visible={accountOpen}
          onRequestClose={() => setAccountOpen(false)}
        >
          <Account close={() => setAccountOpen(false)} />
        </Modal>
      </Item>
      <Item onPress={() => setPaymentOpen(true)}>
        <ItemText>Pagamento</ItemText>
        <Modal
          visible={paymentOpen}
          onRequestClose={() => setPaymentOpen(false)}
        >
          <Payment close={() => setPaymentOpen(false)} />
        </Modal>
      </Item>
      <Item onPress={() => setOrdersOpen(true)}>
        <ItemText>Ver compras</ItemText>
        <Modal visible={ordersOpen} onRequestClose={() => setOrdersOpen(false)}>
          <Orders close={() => setOrdersOpen(false)} />
        </Modal>
      </Item>
      <Item onPress={() => {}}>
        <ItemText>Carrinho</ItemText>
        <Modal
          visible={shoppingBagOpen}
          onRequestClose={() => setShoppingBagOpen(false)}
        >
          <ShoppingBag close={() => setShoppingBagOpen(false)} />
        </Modal>
      </Item>
      <Item onPress={() => {}}>
        <ItemText>Ajuda</ItemText>
        <Modal visible={helpOpen} onRequestClose={() => setHelpOpen(false)}>
          <Help close={() => setHelpOpen(false)} />
        </Modal>
      </Item>
    </Container>
  );
}
