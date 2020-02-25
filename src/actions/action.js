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
export const inputChange = text => {
  return {
    type: "SEARCH_INPUT_CHANGE",
    payload: text
  };
};
export const selectChange = val => {
  return {
    type: "SEARCH_SELECT_CHANGE",
    payload: val
  };
};
export const buttonUse = () => {
  return {
    type: "CHANGE_RENDER_DATA"
  };
};
