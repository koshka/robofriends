import { CHANGE_SEARCH_QUERY } from 'constants';

export const setSearchQuery = (query) => ({
  type: CHANGE_SEARCH_QUERY,
  payload: query,
});
