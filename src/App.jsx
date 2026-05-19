import React  from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import FashionApparel from './components/FashionApparel'
function App() {
 

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/fasapp' Component={FashionApparel}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
