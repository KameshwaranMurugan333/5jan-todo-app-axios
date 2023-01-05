import React from "react";
import {
  BrowserRouter, Routes, Route, Navigate
} from "react-router-dom"
import { AllRoutes } from "./routers/routes";
import { AddTodos, Todos } from "./screens";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Navigate from root to all Todos  */}
        <Route path={"/"} element={<Navigate to={AllRoutes.allTodos} />} />

        {/* All Todos */}
        <Route path={AllRoutes.allTodos} element={<Todos />} />

        {/* Add Todo */}
        <Route path={AllRoutes.addTodo} element={<AddTodos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
