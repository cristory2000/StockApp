import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const groupsApiHeaders={
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_GROUPSAPI_HOST
}
const baseUrl = process.env.REACT_APP_GROUPSAPI_URL

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