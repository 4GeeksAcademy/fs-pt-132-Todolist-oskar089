import React from "react";

const TodoList = ({ todos, onDelete }) => {
    return (
        <div className="todo-container shadow">
            <ul className="list-group list-group-flush">
                {todos.length === 0 ? (
                    <li className="list-group-item text-muted fs-5 py-3">
                        No hay tareas, añadir tareas
                    </li>
                ) : (
                    todos.map((t, i) => (
                        <li key={i} className="list-group-item d-flex justify-content-between align-items-center todo-item fs-4 py-3">
                            {t}
                            <span 
                                className="delete-icon text-danger" 
                                onClick={() => onDelete(i)}
                                style={{ cursor: "pointer" }}
                            >
                                <i className="fas fa-times"></i>
                            </span>
                        </li>
                    ))
                )}
                <li className="list-group-item footer-text text-muted py-1">
                    <small>{todos.length} item{todos.length !== 1 ? "s" : ""} List</small>
                </li>
            </ul>
        </div>
    );
};

export default TodoList;