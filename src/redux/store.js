import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./infoSlice";

export const store = configureStore({
    reducer:{
        info:infoSlice
    }
})