import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

import {
  Container,
  Amount,
  CheckoutContainer,
  ShirtContainer,
  Detail,
  FareDetails,
  FinalPrice,
  FinishButton,
  Price,
  IconContainer,
} from './styles';
import {
  Item,
  Shirt,
  ShirtImage,
  ShirtInfo,
  Options,
} from '../Orders/pages/Details/styles';

// transformar o detail item em um compon

export default function ShoppingBag({ navigation }) {
  const products = useSelector(state => state.shoppingbag.products);

  return (
    <>
      <Container>
        {products === [] ? (
          <Text style={{ alignSelf: 'center', fontSize: 20, color: '#f0f' }}>
            Você não tem produtos no carrinho ainda.
          </Text>
        ) : (
          products.map(product => (
            <ShirtContainer key={product.id}>
              <Shirt>
                <Item>
                  <ShirtImage source={{ uri: product.print }} />
                  <ShirtInfo style={{ height: 100 }}>
                    <Text style={{ fontWeight: 'bold' }}>
                      {`T-Shirt  ${product.gender} ${product.size} ${product.color}`}
                    </Text>
                    <Text>{`Estampa: ${product.name}`}</Text>
                    <Text>{`Quantidade: ${product.amount}`}</Text>
                    <Text>{`${product.currency} ${product.price}`}</Text>
                  </ShirtInfo>
                </Item>
                <Options>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'baseline',
                      justifyContent: 'space-around',
                      paddingHorizontal: 10,
                      borderRightColor: '#808080',
                      borderRightWidth: 1,
                      marginRight: 10,
                      flex: 1,
                      paddingRight: 10,
                    }}
                  >
                    <Text style={{ fontWeight: 'bold' }}>Excluir</Text>
                    <TouchableOpacity onPress={() => {}}>
                      <Icon name="x" size={15} color="#808080" />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'baseline',
                      borderRightColor: '#808080',
                      justifyContent: 'space-between',
                      borderRightWidth: 1,
                      paddingHorizontal: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {}}
                      style={{
                        borderColor: '#808080',
                        borderWidth: 1,
                        borderRightWidth: 0,
                      }}
                    >
                      <Icon name="minus" size={20} color="#808080" />
                    </TouchableOpacity>
                    <View
                      style={{
                        borderColor: '#808080',
                        borderWidth: 1,
                        flex: 1,
                        alignItems: 'center',
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 16,
                        }}
                      >
                        {product.amount}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={{
                        borderColor: '#808080',
                        borderWidth: 1,
                        borderLeftWidth: 0,
                      }}
                    >
                      <Icon name="plus" size={20} color="#808080" />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                    }}
                  >
                    <Price style={{ fontSize: 18 }}>R$ {product.price}</Price>
                  </View>
                </Options>
              </Shirt>

              <Detail>
                <IconContainer>
                  <Icon name="truck" size={25} color="#333" />
                </IconContainer>
                <FareDetails>
                  <View>
                    <Text style={{ fontSize: 14 }}>Frete</Text>
                    <Text style={{ fontSize: 16 }}>95880-000</Text>
                  </View>
                </FareDetails>

                <Price>R$ 18,20</Price>
              </Detail>

              <Detail>
                <IconContainer>
                  <Icon name="truck" size={25} color="#333" />
                </IconContainer>
                <FareDetails>
                  <View>
                    <Text style={{ fontSize: 14 }}>10%</Text>
                    <Text style={{ fontSize: 16 }}>Desconto</Text>
                  </View>
                </FareDetails>
                <IconContainer>
                  <Icon name="gift" size={25} color="#f53030" />
                </IconContainer>
              </Detail>
            </ShirtContainer>
          ))
        )}

        <CheckoutContainer>
          <Amount>
            <Text style={{ color: '#000', fontSize: 22, fontWeight: 'bold' }}>
              Total
            </Text>
            <FinalPrice>
              <Text style={{ color: '#fff', fontSize: 20 }}>R$ 58.10</Text>
            </FinalPrice>
          </Amount>
          <FinishButton onPress={() => navigation.navigate('Success')}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
              Finalizar a compra
            </Text>
          </FinishButton>
        </CheckoutContainer>
      </Container>
    </>
  );
}

ShoppingBag.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
