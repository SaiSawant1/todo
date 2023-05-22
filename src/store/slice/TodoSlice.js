import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
const TodoSlice=createSlice({
    initialState:[],
    name:'todo',
    reducers:{
        addTodo:(state,action)=>{
            const newTodo= {id:uuidv4(),
                todo:action.payload,
                status:false}
            state.push(newTodo)
        },
        statusChange:(state,action)=>{
           state.map((todo)=>{
                if(todo.id===action.payload){
                   todo.status=!todo.status
                   
                }
                return todo
            }) 
        }
    }
})
export const {addTodo,statusChange} = TodoSlice.actions
export default TodoSlice