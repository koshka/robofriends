import {
  CHANGE_SEARCH_QUERY,
  REQUEST_USERS_FAIL,
  REQUEST_USERS_PENDING,
  REQUEST_USERS_SUCCESS,
} from 'constants';

export const setSearchQuery = (query) => ({
  type: CHANGE_SEARCH_QUERY,
  payload: query,
});

export const requestUsers = (dispatch) => {
  dispatch({
    type: REQUEST_USERS_PENDING,
  });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: REQUEST_USERS_SUCCESS,
        payload: json,
      });
    })
    .catch((error) => {
      dispatch({
        type: REQUEST_USERS_FAIL,
        payload: error,
      });
    });
};
