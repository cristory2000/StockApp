import create from '@ant-design/icons/lib/components/IconFont'
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const headers={
    'X-RapidAPI-Key': '8fad3fccc2msh746d77a8bb76f9ep19f787jsn1bd87da49a8a',
    'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
}

const baseUrl='https://twelve-data1.p.rapidapi.com'

const params={symbol: '', interval: '1day', outputsize: '30', format: 'json'}

const createRequest=(url)=>({method:'GET',url,params,headers})


export const stockHistory=createApi({

    reducerPath:'historyApi',

    baseQuery: fetchBaseQuery({baseUrl}),

    endpoints:(builder)=>({
        getHistory:builder.query({
            query:({ticker,interval,outputsize})=>{
                console.log(interval)
                params.symbol=`${ticker}`
                params.interval=`${interval}`
                params.outputsize=outputsize
                return createRequest('/time_series')
            }
        })
        
    })

})

export const {useGetHistoryQuery}=stockHistory