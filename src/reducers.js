import { CHANGE_SEARCH_QUERY } from 'constants';

const initialState = {
  query: '',
};

export const search = (state = initialState, action = {}) => {
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
