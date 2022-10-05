import { AUTHTEACHER, LOGOUTTEACHER } from '../constants/index';
const authTeacherReducer = (state = { authdata: null }, action) => {
  switch (action.type) {
    case AUTHTEACHER:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authdata: action?.data };

    case LOGOUTTEACHER:
      localStorage.clear();
      return { ...state, authdata: null };

    default:
      return state;
  }
};
export default authTeacherReducer;
