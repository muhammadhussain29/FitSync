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

    return (
        <>
            <Header handleScroll={handleScroll} />
            <About ref={learnMoreRef} />
            <Facilities />
            <GallerySection />
            <ProductSection />
            <Trainers />
            <FAQ/>
        </>
    )
}

export default Home