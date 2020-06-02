import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import Orders from './index';

import Details from './pages/Details';

import Header from '~/components/HeaderMenu';

// import { Container } from './styles';

Icon.loadFont();

export default function Routes() {
  const Stack = createStackNavigator(); // abrir como um modal talvez, já retorna pro drawer
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={({ navigation }) => ({
        header: () => <Header title="Minhas compras" close={() => {}} />,
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
  );
}
