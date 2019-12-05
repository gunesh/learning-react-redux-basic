import {
  ADD_NEW_USER,
  GET_USERS,
  GET_USERS_DUMMY,
  SHOW_LOADING_SPINNER,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER
} from "../actions";

const defaultState = {
  users: [],
  users_dummy: [],
  loading: false
};

export default function(state = defaultState, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_USER":
      let stateCopy = [...state, action.payload];
      localStorage.setItem("users", JSON.stringify(stateCopy));
      return stateCopy;

    case "DELETE_USER":
      stateCopy = state.filter(x => x.id !== action.payload);
      localStorage.setItem("users", JSON.stringify(stateCopy));
      return stateCopy;

    case UPDATE_USER:
      const { id, first_name, last_name, email } = action.payload;
      stateCopy = state.users.map(user => {
        if (user.id === id) {
          user.id = id;
          user.first_name = first_name;
          user.last_name = last_name;
          user.email = email;
        }
      });
      return {
        ...state,
        users: stateCopy,
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
