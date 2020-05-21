import { combineReducers } from 'redux';
import { INIT_RESULTS, ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, TOGGLE_FILTER } from '../actions/index';

function results(state = [], action) {
  switch (action.type) {
    case INIT_RESULTS:
      return action.results;
    default:
      return state;
  }
}

function cart(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const nextState = {...state};
      nextState[action.item.id] = action.item;

      return nextState;
    case REMOVE_FROM_CART:
      const shallow = {...state};
      delete(shallow[action.item])

      return shallow;
    case CLEAR_CART:
      return {};
    default:
      return state;
  }
}

function filters(state = [], action) {
  switch (action.type) {
    case TOGGLE_FILTER:
      const nextState = [...state];

      if (!action.filter.checked) {
        nextState.splice(nextState.indexOf(action.filter), 1)
      } else {
        nextState.push(action.filter.id);
      }

      return nextState;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  results,
  cart,
  filters
});

export default rootReducer;