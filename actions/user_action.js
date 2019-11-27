import { USER_API_URL } from '../config';
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
  let endpoint = `${USER_API_URL}`;
  const request = fetchApi(endpoint);
  console.log(request);
  return {
    type: GET_USERS,
    payload: request
  }
}
