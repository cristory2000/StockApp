import React from 'react'
import millify from 'millify'
import {Link} from 'react-router-dom'
import {Card,Row,Col,Input} from 'antd'
import { useGetGroupsQuery } from '../services/groupsApi'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Pie} from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend);
const Stocks=()=>{
    const  {data:stockList,isFetching}=useGetGroupsQuery()
    let my=[]
    
    while(isFetching){
        return '...Loading'
    }
    
        for(var i in stockList)
            my.push(stockList[i])
            my.sort((a,b)=>(a.perf_week-b.perf_week))
            my.reverse()
    let perf=[]
    for (let i = 0; i < my?.length; i += 1) {
        perf.push(my[i]?.perf_week)
       }
    let label=[]
       for (let i = 0; i < my?.length; i += 1) {
            label.push(my[i]?.name)
    }
    
    
    const data={
      labels:label,
        datasets: [{
            label:'Help',
            data: perf,
            backgroundColor:[ 'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(128,128 ,128, 0.2)',
            'rgba(0, 255, 0,0.2)',
            'rgba(0, 255, 255,0.2)',
            'rgba(0,0,153,0.2)',
            'rgba(102,153,0,0.2)',
        ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(128,128 ,128, 1)',
                'rgba(0, 255, 0,1)',
                'rgba(0, 255, 255,1)',
                'rgba(0,0,153,1)',
                'rgba(102,153,0,1)',
              ],
            borderWidth:1,
        
        
        }]
    }

    
    
    return (
        <>
            <Pie data={data} className='pie'/>
          {/*  <Row gutter={[32,32]} className="crypto-card-container">
            { my.map((sector)=>(
                <Col xs={24} sm={12} lg={6} className='crypto-card' key={sector.name}>
                    <Link key={sector.name} to={`stocks/${sector.name}`}>
                        <Card 
                            title={`${sector.name}  ${sector.perf_week}`}
                            hoverable='true'
                            //extra={<img className='crypto-image'></img>}
                        >
                        <p>Daily change: {millify(sector.change)}</p>
                        <p>PE: {millify(sector.pe)}</p>
                        <p>Market Cap: {millify(sector.market_capitalization)}</p>
                        </Card>
                    </Link>
                </Col> 

            )
            
            
            )}
           </Row> */}
        </>
    )
}
export default Stocks