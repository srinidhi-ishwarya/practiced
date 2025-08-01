import React from 'react'
import SideBar from './components/SideBar'
import Main from './components/Main'

const App = () => {
  return (
    <div className='d-flex'>
   
        <div className='side_bar'>
        
          <SideBar/>
        </div>
        <div className='main_bar'>
             <Main/>
        </div>


    </div>
  )
}

export default App