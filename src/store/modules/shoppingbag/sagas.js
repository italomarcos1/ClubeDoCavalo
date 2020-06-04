import { all, call, put, takeLatest } from 'redux-saga/effects';

function* addToCart({ payload }) {
  console.tron.log('addtocart');
}

export default all(['@shoppingbag/ADD_TO_SHOPPING_BAG', addToCart]);
