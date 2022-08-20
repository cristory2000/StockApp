import React,{useState} from "react";
import {Line} from 'react-chartjs-2'
import {Col,Row,Typography,Select} from 'antd'
import { useParams } from 'react-router-dom';
import { useGetHistoryQuery } from "../services/stockHistory";
import millify from "millify";
import Chart from 'chart.js/auto';
import {Loading} from './'

const {Option}=Select
const LineChart=({ currentPrice, coinName })=>{
    const [timePeriod,setTime]=useState("1day")
    let coinPrice = [];
    let coinTimestamp = [];
    const{ item }=useParams()
    let i=0
    for(i=0;i<item.length;i++)
    {
      if (item[i]===' ')
      {
        break
      }
    }
    let ticker=item.substring(0,i)
    
    
    const {data:coinHistory,isFetching}=useGetHistoryQuery({ticker:ticker,interval:timePeriod,outputsize:'30'})
    
    if (isFetching)
    {
        return (
        <>
          <Loading/>
        </>
        )
    }
    for (let i = 0; i < coinHistory?.values?.length; i += 1) {
        coinPrice.push(millify(coinHistory?.values[i].close));
      }
    coinPrice.reverse()  
      for (let i = 0; i < coinHistory?.values?.length; i += 1) {
        coinTimestamp.push(new Date(coinHistory?.values[i]?.datetime).toLocaleDateString());
      }
      coinTimestamp= coinTimestamp.reverse()
     
      const data={
            labels:coinTimestamp,
            datasets:[
                {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
                }
            ]


      }

      const options = {
        responsive: true,
        plugins: {
        
        title: {
      display: true,
      text: `${item}`,
    },
  },
};
const onChange=(value)=>{
  setTime(value)
}

return (
    <>
       
       <Select
       style={{
        width: 120,
      }}
        defaultValue={timePeriod}
        onChange={onChange}
       >
         <Option value="1day">1day</Option>
         <Option value="1week">1week</Option>
         <Option value="1month">1month</Option>
         
       </Select>
       <Row className="chart-header">
        <Typography.Title level={2} className="chart-title">{ticker} Price Chart </Typography.Title>
        <Col className="price-container">
          <Typography.Title level={5} className="price-change"></Typography.Title>
          <Typography.Title level={5} className="current-price">Current {coinName} Price: $ {coinPrice[coinPrice.length-1]}</Typography.Title>
        </Col>
        
      </Row>   
      <Line data={data} options={options}/>
    </>

)
}

export default LineChart

