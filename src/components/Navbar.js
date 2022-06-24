import { UserOutlined, NotificationOutlined, MessageOutlined, HomeOutlined, SearchOutlined, AudioOutlined} from '@ant-design/icons';
import  logo from '../assets/LoGBooK.png'
import React from 'react';
import {useState, useEffect} from 'react'
import navbarSearch from '../assets/navbarSearch.svg'

const Navbar = () => {

  const[searchTerm, setSearhTerm]= useState([])

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
              <input placeholder='Search'></input>
              <img src={navbarSearch} alt={navbarSearch}/>
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