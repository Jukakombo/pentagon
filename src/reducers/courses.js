import {
  CREATE_COURSE,
  DELETE_COURSE,
  FETCH_COURSES,
  UPDATE_COURSE,
} from '../constants/index';

const courses = (courses = [], action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return action.payload;
    case CREATE_COURSE:
      return [...courses, action.payload];
    case UPDATE_COURSE:
      return courses.map((course) =>
        course._id === action.payload._id ? action.payload : course
      );
    case DELETE_COURSE:
      return courses.filter((course) => course._id !== action.payload);
    default:
      return courses;
  }
};

export default courses;
