import { combineReducers } from 'redux';
import home from './home_reducer';
import movie from './movie_reducer';
import test from './test_reducer';

const rootReducer = combineReducers({
  home,
  movie,
  test
})

export default rootReducer;