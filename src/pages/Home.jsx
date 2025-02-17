import React, { useRef } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Facilities from '../components/Facilities'
import GallerySection from '../components/GallerySection'
import ProductSection from '../components/ProductSection'
import Trainers from '../components/Trainers'
import FAQ from '../components/FAQ'

const Home = () => {

    const learnMoreRef = useRef(null);

    const handleScroll = () => {
        learnMoreRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const product = [
        {
          "image": "/products/product1.png",
          "name": "Whey Protein",
          "price": 54.99
        },
        {
          "image": "/products/product2.png",
          "name": "Pre Workout",
          "price": 49.99
        },
        {
          "image": "/products/product3.png",
          "name": "Lifting Gloves",
          "price": 44.99
        },
        {
          "image": "/products/product4.png",
          "name": "Smart Water Bottle",
          "price": 39.99
        },
        {
          "image": "/products/product5.png",
          "name": "Mass Gainer",
          "price": 59.99
        },
        {
          "image": "/products/product6.png",
          "name": "Wrist Wraps",
          "price": 19.99
        },
        {
          "image": "/products/product7.png",
          "name": "Weight Lifting Belt",
          "price": 34.99
        },
        {
          "image": "/products/product8.png",
          "name": "Shaker",
          "price": 24.99
        },
        {
          "image": "/products/product9.png",
          "name": "Shaker",
          "price": 19.99
        },
        {
          "image": "/products/product10.png",
          "name": "Sweat Proof Towel",
          "price": 24.99
        },
        {
          "image": "/products/product11.png",
          "name": "Wrist Wrap and Straps",
          "price": 49.99
        },
        {
          "image": "/products/product12.png",
          "name": "Blender Bottle",
          "price": 29.99
        },
        {
          "image": "/products/product13.png",
          "name": "Sweat Proof Towel",
          "price": 19.99
        },
      ]

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