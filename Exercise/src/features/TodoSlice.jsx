import { createSlice } from "@reduxjs/toolkit";


export const TodoSlice = createSlice({
    name : "TodoSlice",
    initialState : {data:[]},
    reducers : {
        addData : (state,action)=>{
            state.data.push(action.payload);
        },
        deleteData : (state,action)=>{
            let newdata = state.data.filter((item)=>item.id != action.payload)
            state.data = newdata
        },
        updateData : (state,action)=>{
            state.data.map((e,i)=>{
                if(e.id == action.payload.id)
                {
                    e.name = action.payload.name,
                    e.subject = action.payload.subject
                }
                else
                    e
            })
        },
        
    }
})

export const {addData,deleteData,updateData} = TodoSlice.actions
export default TodoSlice.reducer