import React, { useState } from "react";
import {List,Typography,AutoComplete} from 'antd'
import { useGetListQuery } from "../services/allStocksApi";
import { Link,Navigate } from "react-router-dom";
import { Loading } from ".";

const StockList=(data,)=>{

    const [value,setValue]= useState('')
    const [options,setOptions]=useState([])
    const [stockList,setList]=useState(data.data)    
    const [allstockList,setAll]=useState(data.data)   

    const onChange=(data)=>{
        setValue(data)
        setList(allstockList)
    }
   
    const onSearch=(searchtext)=>{
        if (searchtext===''){
            setOptions([])
        }
       searchtext= searchtext.toUpperCase()

        let prefix=allstockList.filter((text)=>text.startsWith(searchtext))

        prefix=prefix.slice(0,10)
        
        let holder=[]
        for(let i=0;i<prefix.length;i++){
            holder.push({value: prefix[i]})
        }
        
        setOptions(holder)
    }
    const onSelect=(value,option)=>{
        setList([value])
    }

    return(
        <>
            <AutoComplete 
            style={{
                width: 400,
              }}
              dropdownMatchSelectWidth={500}
            allowClear
            placeholder="Search Tickers"
            options={options}
            value={value}
            onChange={onChange}
            onSearch={onSearch}
            onSelect={onSelect}
            />
            <List
            header={<Typography.Title level={2}>All Stocks</Typography.Title>}
            dataSource={stockList}
            renderItem={(item)=>
            <Link to={`/stocks/${item}`}>
            <List.Item className="lift">
            
                {item} 
            
            </List.Item>
            </Link>
            }
            
            bordered
            size="small"
            pagination={{
                pageSize:20,
                pageSizeOptions:[20,50,100]
            }}
            />
        
        </>
        
        
    
    
    
    )


}

export default StockList