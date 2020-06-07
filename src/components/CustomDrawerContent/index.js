import React from 'react';
import { DrawerItemList } from '@react-navigation/drawer';

import LogoImage from '~/assets/logo.svg';
import SealImage from '~/assets/seal.svg';

import { Container, Header, Footer, DrawerContent } from './styles';

export default function CustomDrawerContent(props) {
  return (
    <Container>
      <DrawerContent {...props}>
        <Header>
          <LogoImage width={230} height={50} />
        </Header>

        <DrawerItemList {...props} />

        <Footer>
          <SealImage height={200} />
        </Footer>
      </DrawerContent>
    </Container>
  );
}
