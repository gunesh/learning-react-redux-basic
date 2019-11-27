import { USER_LOGIN } from "../actions";

const defaultState = {
  token: ''
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        token:'111111222'
      };
    default:
      return state;
  }
}
