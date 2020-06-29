import { call, put, all, takeLatest } from 'redux-saga/effects';
import Toast from 'react-native-tiny-toast';

import { api, sandbox } from '~/services/api';

import {
  signInSuccess,
  signFailure,
  completingRegistering,
} from '~/store/modules/auth/actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const response = yield call(api.post, 'auth/login', { email, password });

    const { token, user } = response.data.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    sandbox.defaults.headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc2FuZGJveC5hbWZydXRhcy5wdFwvYXBpLXYyXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU5MzQzOTIwMywibmJmIjoxNTkzNDM5MjAzLCJqdGkiOiJ6eWQxOW85aHhpaUtKWGFhIiwic3ViIjo0LCJwcnYiOiI0NmVkZDEwOTI5NGZjMGQ4YzAxOTJmM2MzZjE4NWM0OGIwMzZmM2E3In0.uxHroSwId7J7lP7diqQ4e0lRYCgLmfTi61n1HbIY89Y`;

    if (user.name === '' && user.last_name === '') {
      yield put(completingRegistering(token, user)); // completar cadastro
    } else yield put(signInSuccess(token, user));
  } catch (error) {
    Toast.show('Houve um erro no login, verifique seus dados.');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', { name, email, password });
    Toast.show('Seu cadastro foi realizado com sucesso, faça o login.');
  } catch (error) {
    Toast.show('Houve um erro no login, verifique seus dados.');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
