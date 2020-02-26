import BookListItem from "./BookListItem";
import React from "react";
describe("BookListItem", () => {
  const props = { book: { photo: "x", genre: "y", author: "z", name: "q" } };
  const container = mount(<BookListItem {...props} />);

  it("BookListItem snap", () => {
    expect(container.debug()).toMatchSnapshot();
  });

  it("currect render author", () => {
    expect(container.props().book.author).toEqual(props.book.author);
  });
  it("currect render name", () => {
    expect(container.props().book.name).toEqual(props.book.name);
  });
  it("currect render genre", () => {
    expect(container.props().book.genre).toEqual(props.book.genre);
  });
});
