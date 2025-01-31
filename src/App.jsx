import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Gallery from './pages/Gallery'
import Product from './pages/Product'
import Member from './pages/Member'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/product" element={<Product />} />
          <Route path="/member" element={<Member />} />
      </Routes>
    </>
  )
}

export default App