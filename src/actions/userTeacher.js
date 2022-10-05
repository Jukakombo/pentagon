import * as api from '../api/authTeacher';

export const signinTeacher = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signinTeacher(formData, history);
    dispatch({ type: 'AUTHTEACHER', data });
    history.push('/teacherDashboard');
  } catch (error) {
    console.log(error);
  }
};

export const signupTeacher = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signupTeacher(formData, history);
    dispatch({ type: 'AUTHTEACHER', data });
    history.push('/teacherDashboard');
  } catch (error) {
    console.log(error);
  }
};
