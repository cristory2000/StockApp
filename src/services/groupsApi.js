import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const groupsApiHeaders={
    'X-RapidAPI-Key': '8fad3fccc2msh746d77a8bb76f9ep19f787jsn1bd87da49a8a',
    'X-RapidAPI-Host': 'finviz2.p.rapidapi.com'
}
const baseUrl='https://finviz2.p.rapidapi.com/api/v1'
const params={group:'sector'}
const createRequest=(url)=> ({url,params,headers:groupsApiHeaders})

export const groupsApi=createApi({
    
    reducerPath:'groupsApi',
    
    baseQuery: fetchBaseQuery({baseUrl}),
    
    endpoints:(builder)=>({
        
        getGroups: builder.query({
            query: ()=> createRequest('/groups') 
        })
    })

})

export const {useGetGroupsQuery}=groupsApi