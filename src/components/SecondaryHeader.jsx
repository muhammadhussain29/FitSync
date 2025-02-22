import React from 'react'
import bgImg from '../assets/product.webp'

const SecondaryHeader = ({heading , subheading, button, text }) => {
    return (
        <header
            className="roboto text-white bg-black/70 bg-blend-overlay flex flex-col justify-center md:px-16 px-8 w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <h1 className='lg:text-7xl sm:text-5xl text-2xl text-center capitalize font-semibold text-red-600'>{heading}</h1>
            <p className='lg:text-xl text-sm font-light lg:tracking-widest sm:tracking-wider tracking-tight text-center text-gray-400'>{subheading}</p>
            <p className='md:w-[55vw] w-full md:text-base text-sm md:my-5 my-2 text-center mx-auto'>{text}</p>
            <div className='flex text-center text-nowrap md:gap-5 gap-2 md:justify-normal justify-center mx-auto flex-wrap'>
                {button.map((elem,index)=>{
                    return <button key={index} className='button md:px-7 px-4 md:py-3 py-2'>{elem}</button>
                })}
            </div>
        </header>
    )
}

export default SecondaryHeader