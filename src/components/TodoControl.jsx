import React from 'react'
import { useSelector } from 'react-redux'

const TodoControl = ({setFilterStatus,filterStatus}) => {
  const TodoList=useSelector(state=>state.todo)
  const checked=TodoList.filter(todo=>todo.status)
  
  const handleFilter=(filter)=>{
    setFilterStatus(filter)
  }

  return (
    <div className="w-[100%] shadow-2xl text-gray-400 flex justify-between items-center bg-white h-[64px] rounded-md py-[22px] px-[20px]">
        <div className="mr-8">{checked.length} items completed</div>
        <div className="flex-grow flex justify-evenly">
          <button className={filterStatus==="All" ? "Active" : ""} onClick={()=> handleFilter('All')}>All</button>
          <button className={filterStatus==="Active" ? "Active" : ""} onClick={()=>handleFilter("Active")}>Active</button>
          <button className={filterStatus==="Completed" ? "Active" : ""} onClick={()=>handleFilter("Completed")}>Completed</button>
        </div>
        <div className="ml-8">
          <button>Clear Completed</button>
        </div>
      </div>
  )
}

export default TodoControl