import { reducer } from "./reducer";
import {
  buttonUse,
  inputChange,
  selectChange,
  fetchRequest,
  fetchSuccess
} from "../actions/action";
const state = {
  data: [],
  renderData: [],
  loading: true,
  search: "",
  selectedItem: "def"
};

describe("reducer test", () => {
  it("change input currect", () => {
    let action = inputChange;
    let newState = reducer(state, action("test"));
    expect(newState.search).toBe("test");
  });

  it("change select currect", () => {
    let action = selectChange;
    let newState = reducer(state, action("author"));
    expect(newState.selectedItem).toBe("author");
  });
  it("fetch request", () => {
    let action = fetchRequest;
    let newState = reducer(state, action);
    expect(newState.loading).toBeTruthy();
  });

  it("fetch success", () => {
    let action = fetchSuccess([2, 2]);
    expect(reducer(state, action)).toEqual({
      ...state,
      data: action.payload,
      renderData: action.payload,
      loading: false
    });
  });

  it("change selected render data ", () => {
    let state = {
      data: [
        { author: "x", name: "y", genre: "z" },
        { author: "y", name: "x", genre: "z" },
        { author: "y", name: "z", genre: "y" }
      ],
      renderData: [],
      loading: false,
      search: "z",
      selectedItem: "name"
    };
    let action = buttonUse();
    expect(reducer(state, action)).toEqual({
      ...state,
      renderData: [{ author: "y", name: "z", genre: "y" }]
    });
  });

  it("change default render data", () => {
    let state = {
      data: [
        { author: "x", name: "y", genre: "z" },
        { author: "y", name: "x", genre: "z" },
        { author: "y", name: "z", genre: "y" }
      ],
      renderData: [],
      loading: false,
      search: "z",
      selectedItem: "def"
    };
    let action = buttonUse();
    expect(reducer(state, action)).toEqual({
      ...state,
      renderData: [
        { author: "x", name: "y", genre: "z" },
        { author: "y", name: "x", genre: "z" },
        { author: "y", name: "z", genre: "y" }
      ]
    });
  });
});
