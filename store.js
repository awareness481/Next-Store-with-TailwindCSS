import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/index';

export const initializeStore = (state = []) => {
  return createStore(
    rootReducer,
    state,
    composeWithDevTools(applyMiddleware())
  )
};

export const store = initializeStore();