import React from 'react'
import millify from 'millify'
import {Row,Col,Statistic,Typography,Title} from 'antd'
import { useGetStocksQuery } from '../services/stocksApi'
import { useGetGroupsQuery } from '../services/groupsApi'
import {Link} from 'react-router-dom'
import {Stocks,News,StockDetails,Loading} from './'
import { ArrowDownOutlined,ArrowUpOutlined } from '@ant-design/icons'
import Loader from './Loading'
const Homepage=()=>{
    const {data:spy,isFetching}= useGetStocksQuery('/SPY');
    const {data:qqq,isFetching1}= useGetStocksQuery('/QQQ');
    const {data:dia,isFetching2}= useGetStocksQuery('/DIA');
    const {data:iwm,isFetching3}= useGetStocksQuery('/IWM');
    const {data:vix,isFetching4}=useGetStocksQuery('/VIX')
    
    while(isFetching || isFetching1 || isFetching2||isFetching3||isFetching4) {
        
        return <>
            <Loader/>
        </>
    }
    let style=posorneg(spy?.change_point)
    let style1=posorneg(qqq?.change_point)
    let style2=posorneg(dia?.change_point)
    let style3 =posorneg(iwm?.change_point)
    let style4=posorneg(vix?.change_point)
    return(
        <>
            <Typography.Title level={2} className='heading'>Global Stock Stats</Typography.Title>
            <Row>
                <Col span={12}><Statistic prefix={style[1]} title="S&P" suffix="%" valueStyle={{color:style[0]}} value={spy?.change_percentage} ></Statistic></Col>
                <Col span={12}><Statistic prefix={ style1[1] } value={qqq?.change_percentage} title="Nasdaq" valueStyle={{color:style1[0]}} suffix="%"></Statistic></Col>
                <Col span={12}><Statistic title="Dow Jones" prefix={ style2[1] } value={dia?.change_percentage} valueStyle={{color:style2[0]}} suffix="%"></Statistic></Col>
                <Col span={12}><Statistic title="Russell" prefix={ style3[1] } value={iwm?.change_percentage} valueStyle={{color:style3[0]}} suffix="%"></Statistic></Col>
                <Col span={12}><Statistic title="Volatility" prefix={ style4[1] } value={vix?.change_percentage} valueStyle={{color:style4[0]}} suffix="%"></Statistic></Col>
                {/* <Col span={12}><Statistic title="Total"></Statistic></Col> */}
            </Row>
            <div className='home-heading-container'>
                <Typography.Title level={2} className="home-title">Sectors Weekly Performance</Typography.Title>
                {/* <Typography.Title level={3} className="show-more"><Link to='/stocks'>Show More</Link></Typography.Title> */}
            </div>
            <Stocks/>
            <div className='home-heading-container'>
                <Typography.Title level={2} className="home-title">News </Typography.Title>
                <Typography.Title level={3} className="show-more"><Link to='/news'>Show More</Link></Typography.Title>
            </div>
            <News simplified={'True'}/>
        </>
    )
}

function posorneg(data){
    if(data<0){
        return ['#FF0000',<ArrowDownOutlined/>]
    }
    else if(data>0){
        return ['#008000',<ArrowUpOutlined/>]
    }
    return '#1e90ff'
}

export default Homepage