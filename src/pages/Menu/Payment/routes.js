import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import Payment from './index';

import AddCard from './pages/AddCard';
import ChooseCard from './pages/ChooseCard';

import Header from '~/components/HeaderMenu';

// import { Container } from './styles';

Icon.loadFont();

export default function Routes() {
  const Stack = createStackNavigator(); // abrir como um modal talvez, já retorna pro drawer
  return (
    <Stack.Navigator
      initialRouteName="Payment"
      screenOptions={({ navigation }) => ({
        header: () => <Header title="Pagamento" close={() => {}} />,
      })}
    >
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen
        name="AddCard"
        component={AddCard}
        options={({ navigation }) => ({
          header: () => (
            <Header
              title="Adicionar cartão"
              close={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="ChooseCard"
        component={ChooseCard}
        options={({ navigation }) => ({
          header: () => (
            <Header title="Escolher cartão" close={() => navigation.goBack()} />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
