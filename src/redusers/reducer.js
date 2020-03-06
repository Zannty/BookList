const initialState = {
  data: [],
  renderData: [],
  loading: false,
  filterSearchValue: "",
  author: false,
  genre: false,
  name: false
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
        filterSearchValue: action.payload
      };
    }
    case "SEARCH_AUTHOR_CHANGE": {
      return {
        ...state,
        author: !state.author
      };
    }
    case "SEARCH_GENRE_CHANGE": {
      return {
        ...state,
        genre: !state.genre
      };
    }
    case "SEARCH_NAME_CHANGE": {
      return {
        ...state,
        name: !state.name
      };
    }
    case "CHANGE_RENDER_DATA": {
      const { data, filterSearchValue } = state;
      const newArr = data.slice();

      return {
        ...state,
        renderData: newArr.filter(el => {
          if (state.name && state.author)
            return (
              el.name.toLowerCase().includes(filterSearchValue.toLowerCase()) ||
              el.author.toLowerCase().includes(filterSearchValue.toLowerCase())
            );
          else if (state.name && state.genre)
            return (
              el.name.toLowerCase().includes(filterSearchValue.toLowerCase()) ||
              el.genre.toLowerCase().includes(filterSearchValue.toLowerCase())
            );
          else if (state.author && state.genre)
            return (
              el.author
                .toLowerCase()
                .includes(filterSearchValue.toLowerCase()) ||
              el.genre.toLowerCase().includes(filterSearchValue.toLowerCase())
            );
          else if (state.name)
            return el.name
              .toLowerCase()
              .includes(filterSearchValue.toLowerCase());
          else if (state.author)
            return el.author
              .toLowerCase()
              .includes(filterSearchValue.toLowerCase());
          else if (state.genre)
            return el.genre
              .toLowerCase()
              .includes(filterSearchValue.toLowerCase());
          else
            return (
              el.name.toLowerCase().includes(filterSearchValue.toLowerCase()) ||
              el.author
                .toLowerCase()
                .includes(filterSearchValue.toLowerCase()) ||
              el.genre.toLowerCase().includes(filterSearchValue.toLowerCase())
            );
        })
      };
    }

    default:
      return state;
  }
};
