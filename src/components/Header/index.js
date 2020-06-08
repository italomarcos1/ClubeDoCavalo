import React from 'react';

import MenuIcon from '~/assets/ico-menu.svg';
import SearchIcon from '~/assets/ico-search.svg';
import BagIcon from '~/assets/ico-bag.svg';

import {
  Container,
  LeftBlock,
  MiddleBlock,
  Side,
  SideName,
  Price,
  HeaderButton,
  RightBlock,
  HeaderTitle,
} from './styles';

export default function Header({ navigation, title = null }) {
  return (
    <Container>
      <LeftBlock>
        <HeaderButton
          onPress={() => navigation.openDrawer()}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <MenuIcon height={40} width={40} />
        </HeaderButton>
      </LeftBlock>

      <MiddleBlock>
        {title === null ? (
          <>
            <Side>
              <SideName>Frente</SideName>
              <Price>R$ 39,90</Price>
            </Side>

            <Side>
              <SideName>Verso</SideName>
              <Price>R$ 9,90</Price>
            </Side>
          </>
        ) : (
          <HeaderTitle>{title}</HeaderTitle>
        )}
      </MiddleBlock>

      <RightBlock>
        <HeaderButton
          onPress={() => {}}
          hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        >
          <SearchIcon height={50} width={50} />
        </HeaderButton>

        <HeaderButton
          onPress={() => {
            navigation.navigate('Bag');
          }}
          hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        >
          <BagIcon height={50} width={50} />
        </HeaderButton>
      </RightBlock>
    </Container>
  );
}
