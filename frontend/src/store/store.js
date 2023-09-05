import { configureStore } from "@reduxjs/toolkit";
import { cakesApi } from "./cakesApi";

export const store = configureStore({
    reducer:{
        [cakesApi.reducerPath]:cakesApi.reducer
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(cakesApi.middleware)
})