import {
    SHOW_LOADING_SPINNER,
    USER_LOGIN
  } from '../actions';
  
  const defaultState = {
    isLoogedIn: false,
    name: '',
    loading: false,
    loginMsg: ''
  }

export default function(state = defaultState, action) {
  switch(action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLoogedIn: false,
        name: '',
        loading: SHOW_LOADING_SPINNER,
        loginMsg: '',
      }
    default:
      return state;
  }
}