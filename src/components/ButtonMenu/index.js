import React from 'react';

import { CustomButton, ButtonText } from './styles';

export default function ButtonMenu({ disabled, style, children, ...rest }) {
  return (
    <CustomButton disabled={disabled} style={style} {...rest}>
      <ButtonText>{children}</ButtonText>
    </CustomButton>
  );
}
