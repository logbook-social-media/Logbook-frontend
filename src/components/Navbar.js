import { UserOutlined, NotificationOutlined, MessageOutlined, HomeOutlined, SearchOutlined, AudioOutlined} from '@ant-design/icons';
import  logo from '../assets/LoGBooK.png'
import { Input, Space } from 'antd'
import React from 'react';

const Navbar = () => {

  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  
  return (
    <>
    <div className='navbar-nav'>
      <div className='container'>
        <div className='row'>
        <div class="col-2   text-black">
          <img src={logo} alt={logo}/>
          </div>
          <div class="col-8  text-black">
          <div className='nav-search'>
          <Search className='navbar-search' placeholder="input search text" onSearch={onSearch} />  
        </div>
          </div>
          <div class="col-2 nav-icon">
            <div>
              <HomeOutlined />
            </div>
            <div>
              <UserOutlined /> 
            </div>
            <div>
              <NotificationOutlined  />
            </div>
            <div>
              <MessageOutlined />
            </div> 
          </div>
        </div>
      </div>
    </div>      
    </>
  )
}
export default Navbar