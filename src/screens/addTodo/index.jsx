import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AllRoutes } from "../../routers/routes";

export const AddTodos = (props) => {

    const [title, setTitle] = React.useState("");
    const [compDate, setCompDate] = React.useState("");
    const [isError, setIsError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const navigate = useNavigate();

    const addTodo = () => {
        setIsLoading(true);
        axios.post("https://63b6427158084a7af3ad6bd9.mockapi.io/todos", {
            todo_title: title,
            is_completed: false,
            todo_date: compDate
        }).then(res => {
            console.log(res.data);
            setIsError(false);
            navigate(AllRoutes.allTodos)
        }).catch(err => {
            console.log(err);
            setIsError(true);
        }).finally(err => {
            setIsLoading(false);
        })
    }

    return <div>
        <h1>Add Todo</h1>

        <input type={"text"} value={title} onChange={(e) => setTitle(e.target.value)} placeholder={"Todo Title"} />
        <input type={"date"} value={compDate} onChange={(e) => setCompDate(e.target.value)} placeholder={"Completion Date"} />

        <button disabled={isLoading} onClick={addTodo}>{isLoading ? "Adding Todo..." : "Add Todo"}</button>
        {!isLoading && isError && <p>Opps! Something went wrong, Unable to add Todo</p>}
    </div>
}