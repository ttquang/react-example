import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from "./authSlice";
import CounterSlice from "./counterSlice";

export default configureStore({
    reducer: {
        auth : AuthSlice,
        counter: CounterSlice
    }
})