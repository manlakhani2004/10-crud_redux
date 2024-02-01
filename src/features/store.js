import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from "./slices/UsersSlice";

const store = configureStore(
    {
        reducer:{
            users:UsersSlice,
        }
    })
    
export default store;