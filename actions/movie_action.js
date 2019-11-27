import { API_URL, API_KEY } from '../config';
import { fetchApi } from '../helpers';

// actions types for Movie
export const GET_MOVIE = 'GET_MOVIE';
export const CLEAR_MOVIE = 'CLEAR_MOVIE';
export const SET_MOVIE_PERSISTED_STATE = 'SET_MOVIE_PERSISTED_STATE';

// action types for both
export const SHOW_LOADING_SPINNER = 'SHOW_LOADING_SPINNER';

// action creator for both
export function showLoadingSpinner() {
  return {
    type: SHOW_LOADING_SPINNER,
    payload: null
  }
}

// action creators for Movie
export function setMoviePersistedState(state) {
  return {
    type: SET_MOVIE_PERSISTED_STATE,
    payload: state
  }
}

export function clearMovie() {
  return {
    type: CLEAR_MOVIE,
    payload: null
  }
}

export function getMovie(movieId) {
  let endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  let newState = {};

  const request = fetchApi(endpoint, result => {
    if (result.status_code) {
      // If we don't find any movie
      return newState;
    } else {
      newState = { movie: result };
      endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

      return fetchApi(endpoint, result => {
        const directors = result.crew.filter((member) => member.job === "Director");
        newState.actors = result.cast;
        newState.directors = directors;

        return newState;

      })
    }

  })
    .catch(error => console.error("Error:", error));

  return {
    type: GET_MOVIE,
    payload: request
  }
}

