import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks"

export const App = () => {

  return (
    <body className="min-h-screen bg-cyan-900">
      <Header title="Task Manager" subtitle="Never forget anything again!">
        <h1 className="mx-6 text-left">Add your tasks</h1>
      </Header>
      <Tasks title="Task 1" completed="false"/>
    </body>
  );
}
