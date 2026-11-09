import type { Task } from "../types/taskItem"

type TaskItems = {
    task: Task;
}

export const Tasks = ({ task }: TaskItems) => {
  return (
    <section>
        <div>
            <h1>{task.title}</h1>
            <h2></h2>
        </div>
    </section>
  )
}
