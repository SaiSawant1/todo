import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const TodoList=useSelector(state=>state.todo)
    const renderedList=TodoList.map((todo)=>{
        return <TodoItem key={todo.id} id={todo.id} status={todo.status} todo={todo.todo}/>
    })
    console.log(renderedList)
  return (
    <div className="max-h-[388px] rounded-md w-[100%]  mt-[22px] bg-white shadow-2xl overflow-y-scroll ">
      {renderedList}
    </div>
  );
};

export default TodoList;
