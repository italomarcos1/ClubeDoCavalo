import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

import Payment from './index';
import AddCard from './pages/AddCard';
import ChooseCard from './pages/ChooseCard';

import Header from '~/components/HeaderMenu';

Icon.loadFont();

export default function Routes({ navigation }) {
  const Stack = createStackNavigator(); // abrir como um modal talvez, já retorna pro drawer

  const exit = () => {
    navigation.goBack();
    navigation.openDrawer();
  };

  return (
    <Stack.Navigator
      initialRouteName="Payment"
      screenOptions={({ navigation }) => ({
        header: () => <Header title="Pagamento" close={exit} />,
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

Routes.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    openDrawer: PropTypes.func,
  }).isRequired,
};
