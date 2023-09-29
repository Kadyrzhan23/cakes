import { configureStore } from "@reduxjs/toolkit";
import { cakesApi } from "./cakesApi";
import favoriteSlice from "./favoriteSlice";

export const store = configureStore({
    reducer:{
        [cakesApi.reducerPath]:cakesApi.reducer,
        favorites: favoriteSlice
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(cakesApi.middleware)
})