import logo from "./logo.svg";

import "./App.css";
import MyBanana from "./MyButton";
import { useState } from "react";
import MembersList from "./MembersList";
function App() {
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount(count + 1);
  }
  return (
    <>
      <h2>Add members to Front-end development team </h2>
      <div className="App">
        <MembersList></MembersList>
      </div>
    </>
  );
}

export default App;
