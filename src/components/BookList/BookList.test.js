import React from "react";
import { BookList } from "./BookList";

describe("BookList", () => {
  const mockFn = jest.fn();
  let props = {
    fetchRequest: mockFn,
    loading: false,
    renderData: [{ id: 1, photo: "x", genre: "y", author: "z", name: "q" }]
  };
  let container;

  it("Spinner && loading=true", () => {
    props = { ...props, loading: true };
    container = shallow(<BookList {...props} />);
    expect(container.find("Spinner").debug()).toEqual("<Spinner />");
  });

  it("BookList snap", () => {
    props = { ...props, loading: false };
    container = mount(<BookList {...props} />);
    expect(container.debug()).toMatchSnapshot();
  });

  it("dispatch fetch called", () => {
    expect(mockFn).toHaveBeenCalled();
  });

  it("render data length === 0", () => {
    props = { ...props, renderData: [] };
    container = shallow(<BookList {...props} />);
    expect(container.props().children).toEqual(
      "К сожалению по вашему запросу ничего не найдено, попробуйте еще раз."
    );
  });
});
