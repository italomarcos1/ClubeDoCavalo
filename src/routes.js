import React from 'react';
import { StatusBar } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomDrawerContent from '~/components/CustomDrawerContent';

import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';
import SignOut from '~/pages/Auth/SignOut';
import SendMail from '~/pages/Auth/ForgotPassword/pages/SendMail';
import VerifyCode from '~/pages/Auth/ForgotPassword/pages/VerifyCode';

import Design from '~/pages/App/Design';
import Contact from '~/pages/App/Contact';

import Account from '~/pages/Menu/Account/routes';
import Payment from '~/pages/Menu/Payment/routes';
import Orders from '~/pages/Menu/Orders/routes';
import ShoppingBag from '~/pages/Menu/ShoppingBag/routes';

import AccountIcon from '~/assets/ico-menu-account.svg';
import PaymentIcon from '~/assets/ico-menu-payment.svg';
import BagIcon from '~/assets/ico-menu-bag.svg';
import OrdersIcon from '~/assets/ico-menu-orders.svg';
import HelpIcon from '~/assets/ico-menu-help.svg';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function createIcon({ color, size }, name) {
  return <Icon name={name} color={color} size={size} />;
}

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5BAE59" />
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={SendMail} />
        <Stack.Screen name="Verify" component={VerifyCode} />
      </Stack.Navigator>
    </>
  ) : (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Drawer.Navigator
        drawerContent={CustomDrawerContent}
        drawerType="front"
        drawerContentOptions={{
          inactiveTintColor: '#fff',
          activeTintColor: '#fff',
          activeBackgroundColor: 'transparent',
          itemStyle: {
            borderRadius: 0,
            marginHorizontal: 30,
            width: '100%',
          },
          labelStyle: {
            marginLeft: -20,
            fontSize: 18,
          },
        }}
        unmountOnBlur={true}
        backBehavior="initialRoute"
        initialRouteName="Home"
      >
        <Drawer.Screen
          name="Home"
          component={Design}
          options={{
            title: 'Home',
            drawerIcon: ({ color, size }) =>
              createIcon({ color, size }, 'home'),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Account}
          options={{
            title: 'Ver conta',
            drawerIcon: () => <AccountIcon height={35} width={35} />,
          }}
        />
        <Drawer.Screen
          name="Payment"
          component={Payment}
          options={{
            title: 'Pagamento',
            drawerIcon: () => <PaymentIcon height={35} width={35} />,
          }}
        />
        <Drawer.Screen
          name="Bag"
          component={ShoppingBag}
          options={{
            title: 'Cesta de compra',
            drawerIcon: () => <BagIcon height={35} width={35} />,
          }}
        />
        <Drawer.Screen
          name="Purchases"
          component={Orders}
          options={{
            title: 'Minhas compras',
            drawerIcon: () => <OrdersIcon height={35} width={35} />,
          }}
        />
        <Drawer.Screen
          name="Help"
          component={Contact}
          options={{
            title: 'Ajuda',
            drawerIcon: () => <HelpIcon height={35} width={35} />,
          }}
        />
        <Drawer.Screen
          name="Logout"
          component={SignOut}
          options={{
            title: 'Sair',
            drawerIcon: ({ color, size }) =>
              createIcon({ color, size }, 'exit-to-app'),
          }}
        />
      </Drawer.Navigator>
    </>
  );
}
