import React from 'react'
import bgImg from '../assets/Facilities.webp'
import FacilitiesCard from './FacilitiesCard';
import { FaDumbbell, FaUserTie, FaUsers, FaHeartbeat } from "react-icons/fa";

const Facilities = () => {

    const data = [
        {
            Title: "State-of-the-Art Equipment",
            Icon: <FaDumbbell />,
            Text: "Train with cutting-edge fitness equipment designed for all levels. From cardio machines to advanced strength training gear, FitSync has everything you need to maximize your workouts."
        },

        {
            Title: "Expert Trainers & Personalized Coaching",
            Icon: <FaUserTie />,
            Text: "Achieve your goals with the help of certified trainers. Get personalized coaching, customized workout plans, and expert guidance to take your fitness journey to the next level."
        },
        {
            Title: "Group Fitness Classes",
            Icon: <FaUsers />,
            Text: "Stay motivated with high-energy group classes like HIIT, yoga, and strength training. Train with a community that pushes you to be your best!"
        },
        {
            Title: "Wellness & Recovery Zone",
            Icon: <FaHeartbeat />,
            Text: "Recover faster and train smarter with dedicated wellness facilities, including stretching areas, saunas, and nutrition support for a holistic fitness approach."
        }

    ]

    return (
        <div className='roboto bg-red-600/80 bg-blend-overlay md:px-16 px-8 py-10 text-center bg-cover bg-center' style={{ backgroundImage: `url(${bgImg})` }}>
            <h3 className='text-4xl text-white capitalize font-bold'>Facilities That Redefine Fitness</h3>
            <div className='flex justify-center gap-6 mt-10'>
                {data.map((elem, index) => (
                    <FacilitiesCard elem={elem} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Facilities