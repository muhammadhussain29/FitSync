import React, { useRef } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Facilities from '../components/Facilities'

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
        </>
    )
}

export default Home