import {
  ADD_NEW_USER,
  GET_USERS,
  GET_USERS_DUMMY,
  SHOW_LOADING_SPINNER
} from '../actions';

const defaultState = {
  users: [],
  users_dummy:[],
  loading: false
};

export default function(state = defaultState, action) {
  switch(action.type) {
    case ADD_NEW_USER:
      return {
        ...state,
        loading: false
      } 
   case GET_USERS:
      return {
        ...state,
        users: action.payload.data,
        loading: false
      }
    case GET_USERS_DUMMY:
      return {
        ...state,
        users_dummy: action.payload,
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