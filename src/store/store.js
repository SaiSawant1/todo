import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slice/TodoSlice";
const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    },
})

export default store