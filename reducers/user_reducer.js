import {
  GET_USERS,
  SHOW_LOADING_SPINNER
} from '../actions';

const defaultState = {
  users: [],
  loading: false
};

export default function(state = defaultState, action) {
  switch(action.type) {
   case GET_USERS:
      return {
        ...state,
        users: action.payload.d,
        loading: false
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