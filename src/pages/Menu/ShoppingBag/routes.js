import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';

import ShoppingBag from './index';
import Success from './pages/Success';
import Form from './pages/Form';

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="ShoppingBag" headerMode="none">
      <Stack.Screen name="ShoppingBag" component={ShoppingBag} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="Register" component={Form} />
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
