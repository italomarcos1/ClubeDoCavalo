import produce from 'immer';

const INITIAL_STATE = {
  products: [],
};

export default function shoppingbag(state = INITIAL_STATE, { type, payload }) {
  return produce(state, draft => {
    switch (type) {
      case '@shoppingbag/ADD_TO_SHOPPING_BAG': {
        draft.products.push(payload.product);

        break;
      }

      case '@shoppingbag/ADD_ALL_TO_SHOPPING_BAG': {
        const { products } = payload;
        products.map(product => draft.products.push(product));

        break;
      }

      case '@shoppingbag/REMOVE_FROM_SHOPPING_BAG': {
        const { id } = payload;
        const productIndex = draft.products.findIndex(prod => prod.id === id);

        draft.products.splice(productIndex, 1);

        break;
      }

      case '@shoppingbag/ADD_AMOUNT': {
        const { id } = payload;
        const productIndex = draft.products.findIndex(prod => prod.id === id);

        draft.products[productIndex].amount++;
        break;
      }

      case '@shoppingbag/REMOVE_AMOUNT': {
        const { id } = payload;
        const productIndex = draft.products.findIndex(prod => prod.id === id);

        draft.products[productIndex].amount--;

        if (draft.products[productIndex].amount)
          draft.products.splice(productIndex, 1);

        break;
      }
      case '@shoppingbag/CLEAR_CART': {
        draft.products.splice(0, draft.products.length);

        break;
      }
      default:
    }
  });
}
