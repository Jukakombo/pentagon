import axios from 'axios';
const API = axios.create({ baseURL: process.env.REACT_APP_CLIENT_DATABASE });

// contacts api call endpoints
export const fetchContacts = () => API.get('/contacts');
export const createContact = (contact) => API.post('/contacts', contact);
export const updateContact = (updatedContact, id) =>
  API.put(`/contacts/${id}`, updatedContact);
export const deleteContact = (id) => API.delete(`/contacts/${id}`);

// news api call endpoints
export const fetchNews = () => API.get('/news');
export const createNews = (news) => API.post('/news', news);
export const updateNews = (newsupdatedNews, id) =>
  API.put(`/news/${id}`, newsupdatedNews);
export const deleteNews = (id) => API.delete(`/news/${id}`);

// comments api call endpoints
export const fetchComments = () => API.get('/comment');
export const createComment = (comment) => API.post('/comment', comment);
export const updateComment = (updatedComment, id) =>
  API.put(`/comment/${id}`, updatedComment);
export const deleteComment = (id) => API.delete(`/comment/${id}`);

// courses api call endpoints
export const fetchCourses = () => API.get('/course');
export const createCourse = (course) => API.post('/course', course);
export const updateCourse = (updatedCourse, id) =>
  API.put(`/course/${id}`, updatedCourse);
export const deleteCourse = (id) => API.delete(`/course/${id}`);
