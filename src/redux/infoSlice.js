import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails:{
        name:'',
        aim:'',
        gender:''
    }
}

export const infoSlice = createSlice({
    name:'userDetail',
    initialState,
    reducers:{
        setName:(state, action) => {
            state.userDetails.name = action.payload;
        },
        setAim:(state, action) => {
            state.userDetails.aim = action.payload;
        },
        setGender:(state, action) => {
            state.userDetails.gender = action.payload;
        }
    }
})

export const {setName, setAim, setGender} = infoSlice.actions;
export default infoSlice.reducer;