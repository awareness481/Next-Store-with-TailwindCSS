export const INIT_RESULTS = 'INIT_RESULTS';
const initResults = (results) => ({
  type: INIT_RESULTS,
  results
});

export const ADD_TO_CART = 'ADD_TO_CART';
const addToCart = (item) => ({
  type: ADD_TO_CART,
  item
});

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const removeFromCart = (item) => ({
  type: REMOVE_FROM_CART,
  item
});

export const CLEAR_CART = 'CLEAR_CART';
const clearCart = () => ({ type: CLEAR_CART });

export const TOGGLE_FILTER = 'TOGGLE_FILTER';
const toggleFilter = (filter) => ({
  type: TOGGLE_FILTER,
  filter
});