import { 
    getDappletstsRequest, 
} from '../dapplets-hiring-api';
import { TDapplets, AppThunk, AppDispatch } from '../../types';
export const GET_DAPPLET_REQUEST:'GET_DAPPLET_REQUEST' = 'GET_DAPPLET_REQUEST';
export const GET_DAPPLET_SUCCESS:'GET_DAPPLET_SUCCESS' = 'GET_DAPPLET_SUCCESS';
export const GET_DAPPLET_FAILED:'GET_DAPPLET_FAILED' = 'GET_DAPPLET_FAILED';


export interface IGetDappletRequestAction {
  readonly type: typeof GET_DAPPLET_REQUEST;
}

export interface IGetDappletFailedAction {
  readonly type: typeof GET_DAPPLET_FAILED ;
  readonly payload: any
}

export interface IGetDappletSuccessAction {
  readonly type: typeof GET_DAPPLET_SUCCESS;
  readonly payload: any;
}


export type TDappletActions = 
IGetDappletRequestAction |
IGetDappletFailedAction |
IGetDappletSuccessAction;

export const getDappletAction = (): IGetDappletRequestAction => ({
  type: GET_DAPPLET_REQUEST
});

export const getDappletFailedAction = (res: any): IGetDappletFailedAction => ({
  type: GET_DAPPLET_FAILED,
  payload: res
});

export const getDappletSuccessAction = (res:any): IGetDappletSuccessAction => ({
  type: GET_DAPPLET_SUCCESS,
  payload: res
});

export const getDapplets: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(getDappletAction());
  getDappletstsRequest()
  .then(res => {
    if (res && res.success) {
      dispatch(getDappletSuccessAction(res));
    } else {
      dispatch(getDappletFailedAction('Some error'));
    }
  })
  .catch(err => {
      dispatch(getDappletFailedAction(err));
  })
}
