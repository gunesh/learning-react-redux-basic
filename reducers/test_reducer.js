import {
  SHOW_LOADING_SPINNER,
  CLEAR_USERS,
  GET_POPULAR_USERS,
  SET_POPULAR_PERSISTED_STATE_USER
} from '../actions';

const defaultState = {
  users: []
 
}

export default function(state = defaultState, action) {
  switch(action.type) {
    case SET_POPULAR_PERSISTED_STATE_USER:
      return {
       ...state,
       ...action.payload
      }
    case GET_POPULAR_USERS:
      return {
        ...state,
        users: action.payload.results
      }
    case CLEAR_USERS:
      return {
        ...state,
        users: []
      }
    case SHOW_LOADING_SPINNER:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}