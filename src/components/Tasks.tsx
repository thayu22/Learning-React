export type Task = {
    title: String;
    completed: Boolean | string;
}

export const Tasks = ({ title, completed }: Task) => {
  return (
    <section>
        <div>
            <h1>{title}</h1>
            <h2>{String(completed)}</h2>
        </div>
    </section>
  )
}
