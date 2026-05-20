import React  from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import FashionApparel from './components/FashionApparel'
import Beauty from './components/Beauty'
import Electronics from './components/Electronics'
function App() {
 

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/fasapp' Component={FashionApparel}/>
        <Route path='/beauty'Component={Beauty}/>
        <Route path='/electronics'Component={Electronics}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
