import React, { useState } from "react";
import TodoList from "./TodoList"; // Importamos el hijo

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState(["Hacer la cama"]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            setTodos([...todos, inputValue.trim()]);
            setInputValue("");
        }
    };

    const deleteTodo = (i) => {
        setTodos(todos.filter((_, i) => i !== i));
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center todo-header">Tareas Diarias</h1>
            
            <div className="todo-container border-bottom shadow-sm">
                <input
                    type="text"
                    className="form-control border-0 fs-4"
                    placeholder="Tareas  para hoy?"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    onKeyDown={handleKeyDown}
                />
            </div>

            {/* Llamamos al hijo y le pasamos los datos y la función de borrar */}
            <TodoList todos={todos} onDelete={deleteTodo} />

            {/* Efecto decorativo */}
            <div className="stack-1 shadow-sm mx-auto"></div>
            <div className="stack-2 shadow-sm mx-auto"></div>
        </div>
    );
};

export default Home;