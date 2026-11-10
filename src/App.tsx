import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks"
import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen">
      <Header title="Task Manager" subtitle="Never forget anything again!">
        <h1 className="mx-6 text-left">Add your tasks</h1>
      </Header>
      <Tasks title="To do" completed="false"/>
      <button onClick={() => setCount(count+1)}>
        Increase 
      </button>
      <label>{count}</label>
    </div>
  );
}
