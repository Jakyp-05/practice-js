import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../../store/todoSlice";

function TodoItem({ id, text, completed }) {
  const dispatch = useDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({ id }))}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => dispatch(removeTodo({ id }))}>
        &times;
      </span>
    </li>
  );
}

export default TodoItem;
