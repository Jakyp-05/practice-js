import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { AddTodo } from "../../store/todoSlice";

import InputField from "./InputField";
import TodoList from "./TodoList";

function Todos() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(AddTodo({ text }));
    setText("");
  };

  return (
    <div className="todo">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />

      <TodoList />
    </div>
  );
}

export default Todos;
