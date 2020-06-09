import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { api } from '~/services/api';

import AddIcon from '~/assets/ico-add-address.svg';
import EditAddressIcon from '~/assets/ico-edit-address.svg';
import RemoveAddressIcon from '~/assets/ico-remove-address.svg';

import {
  Container,
  Address,
  AddressInfo,
  AddressInfoField,
  AddNewAddressButton,
  SideContainer,
} from './styles';

import { RadioButtonBackground, Selected } from '../Gender/styles';

export default function Shipping({ navigation }) {
  const user = useSelector(state => state.user.profile);

  // baseado nisso, puxa a string e marca o campo
  // ao selecionar outro, dá o update na rota de update dados do usuário
  // dá update no reducer também

  const [selectedAddress, setSelectedAddress] = useState('Casa');

  const [loading, setLoading] = useState(false);
  const [noAddresses, setNoAddresses] = useState(false);

  const [addresses, setAddresses] = useState([]);

  const handleDeleteAddress = useCallback(
    async id => {
      await api.delete(`addresses/${id}`);
      if (addresses.length === 1) {
        setAddresses([]);
      } else {
        const filtered = addresses.filter(address => address.id !== id);
        setAddresses(filtered);
      }
    },
    [addresses]
  );

  useEffect(() => {
    async function loadAdresses() {
      try {
        setLoading(true);
        const { data } = await api.get('addresses');
        console.tron.log(data.meta.message);
        if (data.meta.message !== 'Você ainda não tem endereços cadastrados.') {
          setAddresses(data.data);
          setNoAddresses(false);
        } else {
          setNoAddresses(true);
        }

        console.tron.log('sucesso');
        console.tron.log(addresses);
        setLoading(false);
      } catch (err) {
        setLoading(false);

        console.tron.log('fail');
      }
    }

    loadAdresses();
  }, [addresses]);

  return (
    <Container
      contentContainerStyle={{
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 20,
      }}
    >
      {loading && (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator size="large" color="#333" />
        </View>
      )}
      {!loading &&
        !noAddresses &&
        addresses.map(address => (
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
              <AddressInfoField>{`${address.address} ${address.number}`}</AddressInfoField>
              <AddressInfoField>
                {`${address.zipcode} ${address.city} - ${address.state}`}
              </AddressInfoField>
              <AddressInfoField>{address.complement}</AddressInfoField>
              <AddressInfoField>{user.cellphone}</AddressInfoField>
            </AddressInfo>

            <SideContainer>
              <TouchableOpacity
                onPress={() => handleDeleteAddress(address.id)}
                hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
              >
                <RemoveAddressIcon
                  height={20}
                  width={25}
                  style={{ marginBottom: 30 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditAddress', { address })}
                hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
              >
                <EditAddressIcon height={20} width={25} />
              </TouchableOpacity>
            </SideContainer>
          </Address>
        ))}
      {!loading && noAddresses && (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: '#333',
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            Você ainda não tem endereços cadastrados.
          </Text>
        </View>
      )}
      <AddNewAddressButton onPress={() => navigation.navigate('AddNewAddress')}>
        {addresses !== [] ? (
          <AddIcon height={60} width={60} />
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
