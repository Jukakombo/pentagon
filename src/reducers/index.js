import { combineReducers } from 'redux';
import authReducer from './auth';
import contacts from './contacts';
import news from './news';
import comments from './comment';
import courses from './courses';

const reducers = combineReducers({
  authReducer,
  courses,
  contacts,
  news,
  comments,
});

export default reducers;
