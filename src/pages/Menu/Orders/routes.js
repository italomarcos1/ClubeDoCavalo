import React from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import Orders from './index';

import Details from './pages/Details';

import Header from '~/components/HeaderMenu';

// import { Container } from './styles';

Icon.loadFont();

export default function Routes({ navigation }) {
  const Stack = createStackNavigator(); // abrir como um modal talvez, já retorna pro drawer

  const exit = () => {
    navigation.goBack();
    navigation.openDrawer();
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5BAE59" />
      <Stack.Navigator
        resetOnBlur={true}
        initialRouteName="Orders"
        screenOptions={({ navigation }) => ({
          header: () => <Header title="Minhas compras" close={exit} />,
        })}
      >
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ navigation, route }) => ({
            header: () => (
              <Header
                title={`Encomenda ${route.params.encomenda.number}`}
                close={() => navigation.goBack()}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </>
  );
}

Routes.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    openDrawer: PropTypes.func,
  }).isRequired,
};
