import Header from "./Components/Header";
import AddTodo from "./Components/addTodo";
import Clock from "./Components/clock";
import "./App.css";
import TodoItems from "./Components/TodoItems";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];
  return (
    <>
      <center className="todo-container">
        <Header />
        <AddTodo />
        <TodoItems todoItems={todoItems} />

        <Clock />
      </center>
    </>
  );
}

export default App;
