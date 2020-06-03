import React, { useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Address,
  AddressInfo,
  AddressInfoField,
  AddNewAddressButton,
  SideContainer,
} from './styles';

import { RadioButtonBackground, Selected } from '../Gender/styles';

Icon.loadFont();

export default function Shipping({ navigation }) {
  const [selectedAddress, setSelectedAddress] = useState('Casa');

  const [addresses, setAddresses] = useState([]);

  const handleDeleteAddress = useCallback(
    id => {
      if (addresses.length === 1) {
        setAddresses([]);
      } else {
        setAddresses(addresses.filter(address => address.id !== id));
      }
    },
    [addresses]
  );

  useEffect(() => {
    setAddresses([
      {
        id: 1,
        name: 'Casa',
        cep: '95880-000',
        number: '470',
        street: 'Rua São Pedro',
        complement: 'Apt. 104',
        city: 'Estrela',
        state: 'RS',
        phone: '(34) 99580-7642',
      },
      {
        id: 2,
        name: 'Trabalho',
        cep: '71680-172',
        number: '43',
        street: 'Rua São Lucas',
        complement: 'Casa 2',
        city: 'Samambaia',
        state: 'DF',
        phone: '(77) 99580-7642',
      },
    ]);
  }, []);
  console.tron.log(addresses);
  return (
    <Container>
      {addresses.map(address => (
        <Address
          key={String(address.id)}
          onPress={() => setSelectedAddress(address.name)}
        >
          <SideContainer>
            <RadioButtonBackground>
              <Selected selected={selectedAddress === address.name} />
            </RadioButtonBackground>
          </SideContainer>
          <AddressInfo>
            <Text style={{ fontWeight: 'bold' }}>{address.name}</Text>
            <AddressInfoField>{`${address.street} ${address.number}`}</AddressInfoField>
            <AddressInfoField>
              {`${address.cep} ${address.city} - ${address.state}`}
            </AddressInfoField>
            <AddressInfoField>{address.complement}</AddressInfoField>
            <AddressInfoField>{address.phone}</AddressInfoField>
          </AddressInfo>
          <SideContainer>
            <TouchableOpacity onPress={() => handleDeleteAddress(address.id)}>
              <Icon
                name="trash-2"
                color="#404040"
                size={18}
                style={{ marginBottom: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditAddress', { address })}
            >
              <Icon name="edit-2" color="#404040" size={18} />
            </TouchableOpacity>
          </SideContainer>
        </Address>
      ))}
      <AddNewAddressButton onPress={() => navigation.navigate('AddNewAddress')}>
        {addresses !== [] ? (
          <Icon name="plus" color="#9F9F9F" size={60} />
        ) : (
          <Text>
            Você ainda não tem endereços adicionados. Clique aqui para
            adicionar.
          </Text>
        )}
      </AddNewAddressButton>
    </Container>
  );
}

Shipping.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
