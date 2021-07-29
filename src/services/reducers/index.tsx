import { combineReducers } from 'redux';
import { dappletsReducer } from './dapplets';
import { tagsReducer } from './tags';

export const rootReducer = combineReducers({
  dapplets: dappletsReducer,
  tags: tagsReducer,
});
