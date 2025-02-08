import React, { forwardRef } from 'react';
import { FaInfo } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} className='roboto flex flex-col justify-center items-center md:px-16 px-8 py-10'>
      <h3 className='text-4xl capitalize font-bold text-red-600'>About FitSync</h3>
      <p className='text-lg text-gray-600'>Where Strength Meets Commitment</p>
      <div className='flex border my-10 text-center rounded-2xl overflow-hidden shadow-2xl'>
        <div className='py-10 px-14 w-1/2'>

          <div className='text-3xl inline-block bg-red-600 text-white p-5 rounded-full'>
            <FaInfo />
          </div>

          <h4 className='text-2xl text-red-600 capitalize font-semibold my-3'>who are we</h4>
          <p className='text-lg text-gray-600'>At FitSync, we are more than just a gym—we are a supportive community. Our team is composed of passionate fitness enthusiasts, expert trainers, and individuals who share a common goal: to help you become your best self. Whether your focus is weight loss, muscle gain, or overall wellness, we are committed to providing the guidance and motivation needed every step of the way. FitSync is a space where everyone, no matter their fitness level, is welcomed and encouraged to progress together.</p>
        </div>
        <div className='py-10 px-14 w-1/2 bg-red-600 text-white'>

          <div className='text-3xl inline-block bg-white text-red-600 p-5 rounded-full'>
            <FaDumbbell />
          </div>

          <h4 className='text-2xl capitalize font-semibold my-3' >What We Offer</h4>
          <p className='text-lg' >At FitSync, we provide all the tools you need to reach your fitness goals. From expert trainers and personalized workout plans to group classes and state-of-the-art equipment, we offer a variety of services designed to help you succeed. Whether you're looking to build strength, improve endurance, or stay active, we’ve got everything covered to ensure you meet your fitness aspirations.</p>
        </div>
      </div>
    </section>
  )
})

export default About