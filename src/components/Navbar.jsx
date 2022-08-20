import React from 'react'
import {Button,Menu,Typography,Avatar} from 'antd'
import {Link} from 'react-router-dom'
import MenuItem from 'antd/lib/menu/MenuItem'
import { BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons'
import pic from '../images/bar.png'

const Navbar = () => {
  return (
    <div className='nav-container'>
        
        <div className='logo-container'>
            <Avatar  size="large" src={pic}/>
            
            <Typography.Title level={2} className='logo'>
            
                <Link to ="/"> Stocks </Link>
            
            </Typography.Title>
        </div>
        
        <Menu theme='dark'>
            <Menu.Item> {<HomeOutlined/>}
              <Link to='/'> Home </Link>
            </Menu.Item>
            <Menu.Item> {<FundOutlined/>}
              <Link to='/stocks'> Stocks </Link>
            </Menu.Item>
            <Menu.Item> {<MoneyCollectOutlined/>}
              <Link to='/sectors'>Sectors</Link>
            </Menu.Item>
            <Menu.Item> {<BulbOutlined/>}
              <Link to='/news'>News</Link>
            </Menu.Item>
        </Menu>


    </div>
  )
}

export default Navbar