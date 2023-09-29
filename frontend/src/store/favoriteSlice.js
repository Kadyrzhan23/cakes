import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: [],
        favoritesId: []
    },
    reducers: {
        addToFavorite(state, { payload }) {
            if (!state.favoritesId.includes(payload.id)){
                state.favoritesId.push(payload.id)
                state.favorites.push(payload)
                localStorage.setItem('favorites', JSON.stringify(state.favorites));
                localStorage.setItem('favoritesId', JSON.stringify(state.favoritesId));
            }
        },
        deleteFromFavorite(state, { payload }) {
            console.log(payload)
            if(state.favoritesId.includes(payload.id)){
                const index = state.favoritesId.indexOf(payload.id);
                state.favorites.splice(index, 1)
                state.favoritesId.splice(index,1)
                localStorage.setItem('favorites', JSON.stringify(state.favorites));
                localStorage.setItem('favoritesId',JSON.stringify(state.favoritesId));
            }
        },
        getDataFromLocalStorage(state){
            const favoriteCakes = JSON.parse(localStorage.getItem('favorites'));
            const cakesId = JSON.parse(localStorage.getItem('favoritesId'));
            state.favorites = favoriteCakes !== null ? favoriteCakes :[...[]]
            state.favoritesId = cakesId !== null ? cakesId :[...[]]
        }
    }
})

export const { addToFavorite ,deleteFromFavorite , getDataFromLocalStorage} = favoriteSlice.actions
export default favoriteSlice.reducer