import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import TodoControl from "./TodoControl";

const TodoList = () => {
    const TodoList=useSelector(state=>state.todo)
    const [filterStatus,setFilterStatus]=React.useState("All")
    let renderedList=TodoList.map((todo)=>{
        return <TodoItem key={todo.id} id={todo.id} status={todo.status} todo={todo.todo}/>
    })

    if(filterStatus!=="All"){
      if(filterStatus==="Active"){
        const ActiveTodoList=TodoList.filter(todo=>!todo.status)
        renderedList=ActiveTodoList.map((todo)=>{
          return <TodoItem key={todo.id} id={todo.id} status={todo.status} todo={todo.todo}/>
        })
      }
      if(filterStatus==="Completed"){
        const CompletedTodoList=TodoList.filter(todo=>todo.status)
        renderedList=CompletedTodoList.map((todo)=>{
          return <TodoItem key={todo.id} id={todo.id} status={todo.status} todo={todo.todo}/>
        })
      }
    }
    console.log(renderedList)

  return (
    <>
    <div className="max-h-[388px] rounded-md w-[100%] dark:bg-blue-950 dark:text-gray-100 mt-[22px] bg-white shadow-2xl overflow-y-scroll ">
      {renderedList}
    </div>
    <TodoControl setFilterStatus={setFilterStatus} filterStatus={filterStatus}/>
    </>
    
  );
};

export default TodoList;
