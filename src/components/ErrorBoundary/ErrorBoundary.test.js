import React from "react";
import ErrorBoundary from "./ErrorBoundary";
describe("ErrorBoundary", () => {
  const state = {
    error: true
  };

  const container = shallow(<ErrorBoundary />);

  it("error active", () => {
    container.setState(state);
    expect(container.state()).toEqual(state);
    expect(container.html()).toEqual("<h1>Error</h1>");
  });
});
