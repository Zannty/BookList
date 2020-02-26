import React from "react";
import Spinner from "./Spinner";
describe("Spinner", () => {
  const container = shallow(<Spinner />);

  it("snap Spinner", () => {
    expect(container.debug()).toMatchSnapshot();
  });
});
