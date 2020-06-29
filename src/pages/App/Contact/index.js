import React, { useCallback } from 'react';
import { Text, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Header from '~/components/Header';

import { Container, PageText } from './styles';

import Logo from '~/assets/seal.svg';
import WhatsApp from '~/assets/ico-menu-whatsapp.svg';

export default function Contact({ navigation }) {
  const sendWhatsappMessage = useCallback(() => {
    Linking.canOpenURL('whatsapp://send?phone=5561992907065').then(found => {
      if (found) {
        return Linking.openURL('whatsapp://send?phone=5561992907065');
      }

      return Linking.openURL(
        'https://api.whatsapp.com/send?phone=5561992907065'
      );
    });
  }, []);

  return (
    <>
      <Header navigation={navigation} title="Ajuda" />
      <Container>
        <Logo width={200} height={200} style={{ alignSelf: 'center' }} />
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            marginTop: 30,
            marginBottom: 25,
            color: '#3A3A3A',
          }}
        >
          Contate-nos
        </Text>

        <TouchableOpacity
          onPress={sendWhatsappMessage}
          style={{
            width: 250,
            height: 50,
            backgroundColor: '#f2f3f4',
            paddingLeft: 20,
            paddingRight: 10,
            paddingVertical: 10,
            borderRadius: 30,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <WhatsApp width={30} height={30} />
          <Text
            numberOfLines={2}
            style={{
              width: 140,
              textAlign: 'center',
              marginLeft: 10,
              fontSize: 15,
            }}
          >
            Enviar mensagem por WhatsApp
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('tel:6141418989')}
          style={{
            width: 250,
            height: 50,

            backgroundColor: '#f2f3f4',
            paddingLeft: 20,
            paddingRight: 10,
            paddingVertical: 10,
            borderRadius: 30,
            marginTop: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Icon name="phone" size={25} color="#333" />
          <Text
            numberOfLines={2}
            style={{
              width: 140,
              textAlign: 'center',
              marginLeft: 20,
              fontSize: 16,
            }}
          >
            Ligue para nós
          </Text>
        </TouchableOpacity>
      </Container>
    </>
  );
}
