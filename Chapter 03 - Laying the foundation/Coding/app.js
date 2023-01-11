import React from "react";
import ReactDOM from "react-dom/client";

//jsx element
const header = (
  <h1 id="header" key="header">
    Namaste React element
  </h1>
);

//functional component
const HeaderComponent = () => {
  return (
    <h1 id="header" key="header">
      Namaste React Component
    </h1>
  );
};

//functional component
const HeaderComponent2 = () => {
  return (
    <div>
      {2 + 2}
      <h1 id="header" key="header">
        {header}
      </h1>
      <h2 key="header2">Heading 2</h2>
      <HeaderComponent />
    </div>
  );
};

//-----------------assignment-------------------------

// Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

// const header1 = react.createElement("h1", {key:"header1"}, "header1");
// const header2 = react.createElement("h2", {key:"header2"}, "header2");
// const header3 = react.createElement("h3", {key:"header3"}, "header3");

// const nestedReactHeaderElement = react.createElement("div", { className: "title" }, [
//   header1,
//   header2,
//   header3,
// ]);

// Q: Create the same element using JSX
NestedHeaderElement = (
  <div className="title">
    <h1 key="header1">header</h1>
    <h2 key="header2">header2</h2>
    <h3 key="header3">header3</h3>
  </div>
);

// Q: Create a functional component of the same with JSX
const header1 = <h1 key="header1">header</h1>;
const header2 = <h2 key="header2">header2</h2>;
const header3 = <h3 key="header3">header3</h3>;
NestedHeadercomponent = () => {
  return (
    <div className="title">
      {header1}
      {header2}
      {header3}
    </div>
  );
};

// Q: Pass attribute into the tag in JSX
//const styleAttr = { backgroundColor : "green" };
// const header1 = <h1 key="header1" style="{{backgroundcolor: 'red'}}">header</h1>;
// const header2 = <h2 key="header2" style="{{backgroundcolor: 'yellow'}}">header2</h2>;
// const header3 = <h3 key="header3" style={styleAttr}>header3</h3>;

// Composition of Component (Add a component inside another)
// const AnotherComponent = function() {
//     return <h2> This is Another Component</h2>
// }

// const Header = () => {
//   return (
//     <div className="Title" key="title">
//       <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
//       <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
//       <AnotherComponent/>
//       <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NestedHeadercomponent />);
