import React from 'react';
import { TouchableOpacity, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import { Container, CustomInput } from './styles';

Icon.loadFont();

export default function InputMenu({ clear, style, ...rest }) {
  return (
    <Container style={style}>
      <CustomInput {...rest} />
      <TouchableOpacity
        onPress={() => {
          clear();
          Keyboard.dismiss();
        }}
      >
        <Icon name="x-circle" color="#76797E" size={15} />
      </TouchableOpacity>
    </Container>
  );
}

InputMenu.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object]),
};

InputMenu.defaultProps = {
  style: {},
};
