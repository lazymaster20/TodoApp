function Todo() {
    return <>
        <div className="row p-3 bg-success text-light">
            <h1>Todo App</h1>
        </div>
        <div className="row">
            <div className="row">
                <h3>Add item</h3>
                <p className="text-success">Item added successfully!</p>
            </div>
            <div className="form">
                <input type="text" className="form-control mb-2" placeholder="Title" />
                <input type="text" className="form-control mb-2" placeholder="Description" />
                <button className="btn btn-primary">Add</button>
            </div>
        </div>
    </>
}

export default Todo;