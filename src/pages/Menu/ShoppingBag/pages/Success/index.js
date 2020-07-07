import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Subtitle,
  Congratulations,
  SubtitleContainer,
} from './styles';

import Header from '~/components/HeaderMenu';

import PurchaseSuccess from '~/assets/purchase-confirmation.svg';

export default function Success() {
  const navigation = useNavigation();

  const success = () => {
    navigation.reset({
      index: 0,
      key: null,
      routes: [{ name: 'Home' }],
    });
  };

  return (
    <>
      <Header custom title="Voltar para página inicial" close={success} />

      <Container>
        <PurchaseSuccess height={180} width={180} />
        <Congratulations>Parabéns!</Congratulations>
        <SubtitleContainer>
          <Subtitle>Seu pedido está em processo.</Subtitle>
          <Subtitle>Pode verificar as atualizações por email.</Subtitle>
        </SubtitleContainer>
      </Container>
    </>
  );
}
