import {useEffect, useState} from "react";

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() =>{
        fetch("https://dummyjson.com/todos")
        .then((res) => res.json())
        .then((data) =>{
            setTodos(data.todos);
        })
    }, []);

    return(
        <div className="container mt-5">
            <h1 className="mb-3">Todo List</h1>
            <table className="table tsble-bordered table-striped">
                <thead className="table-light">
                    <tr>
                        <th>Id</th>
                        <th>Tado</th>
                        <th>Completed</th>
                        <th>UserId</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.todo}</td>
                            <td>{todo.completed ? "yes" : "No"}</td>
                            <td>{todo.userId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}