import React from 'react';

import { CustomButton, ButtonText } from './styles';

export default function ButtonMenu({ style, children, ...rest }) {
  return (
    <CustomButton style={style}>
      <ButtonText {...rest}>{children}</ButtonText>
    </CustomButton>
  );
}
