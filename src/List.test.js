import React from "react";
import ReactDOM from "react-dom";
import List from "./List";

it("renders OK", () => {
  const div = document.createElement("div");
  ReactDOM.render(<List cards={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
