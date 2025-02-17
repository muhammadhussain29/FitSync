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

    const faqs =[
        {
          "question": "What is FitSync?",
          "answer": "FitSync is a premium fitness platform designed to help you track your workouts, find training programs, and stay motivated on your fitness journey."
        },
        {
          "question": "Do I need a membership to access FitSync services?",
          "answer": "While some features are free, a membership unlocks exclusive workout plans, personalized coaching, and advanced tracking features."
        },
        {
          "question": "Can I book personal training sessions through FitSync?",
          "answer": "Yes! You can schedule 1-on-1 training sessions with certified trainers directly through our platform."
        },
        {
          "question": "Is there a mobile app for FitSync?",
          "answer": "Yes! FitSync has a mobile app available for both iOS and Android, making it easy to track your workouts on the go."
        },
        {
          "question": "What types of workout programs does FitSync offer?",
          "answer": "FitSync offers a variety of programs, including strength training, weight loss, HIIT, yoga, and customized personal training plans."
        }
      ];
      

    return (
        <>
            <Header handleScroll={handleScroll} />
            <About ref={learnMoreRef} />
            <Facilities />
            <GallerySection />
            <ProductSection heading={"Our Latest Products"} subheading={"Discover the best deals on high-quality products"} products={product.slice(0,4)} button={"View All Products"} />
            <Trainers />
            <FAQ heading={"Got Questions? We've Got Answers!"} subheading={"Explore our FAQs to learn more about FitSync and how we can help you achieve your fitness goals"} faqs={faqs}/>
        </>
    )
}

export default Home