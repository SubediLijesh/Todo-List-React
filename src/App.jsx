import Header from "./Components/Header";
import AddTodo from "./Components/addTodo";
import Clock from "./Components/clock";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/welcomeMessage";

import { useState } from "react";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handelNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
  const handelDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);

    // setTodoItems(onDeleteClick);
  };
  return (
    <>
      <center className="todo-container">
        <Header />
        <AddTodo onNewItem={handelNewItem} />
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems todoItems={todoItems} onDeleteClick={handelDeleteItem} />

        <Clock />
      </center>
    </>
  );
}

export default App;
