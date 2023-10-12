import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cakesApi = createApi({
    reducerPath: 'cakesApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (build) => ({
        getCards: build.query({
            query: (str) => `?page=main&query=cards&collection=${str}`
        }),
        getAllProducts: build.query({
            query: () => `?page=main&query=products`
        }),
        getmainBestCakes: build.query({
            query: (str) => `?page=main&query=bests&collections=${str}`
        }),
        getPageForCategory: build.query({
            query: (str) => `?page=${str}`
        }),
    })
})

export const {
    useGetCardsQuery,
    useGetAllProductsQuery,
    useGetmainBestCakesQuery,
    useGetPageForCategoryQuery } = cakesApi;