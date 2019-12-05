import {
  ADD_NEW_USER,
  GET_USERS,
  GET_USERS_DUMMY,
  SHOW_LOADING_SPINNER,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER
} from "../actions";

import { log } from "../helpers";
const defaultState = {
  users: [],
  users_dummy: [],
  loading: false
};

export default function(state = defaultState, action) {
   log("b", action);
   log("c",state.users);
  switch (action.type) {
    case ADD_USER:
    const newUsers = state.users.push({
      id:11,
      first_name: "AAA",
      last_name: "BBB",
      email: "aa@bb.ccc",
      avatar:""
    });
      return {
        ...state,
        users: newUsers,
        loading: false
      };

    case DELETE_USER:
      return {
        ...state,
        users: action.payload.data,
        loading: false
      };

    case UPDATE_USER:
      return {
        ...state,
        users: state.users,
        loading: false
      };

    case ADD_NEW_USER:
      return {
        ...state,
        loading: false
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload.data,
        loading: false
      };
    case GET_USERS_DUMMY:
      return {
        ...state,
        users_dummy: action.payload,
        loading: false
      };
    case SHOW_LOADING_SPINNER:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
