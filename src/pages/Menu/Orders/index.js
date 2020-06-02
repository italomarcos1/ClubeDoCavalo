import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Header from '~/components/Header';

import { Container, Content, ContentContainer, Item, Details } from './styles';

export default function Orders({ close, navigation }) {
  const encomenda = { id: 1, number: '#00127' };
  const [height, setHeight] = useState(200);
  return (
    <>
      <Container>
        <Item
          style={{ height }}
          onLayout={({ nativeEvent: { layout } }) => {
            console.tron.log(layout.width);
            setHeight(layout.width);
          }}
        >
          <View
            style={{
              height: 40,
              alignItems: 'flex-start',
              justifyContent: 'center',
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              paddingHorizontal: 10,
            }}
          >
            <ContentContainer>
              <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                Encomenda #00127
              </Text>
            </ContentContainer>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'space-around',
              paddingHorizontal: 10,
              paddingBottom: 20,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
            }}
          >
            <ContentContainer>
              <Content style={{ fontWeight: 'bold' }}>Produtos</Content>
              <Content style={{ fontWeight: 'bold' }}>R$ 39,90</Content>
            </ContentContainer>
            <ContentContainer>
              <Content style={{ fontWeight: 'bold' }}>Frete</Content>
              <Content style={{ fontWeight: 'bold' }}>R$ 18,20</Content>
            </ContentContainer>
            <ContentContainer>
              <Content style={{ fontWeight: 'bold' }}>
                Cupom de desconto
              </Content>
              <Content style={{ fontWeight: 'bold' }}>---</Content>
            </ContentContainer>
            <ContentContainer>
              <Content style={{ fontWeight: 'bold' }}>
                Total de encomenda
              </Content>

              <Content style={{ fontWeight: 'bold' }}>R$ 58,10</Content>
            </ContentContainer>
          </View>
          <View
            style={{
              height: 65,
              paddingTop: 10,
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                flex: 1,
                borderRightColor: '#ccc',
                borderRightWidth: 0.5,
                paddingRight: 10,
                alignItems: 'flex-start',
              }}
            >
              <Content>Entrega da Encomenda</Content>
              <Content style={{ color: '#F06D85' }}>EM TRÂNSITO</Content>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'flex-end',
                borderLeftColor: '#ccc',
                borderLeftWidth: 0.5,
                paddingLeft: 10,
              }}
            >
              <Content style={{ textAlign: 'right' }}>Entrega Estimada</Content>
              <Content style={{ textAlign: 'right', color: '#F06D85' }}>
                20 de Julho de 2020
              </Content>
            </View>
          </View>
          <Details
            onPress={() => navigation.navigate('Details', { encomenda })}
          >
            <Text>Detalhes</Text>
          </Details>
        </Item>
      </Container>
    </>
  );
}
