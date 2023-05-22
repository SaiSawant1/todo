import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from "../store/slice/TodoSlice"
const CreateTodo = () => {
  const todoRef=useRef()
  const dispatch=useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(addTodo(todoRef.current.value))
    todoRef.current.value=""
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input
            ref={todoRef}
            className="w-[100%] mt px-8 mt-[50px] text-[18px] h-[62px] rounded-lg"
            type="text"
            placeholder="Create a new Todo.."
          />
        </form>
      </div>
  )
}

export default CreateTodo