import React from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
import TodoControl from "./TodoControl";

export const Todo = () => {
  return (
    <div className="w-[540px]">
      <TodoHeader/>
      <CreateTodo/>
      <TodoList/>
      <TodoControl/>
    </div>
  );
};
