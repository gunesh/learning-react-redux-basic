import { combineReducers } from 'redux';
import home from './home_reducer';
import movie from './movie_reducer';
import users from './user_reducer';


const rootReducer = combineReducers({
  home,
  movie,
  users
})
export default rootReducer;