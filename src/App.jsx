import {Routes,Route} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/signup' element={<SignUp/>}/>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/checkout' element={<Checkout/>}/>
           <Route path='/add-product' element={<Checkout/>}/>

    </Routes>
    </div>
  )
}

export default App
