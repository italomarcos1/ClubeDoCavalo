export function addToShoppingBag(product) {
  return {
    type: '@shoppingbag/ADD_TO_SHOPPING_BAG',
    payload: { product },
  };
}

export function removeFromShoppingBag(id) {
  return {
    type: '@shoppingbag/REMOVE_FROM_SHOPPING_BAG',
    payload: { id },
  };
}

export function addAmount(id) {
  return {
    type: '@shoppingbag/ADD_AMOUNT',
    payload: { id },
  };
}

export function removeAmoun(id) {
  return {
    type: '@shoppingbag/REMOVE_AMOUNT',
    payload: { id },
  };
}
