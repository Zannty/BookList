import React from "react";
import { Header } from "./Header";
describe("Header", () => {
  const mockBtn = jest.fn();
  const props = {
    search: "Дефо",
    selectedItem: "author",
    buttonUse: mockBtn
  };
  const container = mount(<Header {...props} />);

  it("snap Header", () => {
    expect(container.debug()).toMatchSnapshot();
  });
  it("props search currect", () => {
    expect(container.props().search).toEqual(props.search);
  });
  it("props select currect", () => {
    expect(container.props().selectedItem).toEqual(props.selectedItem);
  });

  it("buttonUse сlear search", () => {
    container.find("button").simulate("click", {
      preventDefault: () => {}
    });

    expect(mockBtn).toHaveBeenCalledTimes(1);
  });
});
