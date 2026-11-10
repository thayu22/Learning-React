# Part 1

## Lesson 1: Understand your file structure

Your project should look something like this:

```
src/
│
├── components/
│   ├── Header.tsx
│   ├── TaskForm.tsx
│   ├── TaskList.tsx
│   └── TaskItem.tsx
│
├── App.tsx
├── main.tsx
└── index.css
```

What goes where?

| File | Responsibility |
| ----- | ----- |
| `main.tsx` | Starts the React application |
| `App.tsx` | Main application, connects components |
| `Header.tsx` | Displays the application heading |
| `TaskForm.tsx` | Lets users enter tasks |
| `TaskList.tsx` | Displays all tasks |
| `TaskItem.tsx` | Displays one individual task |
| `index.css` | Styling |

Important: Don't put everything into `App.tsx`. We want to learn component architecture, which means splitting an application into manageable pieces.

### First, understand imports and exports

Suppose you have a file called `Header.tsx`.

```
export const Header = () => {
  return <h1>TaskFlow</h1>;
};
```

`export` makes the component available to other files.

Now, in `App.tsx`:

```
import { Header } from "./components/Header";
```

This imports the component.

You can now use it like HTML:

```
<Header />
```

That's the basic idea of reusable components.

There are two common export styles:

```
export const Header = () => {};
```

This is a named export. You import it using `{ Header }`.

```
export default Header;
```

This is a default export. You import it without curly braces.

We'll use named exports throughout this project to keep things consistent.

## Your first practical task

### Step 1: Create your folders and files

In VS Code:

1. Open the `src` folder.  
2. Create a folder named `components`.  
3. Inside it, create `Header.tsx`.  
4. Create the other component files from the structure above.

Don't delete `main.tsx`, `index.css`, or your project configuration files.

### Step 2: Write your first component

Open `components/Header.tsx` and write:

```

export const Header = () => {
  return (
    <header>
      <h1>TaskFlow</h1>
      <p>Manage your tasks efficiently.</p>
    </header>
  );
};
```

Let's understand every piece.

* `export`: Makes the component available elsewhere.  
* `const Header`: Creates a variable containing our component function.  
* `() =>`: Arrow function syntax.  
* `return`: Returns the UI.  
* `<header>`: An HTML semantic element.  
* `<h1>`: A heading.  
* `;`: Ends the statement.

Why is the component called `Header` instead of `header`?

React components must start with uppercase letters. Lowercase JSX names are treated as built-in HTML elements.

### Step 3: Build your App component

Open `App.tsx` and write:

```

import { Header } from "./components/Header";

export const App = () => {
  return (
    <div>
      <Header />

      <main>
        <h2>Welcome to TaskFlow</h2>
        <p>Your personal task manager.</p>
      </main>
    </div>
  );
};
```

Notice that we're using `<Header />` inside another component.

That's component composition: building a larger interface by combining smaller components.

### Step 4: Understand main.tsx

Your `main.tsx` should look like this:

```

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

You don't need to modify this every time you build a component.

Think of it as the starting point that launches your application.

### Step 5: Run your application

Open the VS Code terminal:

```
npm run dev
```

Open the local URL Vite gives you.

Your first milestone

You should see:

# TaskFlow

Manage your tasks efficiently.

Welcome to TaskFlow

Your personal task manager.

If it works, you've successfully created your first small React component architecture.

## Lesson 2: A little JavaScript you need before continuing

React uses JavaScript constantly. There are a few concepts you need to understand before we build the actual task manager.

### 1\. Variables

Variables store information.

```
const name = "Alex";
let age = 20;
```

*   
  `const`: Cannot be reassigned.  
* `let`: Can be reassigned.

Use `const` by default. Use `let` when reassignment is necessary.

### 2\. Objects

Objects store related information together.

```
const task = {
  title: "Learn React",
  completed: false,
  priority: "High"
};
```

You access individual properties using dot notation:

```
task.title
task.completed
```

Why does this matter?

Because each task in our application will be an object containing its own information.

### 3\. Arrays

Arrays store multiple values.

```
const fruits = ["Apple", "Banana", "Orange"];
```

Access values by their index:

```
fruits[0]; // Apple
fruits[1]; // Banana
```

Remember: array indexes start at zero.

### 4\. Array methods

Three methods you'll use constantly in React:

`.map()`: Transform an array into another array.

```
const numbers = [1, 2, 3];

const doubled = numbers.map((number) => {
  return number * 2;
});
```

Result: `[2, 4, 6]`.

`.filter()`: Keep only items matching a condition.

```
const numbers = [1, 2, 3, 4];

const even = numbers.filter((number) => {
  return number % 2 === 0;
});
```

Result: `[2, 4]`.

`.find()`: Find the first matching item.

```
const numbers = [1, 2, 3, 4];

const result = numbers.find((number) => {
  return number > 2;
});
```

Result: `3`.

These three methods will become extremely useful when we add, filter, and display tasks.

### 5\. The spread operator (`...`)

This is particularly important in React.

Suppose you have:

```
const tasks = ["Study", "Exercise"];
```

You want to add another task.

You can create a new array:

```
const newTasks = [...tasks, "Read"];
```

Result:

```
["Study", "Exercise", "Read"]
```

The `...tasks` copies the existing array's elements into a new array.

Why do we care?

React state should generally be updated immutably: create a new array or object rather than modifying the existing one directly.

We'll use this when building our task manager.

## Your homework before Part 2

Don't just read this. Actually do these exercises in VS Code.

Part 1 checklist

0/6 completed  
Create the components folder and all four component files.  
Create Header.tsx and write the Header component.  
Import Header into App.tsx and display it.  
Create an array containing three task objects.  
Use .map() to display their titles using console.log().  
Use .filter() to find tasks that are not completed.

### One challenge before we move on

Try writing this yourself in `App.tsx`, replacing the temporary welcome content inside `<main>`:

```
const tasks = [
  { title: "Learn React", completed: false },
  { title: "Practice TypeScript", completed: true },
  { title: "Build TaskFlow", completed: false }
];
```

Then display all three task titles using `.map()`.

Don't worry if you get stuck. That's part of learning.

When you've completed Part 1, send me your `App.tsx` and `Header.tsx` (or your error message).

Next, we'll learn TypeScript interfaces, props, destructuring, and how to build `TaskItem` and `TaskList` properly. Then we'll make the application interactive with `useState`.

One concept at a time. By the end, you'll understand what you're building instead of just knowing which buttons to press in VS Code.

# PART 2

## TypeScript, Interfaces, Props & Component Architecture

Learning lesson 2  
Intermediate beginner

Estimated learning time: 35–45 minutes

In Part 1, we learned how React projects are structured, how components work, and some JavaScript fundamentals.

Now we're going to learn something extremely important: how components communicate with each other and how to organize data properly.

By the end of this lesson, you'll know how to create a task object, define its structure using TypeScript, pass it between components, and display it.

# 1\. What is TypeScript?

Before understanding interfaces and props, you need to understand TypeScript.

JavaScript allows you to create variables without specifying what type of data they should contain.

For example:

```
let age = 20;

age = 25;
age = "Hello";
```

JavaScript allows this.

TypeScript adds a type system that helps catch mistakes before your application runs.

For example:

```
let age: number = 20;

age = 25;

// This produces a TypeScript error:
age = "Hello";
```

Why?

Because we declared `age` as a number, and `"Hello"` is a string.

### Common TypeScript data types

| Type | Meaning | Example |
| ----- | ----- | ----- |
| `string` | Text | `"Alex"` |
| `number` | Numbers | `25` |
| `boolean` | True or false | `true` |
| `null` | Intentionally empty value | `null` |
| `undefined` | Value not assigned | `undefined` |
| `string[]` | Array of strings | `["A", "B"]` |
| `number[]` | Array of numbers | `[1, 2, 3]` |

### Syntax you should remember

```
const name: string = "Alex";

const age: number = 20;

const isStudent: boolean = true;

const subjects: string[] = [
  "Math",
  "Science",
  "Computer Science"
];
```

Notice this syntax:

```
const variableName: dataType = value;
```

The colon specifies the type.

### What is type inference?

TypeScript can sometimes figure out the type automatically.

```
const name = "Alex";
```

TypeScript understands that `name` is a string.

You don't always need to write `: string`.

Remember: TypeScript helps you catch mistakes by checking the types of your variables, objects, function parameters, and more.

# 2\. What are objects?

Objects allow us to store related information together.

Imagine you're building a task management application.

Each task needs:

* A title.  
* A completion status.  
* A unique ID.

Instead of creating three separate variables:

```
const title = "Learn React";
const completed = false;
const id = 1;
```

We can group everything into one object:

```
const task = {
  id: 1,
  title: "Learn React",
  completed: false
};
```

This is an object.

### Accessing object properties

You can access individual values using dot notation:

```
console.log(task.id);

console.log(task.title);

console.log(task.completed);
```

You can also use bracket notation:

```
console.log(task["title"]);
```

Both work, but dot notation is more commonly used.

### Changing object properties

In ordinary JavaScript:

```
task.completed = true;
```

Now the task is completed.

However, when working with React state, we generally create a new object instead of modifying the existing object directly. We'll cover that properly in Part 3\.

# 3\. What are interfaces?

This is one of the most important TypeScript concepts.

An interface defines the structure an object should follow.

Imagine you have 100 tasks in your application.

You want every task to have:

* An ID that is a number.  
* A title that is a string.  
* A completed property that is a boolean.

Instead of repeatedly specifying those types, create an interface.

### Syntax

```
interface Task {
  id: number;
  title: string;
  completed: boolean;
}
```

Let's understand it:

* `interface`: Keyword used to define an interface.  
* `Task`: Name of the interface.  
* `id`: Property name.  
* `number`: Required data type.  
* `title`: Must contain a string.  
* `completed`: Must contain true or false.

Now you can use this interface when creating objects.

```
const task: Task = {
  id: 1,
  title: "Learn React",
  completed: false
};
```

TypeScript checks whether the object follows the interface.

For example:

```
const task: Task = {
  id: "one",
  title: "Learn React",
  completed: false
};
```

This produces an error because `id` must be a number, not a string.

### Multiple objects using the same interface

```
const task1: Task = {
  id: 1,
  title: "Learn React",
  completed: false
};

const task2: Task = {
  id: 2,
  title: "Practice TypeScript",
  completed: true
};
```

Both objects follow the same structure.

### Optional properties

Sometimes a property isn't required.

You can use `?` to make it optional.

```
interface Task {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
}
```

Now a task can have a description, but it doesn't have to.

Both objects are valid:

```
const task1: Task = {
  id: 1,
  title: "Learn React",
  completed: false
};

const task2: Task = {
  id: 2,
  title: "Build a website",
  completed: false,
  description: "Practice React components"
};
```

### Interface vs Type

You might also encounter `type`.

```
type Task = {
  id: number;
  title: string;
  completed: boolean;
};
```

For simple object structures, `type` and `interface` are both useful.

A practical distinction:

* `interface` is commonly used to describe object structures and can be extended or merged.  
* `type` can describe objects too, but also supports unions, intersections, and other combinations.

For this project, we'll use interfaces for our task objects and component props.

Remember: An interface is like a blueprint. It defines what an object should look like.

# 4\. What are props in React?

Now we get to the main event.

Props allow components to communicate by passing information from a parent component to a child component.

Think about a website with several product cards.

Each card has the same design, but different information.

Instead of creating a separate component for every product, you create one reusable component and pass it different props.

The same idea applies to our tasks.

### First, understand parent and child components

Consider:

```
const App = () => {
  return (
    <div>
      <Header />
      <TaskList />
    </div>
  );
};
```

Here:

* `App` is the parent component.  
* `Header` is a child component.  
* `TaskList` is another child component.

The parent can pass information to its children.

### Passing props

For example:

```
<Header title="TaskFlow" />
```

We are passing a prop called `title`.

Now, the Header component must receive it.

```
interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};
```

Let's break down this syntax:

```
({ title }: HeaderProps)
```

*   
  `{ title }` extracts the title property from the props object.  
* `HeaderProps` specifies the expected structure of those props.

This is called destructuring.

### What is destructuring?

Destructuring allows you to extract properties from objects into variables.

Without destructuring:

```
export const Header = (props: HeaderProps) => {
  return <h1>{props.title}</h1>;
};
```

With destructuring:

```
export const Header = ({ title }: HeaderProps) => {
  return <h1>{title}</h1>;
};
```

Both work.

The second version is shorter and very common in React.

### Passing multiple props

```
<Header
  title="TaskFlow"
  subtitle="Manage your tasks"
/>
```

Define their types:

```
interface HeaderProps {
  title: string;
  subtitle: string;
}
```

Receive them:

```
export const Header = ({
  title,
  subtitle
}: HeaderProps) => {
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
};
```

Remember: Props are inputs to components. They allow one component to reuse another component with different information.

# 5\. What is component composition?

Component composition means building larger components by combining smaller components.

Imagine our TaskFlow application:

```
App
│
├── Header
│
├── TaskForm
│
└── TaskList
    │
    ├── TaskItem
    ├── TaskItem
    └── TaskItem
```

Each component has a responsibility.

| Component | What it does |
| ----- | ----- |
| `App` | Combines everything |
| `Header` | Displays the title |
| `TaskForm` | Accepts new tasks |
| `TaskList` | Displays all tasks |
| `TaskItem` | Displays an individual task |

Why is this useful?

Imagine writing your entire application in one 1,000-line file.

Finding bugs, changing designs, and understanding the code would become unnecessarily difficult.

Smaller components make applications easier to:

* Understand.  
* Reuse.  
* Maintain.  
* Debug.  
* Expand.

### What is the children prop?

Remember this:

```
<Step title="React">
  <p>Learn components.</p>
</Step>
```

The content inside the component tags becomes a special prop called `children`.

You can receive it like this:

```
import type { ReactNode } from "react";

interface StepProps {
  title: string;
  children: ReactNode;
}

export const Step = ({
  title,
  children
}: StepProps) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
```

`ReactNode` is a React type representing renderable content.

This is useful when building reusable layouts, cards, wrappers, and containers.

# 6\. Let's build the TaskFlow components

Now we'll put everything together.

This is the practical part of the lesson.

## Step 1: Create the Task interface

Create a new file:

```
src/
└── types/
    └── task.ts
```

Inside `task.ts`, write:

```

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}
```

Why a separate file?

Because multiple components will need to understand what a Task looks like.

Instead of defining the interface in every component, we define it once and import it wherever needed.

## Step 2: Build TaskItem

Open:

```
components/TaskItem.tsx
```

Write:

```

import type { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <div>
      <h3>{task.title}</h3>

      <p>
        Status: {task.completed ? "Completed" : "Pending"}
      </p>
    </div>
  );
};
```

Let's understand what's happening.

First:

```
import type { Task } from "../types/task";
```

We're importing the Task interface.

The `type` keyword tells TypeScript that this import is only needed for type checking, not as a runtime JavaScript value.

Next:

```
interface TaskItemProps {
  task: Task;
}
```

This component expects one prop called `task`.

That prop must follow the Task interface.

Finally:

```
export const TaskItem = ({ task }: TaskItemProps) => {
```

We're receiving the task object and extracting it using destructuring.

And:

```
{task.completed ? "Completed" : "Pending"}
```

This is a ternary operator.

Its syntax is:

```
condition ? valueIfTrue : valueIfFalse
```

If `task.completed` is true, it displays Completed. Otherwise, it displays Pending.

## Step 3: Build TaskList

Open:

```
components/TaskList.tsx
```

Write:

```

import type { Task } from "../types/task";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <div>
      <h2>My Tasks</h2>

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
};
```

This is where several concepts come together.

### Understand `Task[]`

```
tasks: Task[];
```

This means tasks is an array containing Task objects.

### Understand `.map()`

```
tasks.map((task) => (
  <TaskItem key={task.id} task={task} />
))
```

For every task in the array, React creates a TaskItem component.

### Understand `key`

```
key={task.id}
```

React needs a stable key to identify individual list items.

We use the task's unique ID.

### Understand `task={task}`

We're passing the current task object into the TaskItem component.

Notice something interesting:

`TaskList` doesn't need to know how each task is visually constructed. It just passes the data to `TaskItem`.

That's good component architecture.

## Step 4: Connect everything in App.tsx

Open `App.tsx`.

Replace its contents with:

```

import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import type { Task } from "./types/task";

export const App = () => {

  const tasks: Task[] = [
    {
      id: 1,
      title: "Learn React",
      completed: false
    },
    {
      id: 2,
      title: "Practice TypeScript",
      completed: true
    },
    {
      id: 3,
      title: "Build TaskFlow",
      completed: false
    }
  ];

  return (
    <div>
      <Header />

      <main>
        <h1>Welcome to TaskFlow</h1>

        <TaskList tasks={tasks} />
      </main>
    </div>
  );
};
```

Make sure your Header component from Part 1 still works.

If you changed its props to require a title and subtitle, pass those props when using it here.

### What just happened?

App.tsx

Creates the tasks array

TaskList

Receives tasks through props

TaskItem

Receives one task at a time

Displays task information

Title and completion status

Your application should display:

Welcome to TaskFlow

My Tasks

Learn React

Pending

Practice TypeScript

Completed

Build TaskFlow

Pending

You have now created a reusable component system using TypeScript interfaces and props.

# 7\. Important concepts you should know beyond your notes

These are useful in normal development, not just this project.

### A. Destructuring

Extract values from objects.

```
const user = {
  name: "Alex",
  age: 20
};

const { name, age } = user;
```

Now you can use `name` and `age` directly.

### B. Spread operator

Copy existing object properties into a new object.

```
const task = {
  id: 1,
  title: "Learn React",
  completed: false
};

const updatedTask = {
  ...task,
  completed: true
};
```

The original object stays unchanged.

### C. Ternary operator

Short way of writing conditional expressions.

```
const message = isLoggedIn
  ? "Welcome"
  : "Please log in";
```

### D. Arrow functions

A shorter way to write functions.

Traditional:

```
function greet() {
  return "Hello";
}
```

Arrow function:

```
const greet = () => {
  return "Hello";
};
```

Shorter arrow function:

```
const greet = () => "Hello";
```

### E. Importing types

When importing an interface or type, you can use:

```
import type { Task } from "../types/task";
```

This keeps type-only imports separate from runtime imports.

# 8\. Knowledge check

Try these without looking at the explanations above.

Part 2 quiz

0/6 answered

1\. What does an interface do?

Creates a React component  
Defines the structure of an object  
Starts the application

2\. What does Task\[\] mean?

One Task object  
An array of Task objects  
A function called Task

3\. What are props used for?

Passing information between components  
Styling HTML  
Starting Vite

4\. What does destructuring do?

Deletes object properties  
Extracts properties into variables  
Converts strings into numbers

5\. Why does a list need a key?

To make text bold  
To identify elements between renders  
To add CSS

6\. What does .map() do?

Filters an array  
Transforms each array item  
Deletes an array  
Check my answers

# 9\. Part 2 revision sheet

These are the concepts worth putting into your notes and revising before moving on.

| Concept | Remember this |
| ----- | ----- |
| TypeScript | JavaScript with static type checking |
| Interface | Blueprint for an object's structure |
| Object | Collection of related key-value pairs |
| Props | Information passed from parent to child |
| Destructuring | Extracting object properties |
| Component composition | Combining smaller components |
| `ReactNode` | Type for content React can render |
| `.map()` | Transform every array item |
| `.filter()` | Keep matching array items |
| Spread `...` | Copy properties or array elements |
| Ternary | Short conditional expression |
| `key` | Stable identity for list elements |

What you should be able to do after Part 2:

* Create an interface for a data object.  
* Create an array of typed objects.  
* Pass objects through props.  
* Receive props using destructuring.  
* Create reusable components.  
* Render arrays using `.map()`.  
* Organize components across different files.

## What's coming in Part 3?

Next lesson

React State, useState, Events and Updating Data

This is where TaskFlow becomes an actual application instead of a static display.

We'll implement:

1. Adding new tasks.  
2. Marking tasks as completed.  
3. Deleting tasks.  
4. Updating arrays using the spread operator.  
5. Understanding why React needs a new state value to trigger a re-render.  
6. Understanding event handlers and event objects.

We'll also learn the difference between ordinary variables and React state, which is one of the biggest things beginners struggle with.

One important thing: Don't rush through these lessons just to reach the finished application. Being able to explain why `TaskList` passes a task to `TaskItem` is much more valuable than being able to type those components from memory.

# Part 3

## State, Events and Making Your App Interactive

Project: TaskFlow \| Level: Beginner \| Estimated study time: 60–90 minutes

Part 1 introduced the project structure and basic React components. Part 2 covered TypeScript, interfaces and props. Now we're getting to the part where React becomes genuinely useful: making things happen when someone interacts with your app.

By the end of this lesson, TaskFlow will let users:

* Add new tasks.  
* Mark tasks as completed.  
* Delete tasks.  
* See the task list update automatically.  
* See updated task statistics.

You don't need to complete the coding exercises while studying this document. Read the explanations, understand the code, and use the practical sections when you're back at VS Code.

# 1\. What is state in React?

Imagine your TaskFlow app displays three tasks.

At first, the tasks are:

1. Learn React  
2. Practice TypeScript  
3. Build TaskFlow

Now imagine the user clicks a button to mark "Learn React" as completed.

The screen needs to change.

React uses something called state to remember information that can change while the app is running.

Examples of state include:

* A task list.  
* A counter.  
* Whether a menu is open.  
* The text currently typed into an input.  
* Whether a user has selected a particular option.

In React, we usually manage state using a hook called `useState`.

## 1.1 What is a hook?

A hook is a special React function that lets a component use React features.

Some hooks you'll learn about during this course:

| Hook | Purpose |
| ----- | ----- |
| `useState` | Stores information that can change |
| `useEffect` | Runs code in response to certain changes |
| `useRef` | Stores a value or references a DOM element |
| `useMemo` | Caches the result of a calculation |

For now, we're focusing on `useState`.

# 2\. Understanding useState

First, you need to import it.

At the top of your `App.tsx` file:

```
import { useState } from "react";
```

Now you can use it inside your component.

```
import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};
```

Let's break this down.

```
const [count, setCount] = useState(0);
```

This line creates a state variable.

| Part | Meaning |
| ----- | ----- |
| `count` | The current state value |
| `setCount` | The function used to update the value |
| `useState(0)` | Creates the state with an initial value of `0` |

The initial value is `0`, so the page displays:

# 0

Example counter display

You might wonder why we need `setCount` instead of simply changing `count`.

That's because React needs to know when information changes so it can update the screen.

Important: Never directly change a state variable.

Incorrect:

```
count = count + 1;
```

Correct:

```
setCount(count + 1);
```

## 2.1 Updating state with a button

Let's make the counter interactive.

```
import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};
```

Now, when the user clicks the button:

1. The button's `onClick` event runs.  
2. `setCount` updates the state.  
3. React renders the component again.  
4. The new number appears on the screen.

This is one of the most important ideas in React.

# 3\. React re-rendering

A re-render happens when React runs a component again to update its displayed output.

For example:

* The component initially displays `Counter: 0`.  
* You click Increase.  
* The state becomes `1`.  
* React renders the component again.  
* The screen displays `Counter: 1`.

How a state update works

1\. User clicks a button

2\. State update function runs

3\. React renders the component again

Updated

4\. The screen shows the new value

You don't manually tell React to update the HTML. You update state, and React handles the screen update.

This is why React is called a declarative UI library: you describe what the screen should look like for the current data.

# 4\. Updating state based on previous state

There are two common ways to update state.

Method 1: Use the current value

```
setCount(count + 1);
```

Method 2: Use the previous value

```
setCount((previousCount) => previousCount + 1);
```

The second method is especially useful when the new value depends on the previous value.

For example:

```
const increase = () => {
  setCount((previousCount) => previousCount + 1);
};
```

Here:

* `previousCount` is the previous state value.  
* `=>` means this is an arrow function.  
* `previousCount + 1` is the new value.

You can name the parameter whatever you want:

```
setCount((oldValue) => oldValue + 1);
```

The name doesn't matter. Its purpose does.

Rule of thumb: When calculating new state from old state, prefer the previous-state function.

# 5\. Understanding events in React

An event is something that happens when a user interacts with your app.

Common events include:

| Event | What it means |
| ----- | ----- |
| `onClick` | User clicks something |
| `onChange` | An input value changes |
| `onSubmit` | A form is submitted |
| `onMouseEnter` | Mouse enters an element |
| `onKeyDown` | User presses a key |

React uses camelCase event names.

HTML traditionally uses names like `onclick`, but React uses `onClick`.

Example:

```
<button onClick={() => alert("Hello!")}>
  Click me
</button>
```

When the user clicks the button, the alert appears.

## 5.1 Event handlers

An event handler is a function that runs when an event happens.

Instead of writing all your logic inside the button, you can create a separate function.

```
const handleClick = () => {
  console.log("The button was clicked");
};
```

Then connect it to the button:

```
<button onClick={handleClick}>
  Click me
</button>
```

Notice that we write:

```
onClick={handleClick}
```

Not:

```
onClick={handleClick()}
```

The first passes the function to React so React can call it when the event happens.

The second calls the function immediately during rendering. A small punctuation difference, because apparently programming needed more ways to punish people.

# 6\. Building TaskFlow: Adding state to your task list

Now we're going to apply everything to your actual project.

Your project should have a structure similar to this:

```
src/
  components/
    Header.tsx
    TaskItem.tsx
    TaskList.tsx
  types/
    task.ts
  App.tsx
  main.tsx
  index.css
```

If you don't have a `types` folder, create one inside `src`.

## 6.1 Check your Task type

Open:

`src/types/task.ts`

Make sure it contains:

```
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}
```

This interface describes what a task looks like.

Each task must have:

* An `id` that is a number.  
* A `title` that is a string.  
* A `completed` value that is true or false.

## 6.2 Create a task list using useState

Open `src/App.tsx`.

Replace its contents with:

```
import { useState } from "react";

import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

import type { Task } from "./types/task";

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Practice TypeScript",
      completed: true,
    },
    {
      id: 3,
      title: "Build TaskFlow",
      completed: false,
    },
  ]);

  return (
    <div>
      <Header />

      <main>
        <h1>My Tasks</h1>

        <TaskList tasks={tasks} />
      </main>
    </div>
  );
};
```

Let's examine the most important line:

```
const [tasks, setTasks] = useState<Task[]>([...]);
```

This creates state that stores an array of tasks.

`Task[]` means an array containing objects that follow the `Task` interface.

Why do we need this?

Because we want to change the task list while the app is running. When the user adds or deletes a task, React needs to know about the change.

# 7\. Updating arrays in React

This is extremely important.

In JavaScript, you might be tempted to change an array directly.

For example:

```
tasks.push(newTask);
```

But this is not the correct way to update React state.

React expects you to create a new array and pass it to the state setter.

Why?

Because React uses the new state value to determine whether it needs to render the component again. Directly mutating an existing array can cause updates to be missed or behave unexpectedly.

Instead, use methods like:

| Method | Purpose |
| ----- | ----- |
| `map()` | Create a new array by changing or transforming items |
| `filter()` | Create a new array containing only matching items |
| `...` spread | Copy items into a new array |
| `find()` | Find the first matching item |

Let's look at each one.

## 7.1 The spread operator

The spread operator is three dots:

```
...
```

It allows you to copy the contents of an array or object.

Example:

```
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4];
```

Now:

```
newNumbers = [1, 2, 3, 4];
```

The original array remains unchanged.

For TaskFlow, this means we can add a task like this:

```
setTasks([...tasks, newTask]);
```

This creates a new array containing all the old tasks and the new task.

## 7.2 Using map()

The `map()` method goes through an array and creates a new array.

Example:

```
const numbers = [1, 2, 3];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});
```

Result:

```
[2, 4, 6]
```

For TaskFlow, we can use `map()` to update one task without changing the others.

```
const updatedTasks = tasks.map((task) => {
  if (task.id === 2) {
    return {
      ...task,
      completed: true,
    };
  }

  return task;
});
```

What happens here?

1. React goes through every task.  
2. It checks whether the task ID is `2`.  
3. If it is, it creates a copy with `completed: true`.  
4. Otherwise, it returns the original task.  
5. The result is a new array.

The expression:

```
{
  ...task,
  completed: true,
}
```

means:

"Copy all the existing properties of this task, then set `completed` to true."

## 7.3 Using filter()

The `filter()` method creates a new array containing only items that pass a condition.

Example:

```
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
```

Result:

```
[2, 4]
```

For TaskFlow, we can delete a task by filtering it out:

```
const updatedTasks = tasks.filter((task) => {
  return task.id !== 2;
});
```

This keeps every task except the one with ID `2`.

# 8\. Adding tasks to TaskFlow

Let's create a function that adds a new task.

Inside `App`, below your `useState` declaration, write:

```
const addTask = () => {
  const newTask: Task = {
    id: Date.now(),
    title: "New Task",
    completed: false,
  };

  setTasks((previousTasks) => [
    ...previousTasks,
    newTask,
  ]);
};
```

### Understanding the code

`Date.now()` returns the current time in milliseconds.

We're using it to generate a simple unique ID for this small project.

```
const newTask: Task = {
  id: Date.now(),
  title: "New Task",
  completed: false,
};
```

This creates a new object that follows the Task interface.

Then:

```
setTasks((previousTasks) => [
  ...previousTasks,
  newTask,
]);
```

This creates a new array with:

* Every existing task.  
* The new task at the end.

Now add a button to your JSX:

```
<button onClick={addTask}>
  Add Task
</button>
```

When the button is clicked, `addTask` runs.

Important: At this stage, every click adds a task with the same title, "New Task". We'll make the title user-controlled in Part 4\.

# 9\. Completing tasks

Let's create a function that changes a task's completion status.

Inside `App.tsx`, add:

```
const toggleTask = (id: number) => {
  setTasks((previousTasks) =>
    previousTasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    })
  );
};
```

This function accepts an ID.

```
(id: number)
```

That tells TypeScript that the function expects a number.

The important part is:

```
completed: !task.completed
```

The `!` symbol means NOT.

| Current value | New value |
| ----- | ----- |
| `true` | `false` |
| `false` | `true` |

So clicking a task can switch it between completed and pending.

But we need to pass this function to our child component.

# 10\. Passing functions through props

Remember props from Part 2?

Props allow a parent component to pass information to a child component.

They can also pass functions.

Open:

`src/components/TaskList.tsx`

Replace the code with:

```
import type { Task } from "../types/task";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
}

export const TaskList = ({
  tasks,
  onToggleTask,
}: TaskListProps) => {
  return (
    <div>
      <h2>My Tasks</h2>

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
        />
      ))}
    </div>
  );
};
```

Let's understand this new line:

```
onToggleTask: (id: number) => void;
```

This is a TypeScript function type.

It means:

* The function accepts one parameter.  
* The parameter is a number.  
* The function doesn't return a meaningful value.

Now open:

`src/components/TaskItem.tsx`

Replace it with:

```
import type { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  onToggleTask: (id: number) => void;
}

export const TaskItem = ({
  task,
  onToggleTask,
}: TaskItemProps) => {
  return (
    <div>
      <h3>{task.title}</h3>

      <p>
        Status: {task.completed ? "Completed" : "Pending"}
      </p>

      <button onClick={() => onToggleTask(task.id)}>
        {task.completed ? "Mark as Pending" : "Complete"}
      </button>
    </div>
  );
};
```

The button calls:

```
onToggleTask(task.id)
```

It sends the current task's ID back to the parent component.

The parent owns the state, so the parent updates the task list.

This is an important React pattern:

The parent owns the state, and child components receive the information and functions they need through props.

# 11\. Deleting tasks

Let's add a delete function to `App.tsx`.

```
const deleteTask = (id: number) => {
  setTasks((previousTasks) =>
    previousTasks.filter((task) => task.id !== id)
  );
};
```

This removes the task with the matching ID.

Now we need to pass it through our components.

In `TaskList.tsx`, add this property to the interface:

```
onDeleteTask: (id: number) => void;
```

Update the component's destructuring:

```
export const TaskList = ({
  tasks,
  onToggleTask,
  onDeleteTask,
}: TaskListProps) => {
```

Then pass the function to `TaskItem`:

```
<TaskItem
  key={task.id}
  task={task}
  onToggleTask={onToggleTask}
  onDeleteTask={onDeleteTask}
/>
```

Your full `TaskList.tsx` should now be:

```
import type { Task } from "../types/task";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export const TaskList = ({
  tasks,
  onToggleTask,
  onDeleteTask,
}: TaskListProps) => {
  return (
    <div>
      <h2>My Tasks</h2>

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};
```

Now update `TaskItem.tsx`:

```
import type { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export const TaskItem = ({
  task,
  onToggleTask,
  onDeleteTask,
}: TaskItemProps) => {
  return (
    <div>
      <h3>{task.title}</h3>

      <p>
        Status: {task.completed ? "Completed" : "Pending"}
      </p>

      <button onClick={() => onToggleTask(task.id)}>
        {task.completed ? "Mark as Pending" : "Complete"}
      </button>

      <button onClick={() => onDeleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
};
```

# 12\. Put everything together in App.tsx

Your `App.tsx` should now contain:

```
import { useState } from "react";

import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

import type { Task } from "./types/task";

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Practice TypeScript",
      completed: true,
    },
    {
      id: 3,
      title: "Build TaskFlow",
      completed: false,
    },
  ]);

  const addTask = () => {
    const newTask: Task = {
      id: Date.now(),
      title: "New Task",
      completed: false,
    };

    setTasks((previousTasks) => [
      ...previousTasks,
      newTask,
    ]);
  };

  const toggleTask = (id: number) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }

        return task;
      })
    );
  };

  const deleteTask = (id: number) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <div>
      <Header />

      <main>
        <h1>My Tasks</h1>

        <button onClick={addTask}>
          Add Task
        </button>

        <TaskList
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </main>
    </div>
  );
};
```

This assumes your `Header.tsx` is the no-props version from Part 1, and that your `TaskList.tsx`, `TaskItem.tsx` and `task.ts` files match the versions above.

Milestone reached

Your app now supports adding, completing and deleting tasks. The next step is making task creation work with actual user input.

# 13\. A few more JavaScript concepts you need

These aren't React-specific, but you'll use them constantly.

## 13.1 Arrow functions

An arrow function is another way to write a function.

Traditional function:

```
function sayHello() {
  console.log("Hello");
}
```

Arrow function:

```
const sayHello = () => {
  console.log("Hello");
};
```

Both do the same thing.

You'll see arrow functions constantly in React.

## 13.2 Ternary operators

A ternary operator is a short way of writing an `if/else` expression.

Normal `if/else`:

```
if (task.completed) {
  return "Completed";
} else {
  return "Pending";
}
```

Ternary:

```
task.completed ? "Completed" : "Pending"
```

The structure is:

```
condition ? valueIfTrue : valueIfFalse
```

This is useful inside JSX.

## 13.3 Strict equality

You'll often see:

```
task.id === id
```

The `===` operator checks whether two values are equal without automatically converting their types.

For example:

```
5 === 5
```

Returns `true`.

```
5 === "5"
```

Returns `false`.

Use `===` and `!==` rather than `==` and `!=` in normal application code.

## 13.4 Boolean values

A boolean is a value that can only be:

```
true
```

or:

```
false
```

Our task interface uses a boolean:

```
completed: boolean;
```

This is what allows us to determine whether a task is finished.

# 14\. Common mistakes and how to fix them

| Mistake | Why it's a problem | Correct approach |
| ----- | ----- | ----- |
| `tasks.push(newTask)` | Mutates the existing array | `setTasks([...tasks, newTask])` |
| `count = count + 1` | Doesn't update React state | `setCount(count + 1)` |
| `onClick={handleClick()}` | Calls the function during rendering | `onClick={handleClick}` |
| Forgetting `key` in `.map()` | React can't reliably track list items | Add `key={item.id}` |
| Passing the wrong prop name | Child receives the wrong or missing prop | Match the names |
| Using a string where a number is expected | TypeScript reports a type mismatch | Use the correct type |

One other thing: if TypeScript gives you a red underline, don't immediately delete the code and hope the computer forgives you. Read the error. It usually tells you which file and line caused the problem.

# 15\. Practice exercises

Try these when you're back at your computer.

Your practice checklist

0/5 completed

Create a second Add Task button

Add another button that calls the same addTask function.

Change the default task titles

Replace the three example task names with your own.

Add a fourth initial task

Add another object to the initial tasks array.

Add a Clear All button

Create a function that sets the tasks array to an empty array.

Show a message when there are no tasks

Use a conditional expression to display 'No tasks yet' when the array is empty.

# 16\. Knowledge check

Try answering these without looking back.

Part 3 quiz

0/5 answered

1\. What does useState do?

Creates a CSS class  
Stores information that can change  
Imports a component

2\. What should you use to update an array in React?

Directly modify the original array  
Create a new array  
Delete the state variable

3\. What does map() do?

Creates a new array by transforming each item  
Deletes an item  
Sorts an array automatically

4\. What does filter() do?

Changes every item  
Keeps items that match a condition  
Adds an item to the end

5\. Why do we pass functions through props?

So child components can trigger logic owned by the parent  
To make CSS work  
To stop React rendering  
Check answers

# 17\. Revision notes: What you should remember

| Concept | Remember this |
| ----- | ----- |
| State | Information that can change |
| `useState` | React hook for managing state |
| Setter function | Updates state and triggers a re-render |
| Re-render | React runs a component again to update its output |
| Event | Something a user does, such as clicking |
| Event handler | Function that responds to an event |
| `onClick` | Handles clicks |
| `map()` | Transforms array items into a new array |
| `filter()` | Keeps matching array items |
| Spread operator | Copies array or object contents |
| Props | Passes information and functions between components |
| Immutable update | Creates new data instead of modifying existing state |

## What comes in Part 4?

Forms, controlled inputs and conditional rendering.

We'll teach TaskFlow to accept real task names typed by the user instead of adding the same boring "New Task" every time. We'll also cover:

* `useState` for input values.  
* The `onChange` event.  
* Controlled components.  
* Form submission with `onSubmit`.  
* Preventing page refresh with `event.preventDefault()`.  
* Conditional rendering with `&&` and ternaries.  
* Empty states and task counters.  
* More Tailwind styling.

The big idea from Part 3: React doesn't work by you manually changing what appears on the page. You update state, and React takes care of reflecting that change in the UI. Once that clicks, a lot of React starts making sense

# Part 4

TaskFlow \| Beginner \| Approximately 35–45 minutes

## 1\. What are controlled inputs?

So far, our Add Task button creates a task called `"New Task"`.

That's not very useful. The user should be able to type their own task.

For example:

Add a new task

Enter task name...

Add Task

Illustration of the form we'll create.

A controlled input is an input whose value is controlled by React state.

This means:

1. React stores the input's current value.  
2. The user types something.  
3. The input triggers an event.  
4. React updates the state.  
5. The input displays the updated state.

## 2\. Create an input state

Open `src/App.tsx`.

Your existing imports should include:

```
import { useState } from "react";
```

Inside your `App` component, below your existing tasks state, add:

```
const [newTaskTitle, setNewTaskTitle] = useState("");
```

Let's break this down:

* `newTaskTitle` stores the text entered by the user.  
* `setNewTaskTitle` updates that text.  
* `useState("")` starts with an empty string.

Why an empty string?

Because the input should initially contain nothing.

## 3\. Create the input element

Inside your JSX, above the `TaskList` component, add:

```
<input
  type="text"
  placeholder="Enter a task..."
  value={newTaskTitle}
  onChange={(event) => setNewTaskTitle(event.target.value)}
/>
```

Let's understand each property.

| Code | Purpose |
| ----- | ----- |
| `type="text"` | Makes this a text input |
| `placeholder` | Displays example text when empty |
| `value={newTaskTitle}` | Connects the input to React state |
| `onChange` | Runs when the user changes the input |
| `event.target.value` | Gets the text currently in the input |

### Understanding event.target.value

When the user types something, React provides information about the event.

We can access the input's current value using:

```
event.target.value
```

For example, if the user types:

`Finish homework`

Then:

```
event.target.value
```

contains:

`"Finish homework"`

We use the setter to save that value:

```
setNewTaskTitle(event.target.value);
```

Important: In a controlled input, you generally use both `value` and `onChange`. Without the change handler, React keeps forcing the input to display the same value.

## 4\. Make the Add Task button use the input

Find your existing `addTask` function in `App.tsx`.

Replace it with:

```
const addTask = () => {
  if (newTaskTitle.trim() === "") {
    return;
  }

  const newTask: Task = {
    id: Date.now(),
    title: newTaskTitle,
    completed: false,
  };

  setTasks((previousTasks) => [
    ...previousTasks,
    newTask,
  ]);

  setNewTaskTitle("");
};
```

There are two new concepts here.

First: `.trim()`

```
newTaskTitle.trim() === ""
```

`.trim()` removes spaces from the beginning and end of a string.

For example:

```
"   Learn React   ".trim()
```

Returns:

```
"Learn React"
```

This prevents users from adding tasks that contain only spaces.

Second: resetting the input

```
setNewTaskTitle("");
```

After adding the task, we clear the input.

The input updates automatically because its value is connected to React state.

## 5\. Your updated App.tsx

At this point, your complete file should look like this:

```
import { useState } from "react";

import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

import type { Task } from "./types/task";

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Practice TypeScript",
      completed: true,
    },
    {
      id: 3,
      title: "Build TaskFlow",
      completed: false,
    },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");

  const addTask = () => {
    if (newTaskTitle.trim() === "") {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: newTaskTitle,
      completed: false,
    };

    setTasks((previousTasks) => [
      ...previousTasks,
      newTask,
    ]);

    setNewTaskTitle("");
  };

  const toggleTask = (id: number) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }

        return task;
      })
    );
  };

  const deleteTask = (id: number) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <div>
      <Header />

      <main>
        <h1>My Tasks</h1>

        <div>
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTaskTitle}
            onChange={(event) =>
              setNewTaskTitle(event.target.value)
            }
          />

          <button onClick={addTask}>
            Add Task
          </button>
        </div>

        <TaskList
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </main>
    </div>
  );
};
```

# 6\. What is conditional rendering?

Conditional rendering means displaying something only when a particular condition is true.

For example:

* Display "Completed" if a task is finished.  
* Display "Pending" if it isn't finished.  
* Display a message if the task list is empty.

React lets us use normal JavaScript conditions inside JSX.

## 6.1 Ternary operator

You've already seen this in `TaskItem.tsx`:

```
{task.completed ? "Completed" : "Pending"}
```

The structure is:

```
condition ? valueIfTrue : valueIfFalse
```

For our tasks:

* If `task.completed` is true, display Completed.  
* Otherwise, display Pending.

## 6.2 Using &&

Another way to conditionally display something is the `&&` operator.

Example:

```
{tasks.length === 0 && (
  <p>No tasks yet!</p>
)}
```

This means:

"If the number of tasks is zero, display this paragraph."

Why does this work?

In JavaScript, `&&` only evaluates the second expression if the first condition is true.

## 6.3 Display a message when the list is empty

Open `src/components/TaskList.tsx`.

Find:

```
<h2>My Tasks</h2>
```

Immediately below it, add:

```
{tasks.length === 0 && (
  <p>No tasks yet. Add your first task!</p>
)}
```

Now, when there are no tasks, the message appears.

When there are tasks, it disappears.

## 6.4 Display different content based on completion

In `TaskItem.tsx`, you already have:

```
{task.completed ? "Mark as Pending" : "Complete"}
```

You can also conditionally change the styling.

For example:

```
<h3
  className={
    task.completed
      ? "line-through text-gray-400"
      : "text-white"
  }
>
  {task.title}
</h3>
```

This gives completed tasks a crossed-out appearance.

The important thing to understand is that the class changes depending on the task's state.

# 7\. Test what you've built

When you're back in VS Code, run:

```
npm run dev
```

Try the following:

1. Type "Study React" into the input.  
2. Click Add Task.  
3. Check that the task appears.  
4. Check that the input clears.  
5. Complete the task.  
6. Delete the task.  
7. Delete every task and check the empty-list message.

If those work, you've successfully implemented controlled inputs and conditional rendering in TaskFlow.

# 8\. Part 4 revision notes

| Concept | Meaning |
| ----- | ----- |
| Controlled input | Input whose value is managed by React state |
| `value` | Sets the displayed input value |
| `onChange` | Responds to input changes |
| `event.target.value` | Gets the current input text |
| `.trim()` | Removes spaces from string edges |
| Ternary operator | Chooses between two values |
| `&&` | Displays something when a condition is true |
| Conditional rendering | Displays different UI depending on a condition |

That's Part 4\. The next README topic is derived state and `useEffect`, including what happens when a component mounts, updates and unmounts. No additional features outside your README.

# Part 5

Final README lesson \| React \+ TypeScript \| Beginner level

## What this lesson covers

1. Derived state.  
2. The `useEffect` hook.  
3. Mounting, updating and unmounting.  
4. Effect cleanup functions.  
5. The `useRef` hook.  
6. Persistent values with `useRef`.  
7. DOM manipulation with `useRef`.  
8. The `useMemo` hook.  
9. Interactive demonstrations of the hooks.  
10. Bringing the README concepts together in TaskFlow.

No localStorage, APIs, routing or unrelated features.

## 1\. Derived state

Before learning another hook, we need to understand derived state.

Derived state means calculating information from state that already exists.

Imagine TaskFlow has these tasks:

```
const tasks: Task[] = [
  { id: 1, title: "Learn React", completed: true },
  { id: 2, title: "Practice TypeScript", completed: false },
  { id: 3, title: "Build TaskFlow", completed: false },
];
```

We want to display:

* Total tasks.  
* Completed tasks.  
* Remaining tasks.

We already have the information we need in `tasks`. We don't need to create three more state variables.

We can calculate the values directly.

### 1.1 Calculate total tasks

```
const totalTasks = tasks.length;
```

`.length` tells us how many items are in the array.

Result: `3`.

### 1.2 Calculate completed tasks

```
const completedTasks = tasks.filter(
  (task) => task.completed
).length;
```

Let's break this down:

* `filter()` checks every task.  
* `task.completed` keeps tasks where completed is true.  
* `.length` counts the matching tasks.

Result: `1`.

### 1.3 Calculate remaining tasks

```
const remainingTasks = tasks.filter(
  (task) => !task.completed
).length;
```

The `!` means NOT.

This counts tasks where `completed` is false.

Result: `2`.

### 1.4 Display the statistics in TaskFlow

Open `src/App.tsx`.

Inside your `App` component, below your state declarations, add:

```
const totalTasks = tasks.length;

const completedTasks = tasks.filter(
  (task) => task.completed
).length;

const remainingTasks = tasks.filter(
  (task) => !task.completed
).length;
```

Then, inside your JSX, add:

```
<div>
  <p>Total: {totalTasks}</p>
  <p>Completed: {completedTasks}</p>
  <p>Remaining: {remainingTasks}</p>
</div>
```

Now the numbers update automatically whenever tasks are added, completed or deleted.

Important: These values are derived from `tasks`. We don't need separate `useState` calls for them.

That's derived state.

## 2\. The useEffect hook

`useEffect` is a React hook that lets you run code in response to a component rendering and changes to specified values.

It's commonly used for things such as:

* Running code when a component first appears.  
* Responding when a particular value changes.  
* Setting up and cleaning up subscriptions or event listeners.

For the README, the most important concepts are mounting, updating and unmounting.

First, import the hook:

```
import { useEffect } from "react";
```

Or, if you're already importing `useState`:

```
import { useEffect, useState } from "react";
```

### 2.1 Basic useEffect syntax

```
useEffect(() => {
  // Code to run
}, []);
```

There are two important parts:

* The function contains the code to execute.  
* The dependency array controls when the effect runs again.

Let's understand the three common situations.

### 2.2 Mounting: when a component appears

Mounting means a component is added to the screen for the first time.

Example:

```
useEffect(() => {
  console.log("Component mounted");
}, []);
```

The empty dependency array means the effect runs after the initial mount.

In TaskFlow, we can demonstrate this inside `App.tsx`:

```
useEffect(() => {
  console.log("TaskFlow has loaded");
}, []);
```

When the component mounts, the message appears in the browser console.

### 2.3 Updating: when a dependency changes

Suppose we want to detect when the task list changes.

```
useEffect(() => {
  console.log("The task list changed");
}, [tasks]);
```

The dependency array contains `tasks`.

This means the effect runs after the initial mount and again when the `tasks` value changes.

For example:

* Adding a task changes `tasks`.  
* Completing a task changes `tasks`.  
* Deleting a task changes `tasks`.

Each of those updates can trigger the effect.

### 2.4 No dependency array

Consider this:

```
useEffect(() => {
  console.log("Component rendered");
});
```

There is no dependency array.

This effect runs after every render.

Be careful with this. If you update state inside an effect that runs after every render, you can accidentally create an infinite render loop.

### 2.5 Unmounting: when a component disappears

Unmounting means a component is removed from the screen.

React lets us return a cleanup function from `useEffect`.

```
useEffect(() => {
  console.log("Component mounted");

  return () => {
    console.log("Component unmounted");
  };
}, []);
```

The function returned by the effect is called the cleanup function.

React runs it when the component is removed.

Cleanup functions are useful for removing event listeners, stopping timers and cleaning up subscriptions.

### 2.6 Understanding all three situations

| Situation | What happens |
| ----- | ----- |
| Mounting | Component first appears |
| Updating | A dependency changes |
| Unmounting | Component is removed |

Component lifecycle

1. Mount  
   Component appears on the screen. The effect runs.  
2. Update  
   A dependency changes. The previous cleanup runs, then the effect runs again.  
3. Unmount  
   Component disappears. The cleanup function runs.

One detail worth remembering: in React development mode, `StrictMode` can run an extra setup and cleanup cycle to help detect problems. You may therefore see extra console messages while testing. That doesn't necessarily mean your code is broken.

## 3\. Practise mounting, updating and unmounting in TaskFlow

Let's create a small component that demonstrates the lifecycle.

Create:

`src/components/EffectDemo.tsx`

Add:

```
import { useEffect } from "react";

interface EffectDemoProps {
  count: number;
}

export const EffectDemo = ({ count }: EffectDemoProps) => {
  useEffect(() => {
    console.log("EffectDemo mounted");

    return () => {
      console.log("EffectDemo unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h3>Effect Demonstration</h3>
      <p>Current count: {count}</p>
    </div>
  );
};
```

What did we introduce?

* `EffectDemoProps` defines the component's props.  
* `count` is received from the parent.  
* The first effect demonstrates mounting and unmounting.  
* The second effect demonstrates reacting to a changing dependency.

Now let's use it in `App.tsx`.

Import it:

```
import { EffectDemo } from "./components/EffectDemo";
```

Inside your component, create a counter:

```
const [count, setCount] = useState(0);

const [showEffectDemo, setShowEffectDemo] = useState(true);
```

Inside your JSX, add:

```
<button onClick={() => setCount((previous) => previous + 1)}>
  Increase Count
</button>

<button onClick={() => setShowEffectDemo((previous) => !previous)}>
  Show / Hide Effect Demo
</button>

{showEffectDemo && (
  <EffectDemo count={count} />
)}
```

Now test it:

1. Increase the count and watch the console.  
2. Hide the component.  
3. Watch the unmount message.  
4. Show it again.  
5. Watch the mount message.

You have now demonstrated the main `useEffect` lifecycle concepts.

## 4\. The useRef hook

`useRef` is another React hook.

It lets you store a value that persists between renders without triggering a re-render when that value changes.

It can also be used to access a DOM element directly.

Import it:

```
import { useRef } from "react";
```

### 4.1 Basic syntax

```
const myRef = useRef(0);
```

A ref has a property called `.current`.

You can access it like this:

```
myRef.current
```

And change it:

```
myRef.current = 10;
```

Unlike state, changing `.current` does not trigger a re-render.

### 4.2 useState versus useRef

| Feature | useState | useRef |
| ----- | ----- | ----- |
| Stores a value | Yes | Yes |
| Value persists between renders | Yes | Yes |
| Changing it triggers a re-render | Yes | No |
| Can reference DOM elements | Not directly | Yes |

Think of it this way:

* Use state when a change should update the screen.  
* Use a ref when you need to remember something without updating the screen.

### 4.3 Demonstrating a persistent value

Create:

`src/components/RefDemo.tsx`

Add:

```
import { useRef, useState } from "react";

export const RefDemo = () => {
  const [renderCount, setRenderCount] = useState(0);

  const refCount = useRef(0);

  const increaseRef = () => {
    refCount.current += 1;

    console.log("Ref value:", refCount.current);
  };

  return (
    <div>
      <h3>useRef Demonstration</h3>

      <p>Component renders: {renderCount}</p>

      <p>Ref value: {refCount.current}</p>

      <button onClick={increaseRef}>
        Increase Ref
      </button>

      <button
        onClick={() =>
          setRenderCount((previous) => previous + 1)
        }
      >
        Trigger Re-render
      </button>
    </div>
  );
};
```

Let's understand what happens.

When you click Increase Ref:

```
refCount.current += 1;
```

The value increases, but React does not re-render the component.

When you click Trigger Re-render:

```
setRenderCount((previous) => previous + 1);
```

React renders the component again.

Now the updated ref value becomes visible.

This demonstrates two important things:

1. A ref can preserve its value between renders.  
2. Changing a ref alone doesn't cause a render.

### 4.4 Important note about the demonstration

The text showing `refCount.current` will not update immediately when you click Increase Ref. That is intentional.

It updates visually when another action causes a re-render.

This is one of the easiest ways to understand the difference between state and refs.

## 5\. Using useRef to access DOM elements

Now let's use a ref to access an actual input element.

For example, we might want to automatically focus the task input when the user clicks a button.

Create:

`src/components/FocusDemo.tsx`

Add:

```
import { useRef } from "react";

export const FocusDemo = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <h3>DOM Manipulation with useRef</h3>

      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
      />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
};
```

Let's break down the important syntax.

```
const inputRef = useRef<HTMLInputElement>(null);
```

*   
  `useRef` creates a ref.  
* `HTMLInputElement` tells TypeScript what kind of DOM element it will reference.  
* `null` is the initial value because the input doesn't exist yet when the component first starts rendering.

Then:

```
ref={inputRef}
```

Connects the ref to the input.

Finally:

```
inputRef.current?.focus();
```

Calls the input's focus method.

The `?.` is optional chaining. It means the code only calls `focus()` if `current` is not null.

This prevents an error if the input hasn't been attached yet.

### 5.1 Use your new components

In `App.tsx`, import:

```
import { RefDemo } from "./components/RefDemo";
import { FocusDemo } from "./components/FocusDemo";
```

Then add them inside your JSX:

```
<RefDemo />

<FocusDemo />
```

You now have demonstrations of both uses of `useRef`.

## 6\. The useMemo hook

The final hook from your README is `useMemo`.

`useMemo` allows React to remember the result of a calculation between renders.

It's useful when a calculation is expensive and doesn't need to run again unless its dependencies change.

Import it:

```
import { useMemo } from "react";
```

### 6.1 Basic syntax

```
const result = useMemo(() => {
  return someCalculation();
}, [dependency]);
```

There are two parts:

* A function that performs the calculation.  
* A dependency array that tells React when to recalculate.

### 6.2 A simple example

Suppose we want to calculate the sum of numbers.

```
const total = useMemo(() => {
  return 10 + 20 + 30;
}, []);
```

The result is remembered between renders.

Since there are no dependencies, React doesn't need to recalculate it when other state changes.

### 6.3 Why would we need this?

Imagine your application performs a complicated calculation.

Without memoization:

```
const result = expensiveCalculation(tasks);
```

That calculation runs whenever the component renders.

With memoization:

```
const result = useMemo(() => {
  return expensiveCalculation(tasks);
}, [tasks]);
```

React can reuse the previous result when `tasks` hasn't changed.

When `tasks` changes, the calculation runs again.

Important: `useMemo` is an optimization, not something you need for every calculation. Simple calculations like `tasks.length` generally don't need it.

### 6.4 Demonstrate useMemo in TaskFlow

Create:

`src/components/MemoDemo.tsx`

Add:

```
import { useMemo, useState } from "react";

export const MemoDemo = () => {
  const [number, setNumber] = useState(10);

  const [renderCount, setRenderCount] = useState(0);

  const expensiveCalculation = (value: number) => {
    console.log("Calculation running");

    let result = 0;

    for (let i = 0; i < 1000000; i++) {
      result += value;
    }

    return result;
  };

  const calculatedValue = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div>
      <h3>useMemo Demonstration</h3>

      <p>Number: {number}</p>

      <p>Calculated result: {calculatedValue}</p>

      <p>Other state: {renderCount}</p>

      <button
        onClick={() =>
          setNumber((previous) => previous + 1)
        }
      >
        Change Number
      </button>

      <button
        onClick={() =>
          setRenderCount((previous) => previous + 1)
        }
      >
        Trigger Other Render
      </button>
    </div>
  );
};
```

### 6.5 What should happen?

When you click Change Number:

* `number` changes.  
* React renders the component.  
* The dependency changes.  
* The calculation runs again.

When you click Trigger Other Render:

* `renderCount` changes.  
* React renders the component.  
* `number` hasn't changed.  
* React reuses the memoized calculation result.

You can see this in the browser console because the calculation logs a message.

One technical detail: React may discard memoized values in certain situations, so `useMemo` should be treated as a performance optimization, not a guarantee that a calculation will never run again.

# 7\. Add the demonstrations to TaskFlow

Import the components into `App.tsx`:

```
import { EffectDemo } from "./components/EffectDemo";
import { RefDemo } from "./components/RefDemo";
import { FocusDemo } from "./components/FocusDemo";
import { MemoDemo } from "./components/MemoDemo";
```

Add them below your task list:

```
<section>
  <h2>React Hook Demonstrations</h2>

  <EffectDemo count={count} />

  <RefDemo />

  <FocusDemo />

  <MemoDemo />
</section>
```

Remember to keep the `count` state and `showEffectDemo` state from the earlier example, along with the conditional rendering buttons.

This gives TaskFlow an interactive area where you can experiment with all the hooks in your README.

# 8\. Final README revision table

This is your complete checklist of the original README topics.

| README concept | Where you learned it |
| ----- | ----- |
| Interactive React hook demonstrations | Part 5 |
| State updates | Part 3 |
| Re-rendering | Part 3 |
| `useEffect` | Part 5 |
| Mounting | Part 5 |
| Updating | Part 5 |
| Unmounting | Part 5 |
| `useRef` persistent values | Part 5 |
| `useRef` DOM manipulation | Part 5 |
| `useMemo` | Part 5 |
| Controlled inputs | Part 4 |
| Dynamic lists | Parts 2–3 |
| Keys | Part 2 |
| Conditional rendering | Part 4 |
| Derived state | Part 5 |
| Reusable components | Parts 1–2 |

## 9\. Final knowledge check

Part 5 quiz

1\. Which hook stores a value without triggering a re-render when it changes?

useState

useRef

useEffect

2\. What does an empty dependency array mean in a normal useEffect?

Run after every render

Run after the initial mount

Never run

3\. What is a cleanup function used for?

Cleaning up an effect, such as removing a listener

Deleting React state

Changing component props

4\. What does useMemo do?

Stores a DOM element

Caches a calculation result between renders

Creates a new component

5\. What is derived state?

A value calculated from existing state

A new CSS property

A state variable that never changes

Check answers

## 10\. What you should now have learned

Once you've studied Parts 1–5, you will have covered the concepts listed in your original README.

The remaining work is to make sure your project runs correctly and that you can explain each hook and concept, rather than simply recognizing its syntax.

Your scope is now complete: Parts 1–5 cover the README. We can leave additional React topics for after you've finished this material.

