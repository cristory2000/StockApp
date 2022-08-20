import React from 'react'
import {Navbar,Homepage,News,Stocks,StockDetails,LineChart,StockList,SearchStocks} from './components'
import './app.css'
import { Layout, Typography,Space,} from 'antd';
import { Route , Routes,Link} from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>

        <div className='navbar'>
            <Navbar/>
        </div>
        <div className='main'>
            <Layout>
              <div className='routes '>
                <Routes>
                  <Route path='/' element= {<Homepage/>}>
                    

                  </Route>
                  <Route path='/news'element={<News/>}>

                  </Route>
                  <Route path='/sectors' element={<Stocks/>}>

                  </Route>
                  <Route path="/stocks" element={<SearchStocks/>}>

                  </Route>
                  <Route path ="/stocks/:item" element={<LineChart/>}>
                    
                  </Route>
                  
                </Routes>
              </div>
            </Layout>
        
          <div className='footer'>
            <Typography.Title level={5} style={{color:'white' ,textAlign:'center'}}>
              Stocks <br/>
              All Rights Reserved
            </Typography.Title>
            
            <Space>
              <Link to='/'> Home </Link>
              <Link to='/stocks'> Stocks </Link>
              <Link to='/exchanges'>Exchanges</Link>
              <Link to='/news'>News</Link>
            </Space>
          
          </div>
        </div>
        
    </div>
        
  )
}

export default App