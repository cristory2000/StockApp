import React,{useState} from "react";
import moment from "moment";
import { Row, Select,Col,Card, Typography,Avatar } from "antd";
import { useGetNewsQuery } from "../services/stockNewsApi";
const {Option}=Select
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News =({simplified})=>{
    const [newsCategory,setNewsCategory]=useState('finance')
    const {data:news,isFetching}=useGetNewsQuery({newsCategory,count: (simplified) ? 10:25})
    
    
    while(isFetching){
        return '...Loading'
    }
   
    let search
    if (!simplified){
        search=<Col span={24}>
                    <Select 
                        showSearch
                        placeholder="Search news.."
                        className="select-news"
                        onChange={(value)=>(setNewsCategory(value))}
                        //filterOption={(input,option)=>}
                    >
                     <Option value="inflation">Inflation</Option>
                     <Option value="S&P">S&P</Option> 
                     <Option value="Dow">Dow</Option>  
                    
                    </Select>
                </Col>
    }
    else{
        search=''
    }
    
    
    return(
        <>
        <Row gutter={[24,24]}>
             
            
            {search}
            {news.articles.map((news,i)=>(
                <Col xs={24} s={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.link} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Typography.Title level={4} className="news-title">{news.title}</Typography.Title>
                                <img style={{maxWidth:'100px', maxHeight:'100px'}}src={news?.media|| demoImage} alt="news"/>
                            </div>
                            <p>{news.summary.length > 100 ? `${news.summary.substring(0, 100)}...` : news.summary}</p>
                            
                            <div className="provider-container">
                                <div>
                                {/* <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl||demoImage} alt="news"></Avatar> */}
                                 <Typography.Text className="provider-name"> {news.rights} </Typography.Text> 
                                </div>
                            </div>
                             <Typography.Text> {moment(news.published_date).startOf('ss').fromNow()} </Typography.Text> 
                        </a>
                    </Card>
                </Col>
            ))} 
        </Row>
        </>
    )
}

export default News