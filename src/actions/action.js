export const fetchRequest = () => {
  return {
    type: "FETCH_BOOKS_REQUEST"
  };
};

export const fetchSuccess = data => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: data
  };
};
export const handleInputChange = text => {
  return {
    type: "SEARCH_INPUT_CHANGE",
    payload: text
  };
};
export const handleFilterAuthorChange = () => {
  return {
    type: "SEARCH_AUTHOR_CHANGE"
  };
};
export const handleFilterGenreChange = () => {
  return {
    type: "SEARCH_GENRE_CHANGE"
  };
};
export const handleFilterNameChange = () => {
  return {
    type: "SEARCH_NAME_CHANGE"
  };
};
export const handleApplyFilter = () => {
  return {
    type: "CHANGE_FILTERED_BOOKS"
  };
};
export const handleChangeCurrentPage = page => {
  return {
    type: "CHANGE_CURRENT_PAGE",
    payload: page
  };
};
