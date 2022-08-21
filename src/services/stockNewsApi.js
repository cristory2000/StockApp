import { ConsoleSqlOutlined } from '@ant-design/icons'
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const headers={
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_STOCKNEWS_HOST
}

const baseUrl=process.env.REACT_APP_STOCKNEWS_URL
let params={q: 'stocks', lang: 'en', page_size:''}
const createRequest=(url)=>({method:'GET',url,params,headers} )

export const newsApi=createApi({
    
    reducerPath:'newsApi',
    
    baseQuery: fetchBaseQuery({baseUrl}),
    
    endpoints:(builder)=>({
        
        getNews: builder.query({
            query: ({newsCategory,count})=>{
                params.q=newsCategory
                params.page_size=count  
                return createRequest('/search') 
            }
            
        })
    })
  
})
export const {useGetNewsQuery}=newsApi