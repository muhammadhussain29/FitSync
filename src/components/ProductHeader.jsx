import React from 'react'
import bgImg from '../assets/product.webp'

const ProductHeader = () => {
    return (
        <header
            className="roboto text-white bg-black/70 bg-blend-overlay flex flex-col justify-center md:px-16 px-8 w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <h1 className='lg:text-7xl sm:text-5xl text-2xl text-center capitalize font-semibold text-red-600'>Gear Up. Power On.</h1>
            {/* <h1 className='lg:text-7xl sm:text-5xl text-2xl md:text-left text-center capitalize font-semibold text-red-600'> Transform Your Life</h1> */}
            <p className='lg:text-xl text-sm font-light lg:tracking-widest sm:tracking-wider tracking-tight text-center text-gray-400'>Explore Premium Gym Products for Every Fitness Level</p>
            <p className='md:w-[55vw] w-full md:text-base text-sm md:my-5 my-2 text-center mx-auto'>At FitSync, we offer a curated selection of premium gym equipment, stylish apparel, and performance-boosting supplements. Whether you're a beginner or a seasoned athlete, our products are designed to help you train smarter, recover faster, and stay motivated on your fitness journey. Gear up and stay ahead!</p>
            <div className='flex text-center text-nowrap md:gap-5 gap-2 md:justify-normal justify-center mx-auto flex-wrap'>
                <button className='button md:px-7 px-4 md:py-3 py-2'>View Best Sellers</button>
                <button className='button md:px-7 px-4 md:py-3 py-2'>Explore Products</button>
            </div>
        </header>
    )
}

export default ProductHeader