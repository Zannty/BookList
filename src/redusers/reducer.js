const initialState = {
  data: [],
  renderData: [],
  loading: false,
  search: "",
  selectedItem: "def"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST": {
      return {
        ...state,
        loading: true
      };
    }
    case "FETCH_BOOKS_SUCCESS": {
      return {
        ...state,
        data: action.payload,
        renderData: action.payload,
        loading: false
      };
    }
    case "SEARCH_INPUT_CHANGE": {
      return {
        ...state,
        search: action.payload
      };
    }
    case "SEARCH_SELECT_CHANGE": {
      return {
        ...state,
        selectedItem: action.payload
      };
    }
    case "CHANGE_RENDER_DATA": {
      const { data, search, selectedItem } = state;
      const newArr = data.slice();

      return {
        ...state,
        search: "",
        renderData: newArr.filter(el => {
          if (selectedItem === "def")
            return (
              el.name.toLowerCase().includes(search.toLowerCase()) ||
              el.author.toLowerCase().includes(search.toLowerCase()) ||
              el.genre.toLowerCase().includes(search.toLowerCase())
            );
          else if (selectedItem === "name")
            return el.name.toLowerCase().includes(search.toLowerCase());
          else if (selectedItem === "author")
            return el.author.toLowerCase().includes(search.toLowerCase());
          else if (selectedItem === "genre")
            return el.genre.toLowerCase().includes(search.toLowerCase());
        })
      };
    }
    default:
      return state;
  }
};
