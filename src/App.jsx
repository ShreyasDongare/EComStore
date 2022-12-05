import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import ErrorPage from './pages/ErrorPage'
import Header from './components/Header'


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/product' element={<Product/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
} 

export default App

