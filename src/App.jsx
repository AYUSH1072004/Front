import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Product from './Pages/Product'
import Mens from './Pages/Mens'
import Womens from './Pages/Women'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'


const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/home' element={<Home/>}/>
     <Route path='/product' element={<Product/>}/>
     <Route path='/mens' element={<Mens/>}/>
     <Route path='/womans' element={<Womens/>}/>
     <Route path='/signup' element={<SignUp/>}/>
     <Route path='/signin' element={<SignIn/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App