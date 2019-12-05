import {
  USER_API_URL,
  API_URL,
  API_KEY,
  USER_API_URL1,
  USER_API_URL2
} from "../config";
import { getResult, createResult } from "../helpers";
// actions types for Movie
export const GET_USERS = "GET_USERS";
export const GET_USERS_DUMMY = "GET_USERS_DUMMY";
// action types for both
export const SHOW_LOADING_SPINNER = "SHOW_LOADING_SPINNER";
export const ADD_NEW_USER = "ADD_NEW_USER";

export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";

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

export function getUsersDummy() {
  const endpoint = `${USER_API_URL2}`;
  const request = getResult(endpoint);
  return {
    type: GET_USERS_DUMMY,
    payload: request
  };
}
export function addNewUser(newUserObj) {
  const endpoint = `${USER_API_URL1}`;
  const request = createResult(newUserObj, endpoint);
  const endpoint = `${USER_API_URL1}`;
  const request = getResult(endpoint);
  return {
    type: GET_USERS,
    payload: request
  };
}

export function addUser(student) {
  return {
    type: "ADD_USER",
    payload: users
  };
}

export function deleteUser(Id) {
  return {
    type: "DELETE_USER",
    payload: Id
  };
}

export function updateUser(info) {
  return {
    type: "UPDATE_USER",
    payload: info
  };
}
