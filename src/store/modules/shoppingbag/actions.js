export function addToShoppingBag(product) {
  return {
    type: '@shoppingbag/ADD_TO_SHOPPING_BAG',
    payload: { product },
  };
}

export function addAllToShoppingBag(products) {
  return {
    type: '@shoppingbag/ADD_ALL_TO_SHOPPING_BAG',
    payload: { products },
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

export function removeAmount(id) {
  return {
    type: '@shoppingbag/REMOVE_AMOUNT',
    payload: { id },
  };
}

export function cleanCart() {
  return {
    type: '@shoppingbag/CLEAR_CART',
  };
}
