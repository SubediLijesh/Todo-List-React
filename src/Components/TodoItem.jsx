import React from "react";

function TodoItem({ todoName, todoDate }) {
  return (
    <>
      <div className="container text-center">
        <div className="row ls-row">
          <div className="col-6 item-container">
            <span>{todoName}</span>
          </div>
          <div className="col-4 item-container">
            <span>{todoDate}</span>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger delete">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
