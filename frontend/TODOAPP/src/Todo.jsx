import { useState,useEffect} from "react";



function Todo() {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, seterror] = useState("");
    const [success, setSuccess] = useState("");
    const apiurl = "http://localhost:3000";

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = () => {
        fetch(apiurl + "/todos")
            .then((res) => res.json())
            .then((data) => setTodos(data))
            .catch((err) => seterror("Failed to fetch todos"));
    };

    

    const addTodo = () => {
        if(title.trim() !== "" && description.trim() !== "") {
            fetch(apiurl + "/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, description})
            }).then((res) =>{
                if(res.ok) {
                    //fetchTodos();
                    setTodos([...todos, { _id: Date.now(), title, description }]);
                    setSuccess("Item added successfully!");
                    setTimeout(() => setSuccess(""), 3000);
                    //setTitle("");
                    //setDescription("");
                } else {
                    seterror("Failed to add todo");
                }   
            })
        
    }};
    

    return (
    <>
        <div className="row p-3 bg-success text-light">
            <h1>TODO APP</h1>
        </div>
        <div className="row">
            <h3>Add item</h3>
            {success && <p className="text-success">{success}</p>}
            
            <div className="form-group d-flex gap-2">
                <input type="text" value = {title} onChange={(e) => setTitle(e.target.value)} 
                className="form-control" placeholder="Title" />
                <input type="text" value = {description} onChange={(e) => setDescription(e.target.value)} 
                className="form-control" placeholder="Description" />
                <button onClick = {addTodo} className="btn btn-primary">Add</button>
            </div>
            {error && <p className="text-danger">{error}</p>}
        </div>
        <div className="row">
            <h3>Todo List</h3>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li key={todo._id} className="list-group-item">
                        <h5>{todo.title}</h5>
                        <p>{todo.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    </>
);}

export default Todo;