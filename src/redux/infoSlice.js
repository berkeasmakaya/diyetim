import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails:{
        name:'',
        aim:'',
        gender:'',
        event:'',
        weight:'',
        height:'',
        birthday:''
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
        },
        setEvent:(state, action) => {
            state.userDetails.event = action.payload;
        },
        setWeight:(state,action) => {
            state.userDetails.weight = action.payload;
        },
        setHeight:(state,action) => {
            state.userDetails.height = action.payload;
        },
        setBirthday:(state,action) => {
            state.userDetails.birthday = action.payload;
        }
        
    }
})

export const {setName, setAim, setGender, setEvent, setWeight, setHeight, setBirthday} = infoSlice.actions;
export default infoSlice.reducer;