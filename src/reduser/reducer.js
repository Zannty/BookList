const initialState = {
  data: [],
  filteredBooks: [],
  visibleBooks: [],
  loading: false,
  filterSearchValue: "",
  author: false,
  genre: false,
  name: false,
  pageSize: 4,
  currentPage: 1,
  totalBooksCount: 0
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
        filteredBooks: action.payload,
        visibleBooks: action.payload.slice(0, state.pageSize),
        loading: false,
        totalBooksCount: action.payload.length
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
    case "CHANGE_FILTERED_BOOKS": {
      const { data, filterSearchValue } = state;
      const arr = data.slice();
      const newArr = arr.filter(el => {
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
            el.author.toLowerCase().includes(filterSearchValue.toLowerCase()) ||
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
            el.author.toLowerCase().includes(filterSearchValue.toLowerCase()) ||
            el.genre.toLowerCase().includes(filterSearchValue.toLowerCase())
          );
      });

      return {
        ...state,
        filteredBooks: newArr,
        currentPage: 1,
        visibleBooks: newArr.slice(0, state.pageSize),
        totalBooksCount: newArr.length
      };
    }
    case "CHANGE_CURRENT_PAGE": {
      let newArr = state.filteredBooks.slice(
        (action.payload - 1) * state.pageSize,
        action.payload * state.pageSize
      );
      return {
        ...state,
        currentPage: action.payload,
        visibleBooks: newArr
      };
    }
    default:
      return state;
  }
};
