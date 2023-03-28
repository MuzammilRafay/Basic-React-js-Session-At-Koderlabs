import { useEffect, useState } from "react";
import CountDisplay from "./Components/CountDisplay/CountDisplay";
import "./App.css";

function App() {
  // let count = 0;
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count, "count");
  }, [count]);

  useEffect(() => {
    console.log("first render");
  }, []);

  const incrementHandler = (event) => {
    // count = count + 1;
    // setCount(count + 1);
    setCount((previousCount) => previousCount + 1);
    // console.log(count, "count");
  };

  const decrementHandler = (event) => {
    // count = count - 1;
    // setCount(count - 1);
    setCount((previousCount) => previousCount - 1);
    // console.log(count, "count");
  };

  const tasks = [
    {
      name: "task one",
    },
    {
      name: "task one",
    },
    {
      name: "task one",
    },
    {
      name: "task one",
    },
    {
      name: "task one",
    },
    {
      name: "task one",
    },
  ];

  return (
    <div className="App">
      {/* <h2>Count {count}</h2> */}
      <CountDisplay count={count} />
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>

      {tasks?.length &&
        tasks.map((singleTask, index) => {
          return <p key={index}>{singleTask?.name}</p>;
        })}
    </div>
  );
}

export default App;
