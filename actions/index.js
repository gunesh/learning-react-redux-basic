import { API_URL, API_KEY } from '../config';
import { fetchApi } from '../helpers';


//actions for banner
export const GET_BANNER = "GET_BANNER";

// action creator for banner
export function getBanner() {
  const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const request = fetchApi(endpoint);
  return {
    type: GET_BANNER,
    payload: request
  };
}



//actions for aboutus
export const ABOUT_US = "ABOUT_US";

// action creator for aboutus
export function getAboutUs(movieId) {
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

  }).catch(error => console.error("Error:", error));
  console.log(request);
  return {
    type: ABOUT_US,
    payload: request
  };
}



//actions for LOGIN
export const USER_LOGIN = "USER_LOGIN";

// action creator for LOGIN
export function loginAction() {
  let endpoint = `https://reqres.in/api/login`;
  const request = fetchApi(endpoint);
  return {
    type: USER_LOGIN,
    payload: request
  };
}