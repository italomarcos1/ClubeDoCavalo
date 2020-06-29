import React from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import Orders from './index';

import Details from './pages/Details';

Icon.loadFont();

export default function Routes() {
  const Stack = createStackNavigator(); // abrir como um modal talvez, já retorna pro drawer

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5BAE59" />
      <Stack.Navigator
        resetOnBlur={true}
        initialRouteName="Orders"
        headerMode="none"
      >
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </>
  );
}

Routes.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    openDrawer: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
