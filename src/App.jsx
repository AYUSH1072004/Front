import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Product from './Pages/Product'


const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/product' element={<Product/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App