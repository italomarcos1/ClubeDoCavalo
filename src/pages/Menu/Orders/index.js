import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  NoPurchases,
  NoPurchasesContainer,
  TransactionsList,
} from './styles';

import { sandbox } from '~/services/api';

import OrderInfo from './components/OrderInfo';

import Header from '~/components/HeaderMenu';

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noTransactions, setNoTransactions] = useState(false);

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
    navigation.openDrawer();
  };

  useEffect(() => {
    async function loadTransactions() {
      try {
        setLoading(true);

        const { data } = await sandbox.get('clients/transactions');

        if (data.meta.message === 'Não há compras recentes.') {
          setNoTransactions(true);
        } else {
          setTransactions(data.data);
        }
        setLoading(false);
      } catch (err) {
        setNoTransactions(true);
        setLoading(false);
      }
    }
    loadTransactions();
  }, []);

  return (
    <>
      <Header title="Minhas compras" close={goBack} />
      <Container style={{ padding: 10, paddingBottom: 40 }}>
        {loading && (
          <NoPurchasesContainer>
            <ActivityIndicator size="large" color="#333" />
          </NoPurchasesContainer>
        )}
        {!loading && !noTransactions && (
          <TransactionsList
            data={transactions}
            keyExtractor={transaction => String(transaction.id)}
            renderItem={({ item: transaction }) => (
              <OrderInfo transaction={transaction} />
            )}
          />
        )}
        {!loading && noTransactions && (
          <NoPurchasesContainer>
            <NoPurchases>Você ainda não efetuou nenhuma compra.</NoPurchases>
          </NoPurchasesContainer>
        )}
      </Container>
    </>
  );
}
