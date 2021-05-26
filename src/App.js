import React, { useState } from "react";
import "./App.css";
import Profile from "./Profile";
const App = () => {
  const [count, setCount] = useState(true);
  return (
    <div>
      {count === true ? <Profile /> : " "}
      <button onClick={() => setCount(!count)}>
        {count === true ? "turn off" : "turn on"}
      </button>
    </div>
  );
};

export default App;
