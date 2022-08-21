import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const groupsApiHeaders={
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_ALLSTOCKSAPI_HOST
}
const baseUrl=process.env.REACT_APP_ALLSTOCKSAPI_URL

const params={exchange: 'NASDAQ', format: 'json'}
const createRequest=(url)=> ({method:'GET',url,params,headers:groupsApiHeaders})

export const listApi=createApi({
    
    reducerPath:'listApi',
    
    baseQuery: fetchBaseQuery({baseUrl}),
    
    endpoints:(builder)=>({
        
        getList: builder.query({
            query: ()=> createRequest('/stocks') 
        })
    })

})

export const {useGetListQuery}=listApi