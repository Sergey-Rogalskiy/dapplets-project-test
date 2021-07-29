import { TDappletActions } from './services/actions/dapplets';
import { store } from './store';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import {
  TypedUseSelectorHook,
  useSelector as selectorHook,
  useDispatch as dispatchHook,
} from 'react-redux';

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook; 
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>(); 

export type RootState = ReturnType<typeof store.getState>;
 

export type TAppActions = 
TDappletActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TAppActions>
>; 
export type AppDispatch = typeof store.dispatch; 
  
 export type TDapplets = {
  calories: number
}
export type TTags = {
   calories: number
}

export  type TLocationItem = {
    hash: string
    key: string
    pathname: string
    search: string
    state: null
  }
export  type TLocation = {
    hash: string
    key: string
    pathname: string
    from: TLocationItem
    search: string
    state: { background: TLocationItem } | null
    background: TLocationItem
  }
