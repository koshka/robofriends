import {
  CHANGE_SEARCH_QUERY,
  REQUEST_USERS_FAIL,
  REQUEST_USERS_PENDING,
  REQUEST_USERS_SUCCESS,
} from 'constants';

const initialStateSearch = {
  query: '',
};

export const search = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

const initialStateUsers = {
  error: '',
  isPending: false,
  users: [],
};

export const users = (state = initialStateUsers, action = {}) => {
  switch (action.type) {
    case REQUEST_USERS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_USERS_SUCCESS:
      return { ...state, users: action.payload, isPending: false };
    case REQUEST_USERS_FAIL:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
