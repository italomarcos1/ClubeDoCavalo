import React from 'react';
import Header from '~/components/Header';

import { Container } from './styles';

export default function ShoppingBag({ close }) {
  return (
    <>
      <Header title="Cesto de compras" closePage={close} />
      <Container>ShoppingBag</Container>
    </>
  );
}
