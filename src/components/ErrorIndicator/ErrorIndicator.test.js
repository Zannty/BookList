import React from "react";
import ErrorIndicator from "./ErrorIndicator";
describe("ErrorIndicator", () => {
  const container = shallow(<ErrorIndicator />);

  it("snap ErrorIndicator", () => {
    expect(container.debug()).toMatchSnapshot();
  });
});
