import React, { useState } from "react";
import "./App.css";
import Profile from "./Profile";
const App = () => {
  const [count, setCount] = useState(true);
  const modif = () => setCount(!count);
  return (
    <div>
      {count === true ? <Profile /> : " "}
      <button onClick={() => setCount(!count)}>Click me</button>
    </div>
  );
};

export default App;
