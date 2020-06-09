import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text } from 'react-native';

import { signOut } from '~/store/modules/auth/actions';

export default function SignOut({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // navigation.navigate('Design');
    navigation.reset({
      index: 0,
      key: null,
      routes: [{ name: 'Home' }],
    });
    dispatch(signOut());
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        style={{
          fontSize: 26,
          color: '#333',
          alignSelf: 'center',
        }}
      >
        Saindo da aplicação...
      </Text>
    </View>
  );
}
