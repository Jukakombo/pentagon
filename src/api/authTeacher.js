import axios from 'axios';

const API = axios.create({ baseURL: 'https://pentagon-school-juba.herokuapp.com' });
// 
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});

export const signinTeacher = (formData) => API.post('/teacherUsers/signinTeacher', formData);

export const signupTeacher = (formData) => API.post('/teacherUsers/signupTeacher', formData);
