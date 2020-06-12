import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from '~/routes';
import CompleteRegisterForm from '~/pages/Auth/SignUp/Form';

export default function App() {
  const signed = useSelector(state => state.auth.signed);
  const newUser = useSelector(state => state.auth.newUser);

  // a ideia eh fazer uma chamda blocante
  // pode sair do app, abrir de novo, etc
  // essa tela sempre deve aparecer

  if (newUser) return <CompleteRegisterForm />;
  return createRouter(signed);
}
