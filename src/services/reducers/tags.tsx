import {
    GET_TAGS_FAILED,
    GET_TAGS_REQUEST,
    GET_TAGS_SUCCESS,
  } from '../actions/tags';
  import {TTags} from '../../types'
  import {TTagsActions} from '../actions/tags'
    type TInitialState = {
      tagsSuccess: any,
      tagsRequest: boolean,
      tagsFailed: any,
    }
  
  const initialState: TInitialState = {
    tagsSuccess: [],
    tagsRequest: false,
    tagsFailed: false,
  };
  
  export const tagsReducer = (state = initialState, action:TTagsActions): TInitialState => {
    switch (action.type) {
      case GET_TAGS_REQUEST: {
        return {
          ...state,
          tagsRequest: true
        };
      }
      case GET_TAGS_SUCCESS: {
        const data = {
          data: action.payload.data,
          total: action.payload.total,
        }
        return { 
          ...state, 
          tagsFailed: false, 
          tagsSuccess: data, 
          tagsRequest: false 
        };
      }
      case GET_TAGS_FAILED: {
        return { 
          ...state, 
          tagsFailed: action.payload, 
          tagsRequest: false 
        };
      }
      default: {
        return state;
      }
    }
  };