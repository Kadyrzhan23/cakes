import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cakesApi = createApi({
    reducerPath: 'cakesApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (build) => ({
        getCards: build.query({
            query: (str) => `?page=main&query=cards&collection=${str}`
        }),
        getmainBestCakes: build.query({
            query: (str) => `?page=main&query=bests&collections=${str}`
        }),
        getPageBirthday: build.query({
            query: (str) => `?page=birthday`
        })
    })
})

export const {
    useGetCardsQuery,
    useGetmainBestCakesQuery,
    useGetPageBirthdayQuery } = cakesApi;