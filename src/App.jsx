import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Gallery from './pages/Gallery'
import Product from './pages/Product'
import Member from './pages/Member'
import Cart_Top_Buttton from './components/Cart_Top_Buttton'


const App = () => {
  return (
    <div className='h-full'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/product" element={<Product />} />
        <Route path="/member" element={<Member />} />
      </Routes>
      <Cart_Top_Buttton />
      <Footer />
    </div>
  )
}

export default App