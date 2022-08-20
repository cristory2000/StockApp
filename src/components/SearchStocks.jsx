import React,{useState} from "react"
import {StockList} from './'
import { useGetListQuery } from "../services/allStocksApi";
import { Loading } from ".";
import {List,Typography,AutoComplete} from 'antd'


const SearchStocks=()=>{

    const {data,isFetching}=useGetListQuery()
    const [options,setOptions]=useState([])
    
    if(isFetching){
        return <>
            <Loading/>
        </>
    }
    
    let stocks=[]
    for (let i=0;i<data.data.length;i+=1)
    {
        stocks.push(`${data.data[i].symbol} | ${data.data[i].name} `)
        
    }

    return(
       <div>
           <StockList data={stocks}/>
       </div>
    )


}



export default SearchStocks