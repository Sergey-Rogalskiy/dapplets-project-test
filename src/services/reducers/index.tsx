import { combineReducers } from 'redux';
import { infoReducer } from './info';

export const rootReducer = combineReducers({
  info: infoReducer,
});
