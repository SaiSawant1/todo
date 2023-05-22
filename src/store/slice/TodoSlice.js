import { createSlice } from "@reduxjs/toolkit";

const TodoSlice=createSlice({
    initialState:[{id:1,todo:"complete maths homework",status:"completed"},
    {id:2,todo:"complete maths homework",status:"incomplete"},
    {id:3,todo:"complete maths homework",status:"completed"},
    {id:4,todo:"complete maths homework",status:"incomplete"},
    {id:5,todo:"complete maths homework",status:"completed"},
    {id:6,todo:"complete maths homework",status:"completed"},
    {id:7,todo:"complete maths homework",status:"completed"},
    {id:8,todo:"buy ice cream ",status:"completed"},
    {id:9,todo:"drop harry to school",status:"completed"},
    {id:10,todo:"complete maths homework",status:"completed"}
],
    name:'todo',
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload)
        },
    }
})
export const {addTodo} = TodoSlice.actions
export default TodoSlice