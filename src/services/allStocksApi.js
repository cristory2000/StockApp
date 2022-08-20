import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const groupsApiHeaders={
    'X-RapidAPI-Key': '8fad3fccc2msh746d77a8bb76f9ep19f787jsn1bd87da49a8a',
    'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
}
const baseUrl='https://twelve-data1.p.rapidapi.com'
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