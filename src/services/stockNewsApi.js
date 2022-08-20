import { ConsoleSqlOutlined } from '@ant-design/icons'
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const headers={
    'X-RapidAPI-Key': '8fad3fccc2msh746d77a8bb76f9ep19f787jsn1bd87da49a8a',
    'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
}

const baseUrl='https://free-news.p.rapidapi.com/v1'
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