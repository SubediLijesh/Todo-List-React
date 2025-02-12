import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [TodoName, setTodoName] = useState("");
  const [TodoDate, setTodoDate] = useState("");
  const handelNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handelDateChange = (event) => {
    setTodoDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(TodoName, TodoDate);
    setTodoDate("");
    setTodoName("");
  };

  return (
    <>
      <div className="container text-center">
        <div className="row ls-row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo Here"
              value={TodoName}
              onChange={handelNameChange}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              placeholder="dd/mm/yyyy"
              value={TodoDate}
              onChange={handelDateChange}
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success add"
              onClick={() => {
                handleAddButtonClicked();
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
