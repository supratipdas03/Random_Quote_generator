import { useState } from "react";
import "./App.css";
import RandomQuotes from "./component/Randomqoutes/RandomQuotes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RandomQuotes />
    </>
  );
}

export default App;
