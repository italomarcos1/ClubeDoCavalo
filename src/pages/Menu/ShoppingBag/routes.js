import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';
import Header from '~/components/HeaderMenu';

import ShoppingBag from './index';
import Success from './pages/Success';

export default function Routes({ navigation }) {
  const Stack = createStackNavigator();

  const exit = () => {
    navigation.goBack();
    navigation.openDrawer();
  };

  const success = () => {
    navigation.reset({
      index: 0,
      key: null,
      routes: [{ name: 'Design' }],
    });
  };

  return (
    <Stack.Navigator initialRouteName="ShoppingBag">
      <Stack.Screen
        name="ShoppingBag"
        component={ShoppingBag}
        options={() => ({
          header: () => <Header custom title="Cesto de compras" close={exit} />,
        })}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={() => ({
          header: () => (
            <Header custom title="Voltar para página inicial" close={success} />
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
    reset: PropTypes.func,
  }).isRequired,
};
