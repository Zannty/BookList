import React from "react";
import BookList from "./BookList";
import configureStore from "redux-mock-store";
describe("BookList", () => {
  const initialState = {
    data: [{}],
    renderData: [{}, {}, {}],
    loading: true,
    search: "",
    selectedItem: "def"
  };
  const mockStore = configureStore();
  let store, container;
  store = mockStore(initialState);
  container = shallow(<BookList store={store} />);
  it("Spinner && loading=true", () => {
    console.log(container.debug());
  });
});
