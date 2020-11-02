import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

it("renders OK", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});
