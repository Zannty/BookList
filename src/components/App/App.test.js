import React from "react";
import App from "./App";
describe("App", () => {
  const container = shallow(<App />);

  it("snap App", () => {
    expect(container.debug()).toMatchSnapshot();
  });
});
