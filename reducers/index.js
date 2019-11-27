import { combineReducers } from 'redux';
import home from './home_reducer';
import movie from './movie_reducer';
import login from './login_reducer';

const rootReducer = combineReducers({
  login,
  home,
  movie
})

export default rootReducer;