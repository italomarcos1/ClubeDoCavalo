import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import Account from './index';

import Phone from './pages/Phone';
import VerifyPhone from './pages/Phone/Verify';

import Mail from './pages/Mail';

import Gender from './pages/Gender';
import Pass from './pages/Pass';
import Shipping from './pages/Shipping';

import Header from '~/components/HeaderMenu';

// import { Container } from './styles';

Icon.loadFont();

export default function Routes() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Account"
      screenOptions={({ navigation }) => ({
        header: () => <Header title="Editar conta" close={() => {}} />,
      })}
    >
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen
        name="Phone"
        component={Phone}
        title="Celular"
        options={({ navigation }) => ({
          header: () => (
            <Header title="Celular" close={() => navigation.goBack()} />
          ),
        })}
      />
      <Stack.Screen
        name="VerifyPhone"
        component={VerifyPhone}
        options={({ navigation }) => ({
          header: () => (
            <Header
              title="Verificar Celular"
              close={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Mail"
        component={Mail}
        options={({ navigation }) => ({
          header: () => (
            <Header title="Verificar email" close={() => navigation.goBack()} />
          ),
        })}
      />
      <Stack.Screen
        name="Gender"
        component={Gender}
        options={({ navigation }) => ({
          header: () => (
            <Header title="Sexo" close={() => navigation.goBack()} />
          ),
        })}
      />
      <Stack.Screen
        name="Pass"
        component={Pass}
        options={({ navigation }) => ({
          header: () => (
            <Header title="Alterar senha" close={() => navigation.goBack()} />
          ),
        })}
      />
      <Stack.Screen
        name="Shipping"
        component={Shipping}
        options={({ navigation }) => ({
          header: () => (
            <Header
              title="Endereço de entrega"
              close={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
