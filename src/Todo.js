import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "./todoslice"

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  const handleToggle = (todoId) => {
    dispatch(toggleTodo(todoId));
  };

  const handleRemove = (todoId) => {
    dispatch(removeTodo(todoId));
  };
console.log(todos);
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            {todo.text}
            <button onClick={() => handleRemove(todo.id)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
