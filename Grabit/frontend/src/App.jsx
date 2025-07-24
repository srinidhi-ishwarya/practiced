import React from 'react'
import Navbar from './components/navbar/Navbar'
import TitleBar from './components/titlebar/TitleBar'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Help from './components/Help';
import About from './components/About';


const App = () => {
  return (
    <div>
        
      <BrowserRouter>
              {/* <Navbar/> */}
              <Routes>
                   <Route path='/help' element={<Help/>}/>
                     <Route path='/about' element={<About/>}/>
                </Routes>

      </BrowserRouter>
   
        {/* <TitleBar /> */}
      
    </div>
  )
}

export default App