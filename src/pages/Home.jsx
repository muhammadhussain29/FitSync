import React, { useContext, useRef } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Facilities from '../components/Facilities'
import GallerySection from '../components/GallerySection'
import ProductSection from '../components/ProductSection'
import Trainers from '../components/Trainers'
import FAQ from '../components/FAQ'
import { ProductsList } from '../context/productData'

const Home = () => {

  const product = useContext(ProductsList)

    const learnMoreRef = useRef(null);

    const handleScroll = () => {
        learnMoreRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Header handleScroll={handleScroll} />
            <About ref={learnMoreRef} />
            <Facilities />
            <GallerySection />
            <ProductSection heading={"Our Latest Products"} subheading={"Discover the best deals on high-quality products"} products={product.slice(0,4)} button={"View All Products"} />
            <Trainers />
            <FAQ/>
        </>
    )
}

export default Home