import React from 'react'
import bgImg from '../assets/bg.webp'
import { Link } from 'react-router-dom'

const Header = (props) => {

    return (
        <header
            className="roboto text-white bg-red-800/20 bg-blend-overlay flex flex-col justify-center md:px-16 px-8 w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <h1 className='text-7xl capitalize font-semibold text-red-600'><span className='stroke font-sans'>Sync</span> Your Strength,</h1>
            <h1 className='text-7xl capitalize font-semibold text-red-600'> Transform Your Life</h1>
            <p className='text-xl font-light tracking-widest'>Join FitSync and take your fitness journey to the next level.</p>
            <p className='w-[60vw] text-base my-5'>At FitSync, we believe fitness is more than just a routine—it’s a lifestyle. With cutting-edge equipment, expert trainers, and a supportive community, we help you stay on track and achieve your goals. Whether you’re here to build muscle, improve endurance, or just stay active, we’ve got you covered. Let’s sync up and get stronger together!</p>
            <div className='flex'>
                <button onClick={props.handleScroll} className='button px-7 py-3 font-semibold text-nowrap mr-5'>Leran More</button>
                <button className='button font-semibold text-nowrap'>
                    <Link className='px-7 py-3' to="/gallery">Achievements</Link>
                </button>
            </div>
        </header>
    )
}

export default Header