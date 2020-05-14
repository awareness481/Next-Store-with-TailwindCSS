import { combineReducers } from 'redux';
import { INIT_RESULTS } from '../actions/index';

function results(state = [], action) {
  switch (action.type) {
    case INIT_RESULTS:
      return action.results;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  results,
});

export default rootReducer;