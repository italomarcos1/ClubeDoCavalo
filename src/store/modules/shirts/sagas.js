import { all, takeLatest, put } from 'redux-saga/effects';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

import tShirtFront from '~/assets/models/new/t-shirt-front.png';

import tShirtAsh from '~assets/models/new/tshirt1.png';
import tShirtBlack from '~assets/models/new/tshirt2.png';
import tShirtBlue from '~assets/models/new/tshirt3.png';
import tShirtGreen from '~assets/models/new/tshirt4.png';
import tShirtRed from '~assets/models/new/tshirt5.png';

import { uploadShirts } from './actions';

export function* upload() {
  let tFronts = [];

  const tFront = resolveAssetSource(tShirtFront);

  tFronts.push(resolveAssetSource(tFront));
  tFronts.push(resolveAssetSource(tShirtBlack));
  tFronts.push(resolveAssetSource(tShirtAsh));
  tFronts.push(resolveAssetSource(tShirtBlue));
  tFronts.push(resolveAssetSource(tShirtGreen));
  tFronts.push(resolveAssetSource(tShirtRed));

  const tshirt = {
    front: tFront.uri,
  };

  yield put(uploadShirts(tshirt, tFronts));
}

export function* popShirts({ payload }) {
  if (!payload) return;

  const { tshirt, tFronts } = payload.shirts;

  yield put(uploadShirts(tshirt, tFronts));
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', upload),
  takeLatest('persist/PERSIST', popShirts),
]);
