import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const AddData=createAsyncThunk("addData",async()=>{
    const response=await axios.get("http://localhost:1007/user")
    return response.data
})

export const PostData=createAsyncThunk("postData",async({name,subject})=>{
    const response=await axios.post("http://localhost:1007/user",{name,subject})
    return response.data
})
export const DeleteData=createAsyncThunk("deleteData",async(id)=>{
    await axios.delete(`http://localhost:1007/user/${id}`);
    return id
})
export const UpdateData = createAsyncThunk("updateData", async ({ id, name, subject }) => {
  const response = await axios.put(`http://localhost:1007/user/${id}`, {id , name, subject });
  return response.data; 
});


export const ApiSlice=createSlice({
    name:"ApiSlice",
    initialState:{data:[]},
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(AddData.fulfilled,(state,action)=>{
            state.data = action.payload;
        })
        .addCase(PostData.fulfilled,(state,action)=>{
            state.data.push(action.payload);
            console.log(action.payload);
        })
        .addCase(DeleteData.fulfilled, (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload);
        })
         .addCase(UpdateData.fulfilled,(state,action)=>{
            console.log(action.payload);
            let singledata=state.data.find(item=>item.id ===action.payload.id)
            singledata.name=action.payload.name
            singledata.subject=action.payload.subject
        })

    }
})

export default ApiSlice.reducer