import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from '~/routes';
import CompleteRegisterForm from '~/pages/Auth/SignUp/';

export default function App() {
  const signed = useSelector(state => state.auth.signed);
  const newUser = useSelector(state => state.auth.newUser);

  if (newUser) return <CompleteRegisterForm />;
  return createRouter(signed);
}
