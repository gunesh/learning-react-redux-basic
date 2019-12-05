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
  switch (action.type) {
    case "ADD_USER":
      let stateCopy = [...state, action.payload];
      localStorage.setItem("users", JSON.stringify(stateCopy));
      return stateCopy;

    case "DELETE_USER":
      stateCopy = state.filter(x => x.id !== action.payload);
      localStorage.setItem("users", JSON.stringify(stateCopy));
      return stateCopy;

    case "UPDATE_USER":
      stateCopy = state.map(student => {
        const { id, name, grade, school } = action.payload;
        if (student.id === id) {
          student.name = name;
          student.grade = grade;
          student.school = school;
        }
        return student;
      });
      localStorage.setItem("users", JSON.stringify(stateCopy));
      return stateCopy;

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
