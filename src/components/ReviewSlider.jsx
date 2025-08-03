import React, { useRef, useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const ReviewSlider = ({ heading, subheading, data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef(null);

  const goPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="roboto text-center py-12">
       <h3 className='md:text-4xl text-3xl capitalize font-bold text-red-600'>
       {heading}
      </h3>
      <p className='md:text-lg text-base text-gray-600 max-w-3xl mx-auto'>
        {subheading}
      </p>

      <div className='w-full relative overflow-hidden flex justify-center items-center mt-10 mb-5'>
        <div
          ref={slidesRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${data.length * 100}%` }}
        >
          {data.map((elem, index) => (
            <div key={index} className="w-full flex-shrink-0 flex justify-center">
              <ReviewCard data={elem} />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button onClick={goPrev} className='absolute top-1/2 md:left-6 left-1 z-50 rounded-full gray-bg-button font-bold w-8 md:h-11 h-8 md:w-11 md:text-xl text-base justify-center text-center items-center flex -translate-y-1/2'>
          <FaArrowLeft />
        </button>
        <button onClick={goNext} className='absolute top-1/2 md:right-6 right-1 z-50 rounded-full gray-bg-button font-bold w-8 md:h-11 h-8 md:w-11 md:text-xl text-base justify-center text-center items-center flex -translate-y-1/2'>
          <FaArrowRight />
        </button>
        </div>

    </section>
  );
};

export default ReviewSlider;
