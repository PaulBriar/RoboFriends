import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './actionTypes';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = () => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await data.json();
    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: json});
  } catch(err) {
      dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err})
  }
}