import React from 'react'
import Body from './Body'
import Sidebar from './Sidebar'


const Homebody = () => {
  return (
    <>
    <div className='container homebody'>
      <div className='row'>
        <div className='body col-8'>
          <Body/>
        </div>
        <div className='sidebar col-4'>
          <Sidebar/>
        </div>
      </div>
      
     
    </div>
    
    
    </>
    
  )
}

export default Homebody