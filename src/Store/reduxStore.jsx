import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../Reducer/todoSlice"; 

const reduxStore = configureStore({
    reducer : {
        todo: todoSlice,
    }
})

export default reduxStore