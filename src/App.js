import React from "react";

// first easy way
function App() {
  const title = "Blog Post";
  const body = "This is my blog post";
  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{body}</p>
      {Math.random() * (5 + 5)}
    </div>
  );
}
//II way
// function App() {
//   return React.createElement(
//     "div",
//     { className: "container" },
//     React.createElement("h1", {}, "My App")
//   );
// }
export default App;
