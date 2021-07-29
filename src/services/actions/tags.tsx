import { 
    getTagsRequest, 
} from '../dapplets-hiring-api';
import { TTags, AppThunk, AppDispatch } from '../../types';
export const GET_TAGS_REQUEST:'GET_TAGS_REQUEST' = 'GET_TAGS_REQUEST';
export const GET_TAGS_SUCCESS:'GET_TAGS_SUCCESS' = 'GET_TAGS_SUCCESS';
export const GET_TAGS_FAILED:'GET_TAGS_FAILED' = 'GET_TAGS_FAILED';


export interface IGetTagsRequestAction {
  readonly type: typeof GET_TAGS_REQUEST;
}

export interface IGetTagsFailedAction {
  readonly type: typeof GET_TAGS_FAILED ;
  readonly payload: any
}

export interface IGetTagsSuccessAction {
  readonly type: typeof GET_TAGS_SUCCESS;
  readonly payload: any;
}


export type TTagsActions = 
IGetTagsRequestAction |
IGetTagsFailedAction |
IGetTagsSuccessAction;

export const getTagsAction = (): IGetTagsRequestAction => ({
  type: GET_TAGS_REQUEST
});

export const getTagsFailedAction = (res: any): IGetTagsFailedAction => ({
  type: GET_TAGS_FAILED,
  payload: res
});

export const getTagsSuccessAction = (res:any): IGetTagsSuccessAction => ({
  type: GET_TAGS_SUCCESS,
  payload: res
});

export const getTags: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(getTagsAction());
  getTagsRequest()
  .then(res => {
    if (res && res.success) {
      dispatch(getTagsSuccessAction(res));
    } else {
      dispatch(getTagsFailedAction('Some error'));
    }
  })
  .catch(err => {
    console.log(err);
      dispatch(getTagsFailedAction(err));
  })
}
