import React from 'react'
import bgImg from '../assets/bg.webp'
import { Link } from 'react-router-dom'

const Header = (props) => {

    return (
        <header
            className="roboto text-white bg-black/40 bg-blend-overlay flex flex-col justify-center md:px-16 px-8 w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <h1 className='lg:text-7xl sm:text-5xl text-2xl md:text-left text-center capitalize font-semibold text-red-600'><span className='stroke font-sans'>Sync</span> Your Strength,</h1>
            <h1 className='lg:text-7xl sm:text-5xl text-2xl md:text-left text-center capitalize font-semibold text-red-600'> Transform Your Life</h1>
            <p className='lg:text-xl text-sm font-light lg:tracking-widest sm:tracking-wider tracking-tight md:text-left text-center text-gray-400'>Join FitSync and take your fitness journey to the next level.</p>
            <p className='md:w-[60vw] w-full md:text-base text-sm md:my-5 my-2 md:text-left text-center'>At FitSync, we believe fitness is more than just a routine—it’s a lifestyle. With cutting-edge equipment, expert trainers, and a supportive community, we help you stay on track and achieve your goals. Whether you’re here to build muscle, improve endurance, or just stay active, we’ve got you covered. Let’s sync up and get stronger together!</p>
            <div className='flex md:gap-5 gap-2 md:justify-normal justify-center'>
                <button onClick={props.handleScroll} className='text-center button md:px-7 px-4 md:py-3 py-2 text-nowrap'>Leran More</button>
                <button className='button text-nowrap'>
                    <Link className='md:px-7 px-4 md:py-3 py-2' to="/gallery">Achievements</Link>
                </button>
            </div>
        </header>
    )
}

export default Header