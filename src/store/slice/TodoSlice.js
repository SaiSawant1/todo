import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
const TodoSlice=createSlice({
    initialState:[],
    name:'todo',
    reducers:{
        addTodo:(state,action)=>{
            const newTodo= {id:uuidv4(),
                todo:action.payload,
                status:"unChecked"}
            state.push(newTodo)
        },
    }
})
export const {addTodo} = TodoSlice.actions
export default TodoSlice