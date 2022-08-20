import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const stockApiHeaders={
    'X-RapidAPI-Key': '8fad3fccc2msh746d77a8bb76f9ep19f787jsn1bd87da49a8a',
    'X-RapidAPI-Host': 'realstonks.p.rapidapi.com'
}
const baseUrl='https://realstonks.p.rapidapi.com'

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