import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const stockApiHeaders={
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_STOCKSAPI_HOST
}
const baseUrl=process.env.REACT_APP_STOCKSAPI_URL

const createRequest=(url)=> ({url,headers:stockApiHeaders})

export const stocksApi=createApi({
    
    reducerPath:'stocksApi',
    
    baseQuery: fetchBaseQuery({baseUrl}),
    
    endpoints:(builder)=>({
        
        getStocks: builder.query({
            
            query: (stock)=> 
            
            createRequest(`${stock}`),
        
        })

    })

})

export const {useGetStocksQuery}=stocksApi