import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);

  return (
    <ul className="list-group">
      {todos &&
        todos.map((todo) => (
          <TodoItem
            id={todo.id}
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
    </ul>
  );
};
export default TodoList;
