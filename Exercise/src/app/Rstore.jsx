import { configureStore } from "@reduxjs/toolkit";
import  counterSLice  from "../features/CounterSlice";
import  TodoSlice  from "../features/TodoSlice";
import ApiSlice from "../features/ApiSlice";



export const store = configureStore({
    reducer : {
        counterKey : counterSLice,
        todoKey : TodoSlice,
        crude : ApiSlice
    }
})