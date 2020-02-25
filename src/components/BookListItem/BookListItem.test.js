import BookListItem from "./BookListItem";
import React from "react";
describe("BookListItem", () => {
  const props = { book: { photo: "x", genre: "y", author: "z", name: "q" } };
  const container = shallow(<BookListItem {...props} />);

  it("render props", () => {
    expect(container.debug()).toMatchSnapshot();
  });
});
