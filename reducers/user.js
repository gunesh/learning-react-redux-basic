import { GET_BANNER } from "../actions";

const defaultState = {
    banners: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_BANNER:
      return {
        ...state,
        banners: action.payload.results
      };
    default:
      return state;
  }
}
