import {
    GET_DAPPLET_FAILED,
    GET_DAPPLET_REQUEST,
    GET_DAPPLET_SUCCESS,
  } from '../actions/dapplets';
  import {TDapplets} from '../../types'
  import {TDappletActions} from '../actions/dapplets'
    type TInitialState = {
      dappletsSuccess: any,
      dappletsRequest: boolean,
      dappletsFailed: any,
    }
  
  const initialState: TInitialState = {
    dappletsSuccess: [],
    dappletsRequest: false,
    dappletsFailed: false,
  };
  
  export const infoReducer = (state = initialState, action:TDappletActions): TInitialState => {
    switch (action.type) {
      case GET_DAPPLET_REQUEST: {
        return {
          ...state,
          dappletsRequest: true
        };
      }
      case GET_DAPPLET_SUCCESS: {
        const data = {
          data: action.payload.data,
          total: action.payload.total,
        }
        return { 
          ...state, 
          dappletsFailed: false, 
          dappletsSuccess: data, 
          dappletsRequest: false 
        };
      }
      case GET_DAPPLET_FAILED: {
        return { 
          ...state, 
          dappletsFailed: action.payload, 
          dappletsRequest: false 
        };
      }
      default: {
        return state;
      }
    }
  };