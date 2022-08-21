import create from '@ant-design/icons/lib/components/IconFont'
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const headers={
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_ALLSTOCKSAPI_HOST
}

const baseUrl=process.env.REACT_APP_ALLSTOCKSAPI_URL

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