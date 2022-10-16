 

import { SAVE__LOCAL__STORAGE__DATA } from "../constants";
 
  export const createLocalStorage = (data) => async (dispatch) => {
    dispatch({
      type: SAVE__LOCAL__STORAGE__DATA,
      payload: data,
    }); 
    localStorage.setItem('studentData', JSON.stringify(data));
  };