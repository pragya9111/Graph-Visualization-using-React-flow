import { createStore, combineReducers } from 'redux';
import { reducer } from './reducer';

const rootReducer = combineReducers({
  graph: reducer
});

export const store = createStore(rootReducer);