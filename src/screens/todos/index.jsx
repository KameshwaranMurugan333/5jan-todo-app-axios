import React from "react";
import axios from "axios";

export const Todos = (props) => {

    const [allTodos, setAllTodos] = React.useState([]);
    const [isError, setIsError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    const getAllTodos = () => {
        setIsLoading(true);
        axios.get("https://63b6427158084a7af3ad6bd9.mockapi.io/todos")
            .then(res => {
                setAllTodos(res.data);
                setIsError(false);
            }).catch(err => {
                console.log(err);
                setAllTodos([]);
                setIsError(true);
            }).finally(err => {
                setIsLoading(false);
            })
    }

    React.useEffect(() => {
        getAllTodos();
    }, []);

    return <div>
        <h1>Todo</h1>

        {/* For Loading */}
        {isLoading && <p>Fetching All Todos..... Please wait........</p>}

        {/* For Error Handling (Failure Scenario)*/}
        {!isLoading && isError && <p>Opps! Something went wrong!</p>}

        {/* For Load all Todos (Success Scenario) */}
        {!isLoading && !isError && allTodos.map(todo => {
            return <div key={todo.id}>
                <p>Todo Title: {todo.todo_title}</p>
                <p>Is Completed: {todo.is_completed ? "true" : "false"}</p>
                <p>Todo Date: {new Date(todo.todo_date).toString()}</p>
            </div>
        })}
    </div>
}