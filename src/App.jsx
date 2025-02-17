import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Gallery from './pages/Gallery'
import Product from './pages/Product'
import Member from './pages/Member'
import Cart_Top_Buttton from './components/Cart_Top_Buttton'
import Cart from './components/Cart'
import ProductData from './context/productData'


const App = () => {

  const [showCart, setShowCart] = useState(false)

  return (
    <div className='h-full'>
      <Navbar />
      <Cart showCart={showCart} setShowCart={setShowCart} />
      <Routes>
        <Route exact path="/" element={
          <ProductData>
            <Home />
          </ProductData>
        } />
        <Route path="/product" element={
          <ProductData>
            <Product />
          </ProductData>
        }  />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/member" element={<Member />} />
      </Routes>
      <Cart_Top_Buttton setShowCart={setShowCart} />
      <Footer />
    </div>
  )
}

export default App