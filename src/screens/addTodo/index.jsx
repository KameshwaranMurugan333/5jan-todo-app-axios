import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AllRoutes } from "../../routers/routes";

export const AddTodos = (props) => {

    const [title, setTitle] = React.useState("");
    const [compDate, setCompDate] = React.useState("");
    const navigate = useNavigate();

    const addTodo = () => {
        axios.post("https://63b6427158084a7af3ad6bd9.mockapi.io/todos", {
            todo_title: title,
            is_completed: false,
            todo_date: compDate
        }).then(res => {
            console.log(res.data);
            navigate(AllRoutes.allTodos)
        })
    }

    return <div>
        <h1>Add Todo</h1>

        <input type={"text"} value={title} onChange={(e) => setTitle(e.target.value)} placeholder={"Todo Title"} />
        <input type={"date"} value={compDate} onChange={(e) => setCompDate(e.target.value)} placeholder={"Completion Date"} />

        <button onClick={addTodo}>Add Todo</button>
    </div>
}