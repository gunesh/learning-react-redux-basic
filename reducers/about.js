import { ABOUT_US } from "../actions";

const defaultState = {
    movie: {},
    actors: [],
    directors: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ABOUT_US:
      return {
        ...state,
        movie: action.payload.movie,
        actors: action.payload.actors,
        directors: action.payload.directors
      };
    default:
      return state;
  }
}
