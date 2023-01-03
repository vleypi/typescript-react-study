import { configureStore } from "@reduxjs/toolkit";
import todoSlice from './todoSlice'

const store = configureStore({
    reducer: {
        todos: todoSlice
    }
})

export default store;

export type RootState =  ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch