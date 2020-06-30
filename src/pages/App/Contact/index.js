import React, { useCallback } from 'react';
import { Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import Header from '~/components/Header';

import { Container, ContactUsText, Button, ButtonText } from './styles';

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
        <ContactUsText>Contate-nos</ContactUsText>

        <Button onPress={sendWhatsappMessage}>
          <WhatsApp width={30} height={30} />
          <ButtonText numberOfLines={2}>
            Enviar mensagem por WhatsApp
          </ButtonText>
        </Button>
        <Button
          onPress={() => Linking.openURL('tel:6141418989')}
          style={{
            marginTop: 15,
          }}
        >
          <Icon name="phone" size={25} color="#333" />
          <ButtonText
            numberOfLines={2}
            style={{
              marginLeft: 20,
              fontSize: 16,
            }}
          >
            Ligue para nós
          </ButtonText>
        </Button>
      </Container>
    </>
  );
}

Contact.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
