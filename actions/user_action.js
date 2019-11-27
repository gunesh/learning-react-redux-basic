import { USER_API_URL, API_URL, API_KEY  } from '../config';
import { fetchApi } from '../helpers';


// actions types for Movie
export const GET_USERS = 'GET_USERS';


// action types for both
export const SHOW_LOADING_SPINNER = 'SHOW_LOADING_SPINNER';

// action creator for both
export function showLoadingSpinner() {
  return {
    type: SHOW_LOADING_SPINNER,
    payload: null
  }
}

export function getUsers() {
  const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const request = fetchApi(endpoint);
  return {
    type: GET_USERS,
    payload: request
  }
}
