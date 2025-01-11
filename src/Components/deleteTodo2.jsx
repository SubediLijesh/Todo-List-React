function DeleteTodo2() {
  let todoName = "buy bread";
  let todoDate = "03-04-2024";
  return (
    <>
      <div class="container text-center">
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

export default DeleteTodo2;
