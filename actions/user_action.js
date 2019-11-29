import { USER_API_URL, API_URL, API_KEY, USER_API_URL1 } from "../config";
import { getResult } from "../helpers";
// actions types for Movie
export const GET_USERS = "GET_USERS";
// action types for both
export const SHOW_LOADING_SPINNER = "SHOW_LOADING_SPINNER";
export const ADD_NEW_USER = "ADD_NEW_USER";
// action creator for both
export function showLoadingSpinner() {
  return {
    type: SHOW_LOADING_SPINNER,
    payload: null
  };
}
export function getUsers() {
  const endpoint = `${USER_API_URL1}`;
  const request = getResult(endpoint);
  return {
    type: GET_USERS,
    payload: request
  };
}
export function addNewUser(newUserObj) {
  const endpoint = `${USER_API_URL1}`;
  const request = createResult(newUserObj, endpoint);
  console.log(request);
  return {
    type: ADD_NEW_USER,
    payload: request
  };
}
