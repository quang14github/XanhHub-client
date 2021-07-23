import TYPE from "../CONSTANT";

const defaultState = {
  cart: [],
  status: false,
  lastUpdate: null,
};

const cart = (state = defaultState, action) => {
  if (action.type === TYPE.addToCart) {
    const indexOfNewItem = state.cart.findIndex(
      (e) => e.id === action.payload.id
    );
    const newCart =
      indexOfNewItem !== -1
        ? state.cart.map((e) => {
            if (e.id === action.payload.id) {
              e.count = parseInt(e.count) + parseInt(action.payload.count);
              e.checkout = action.payload.checkout;
            }
            return e;
          })
        : [...state.cart, action.payload];
    return { ...state, cart: newCart };
  }
  if (action.type === TYPE.removeFromCart) {
    const newCart = [...state.cart.filter((e) => e.id !== action.payload.id)];
    return { ...state, cart: newCart };
  }

  return state;
};

export default cart;
