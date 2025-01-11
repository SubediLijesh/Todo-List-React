function AddTodo() {
  return (
    <>
      <div className="container text-center">
        <div className="row ls-row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here" />
          </div>
          <div className="col-4">
            <input type="date" placeholder="dd/mm/yyyy" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success add">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
