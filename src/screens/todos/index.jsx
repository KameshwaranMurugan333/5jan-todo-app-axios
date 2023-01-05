import React from "react";
import axios from "axios";

export const Todos = (props) => {

    const [allTodos, setAllTodos] = React.useState([]);

    const getAllTodos = () => {
        axios.get("https://63b6427158084a7af3ad6bd9.mockapi.io/todos")
            .then(res => {
                setAllTodos(res.data);
            })
    }

    React.useEffect(() => {
        getAllTodos();
    }, []);

    return <div>
        <h1>Todo</h1>
        {allTodos.map(todo => {
            return <div key={todo.id}>
                <p>Todo Title: {todo.todo_title}</p>
                <p>Is Completed: {todo.is_completed ? "true" : "false"}</p>
                <p>Todo Date: {new Date(todo.todo_date).toString()}</p>
            </div>
        })}
    </div>
}