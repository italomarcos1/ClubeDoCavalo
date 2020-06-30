import React from 'react';
import {
  Container,
  Subtitle,
  Congratulations,
  SubtitleContainer,
} from './styles';

import PurchaseSuccess from '~/assets/purchase-confirmation.svg';

export default function Success() {
  return (
    <Container>
      <PurchaseSuccess height={180} width={180} />
      <Congratulations>Parabéns!</Congratulations>
      <SubtitleContainer>
        <Subtitle>Seu pedido está em processo.</Subtitle>
        <Subtitle>Pode verificar as atualizações por email.</Subtitle>
      </SubtitleContainer>
    </Container>
  );
}
