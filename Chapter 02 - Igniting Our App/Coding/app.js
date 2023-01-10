import React from "react";
import ReactDOM from "react-dom/client";

//using react
//(converted to)
//reactElement ==============> object =======> HTML(DOM) element
const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
//It will override all the existing content which is inside root
root.render(container);
