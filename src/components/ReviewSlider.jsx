import React, { useRef, useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Testimonal = ({ heading, subheading, data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = useRef([]); // Array of refs for slides
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Update the state with the new window width
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Set initial position of the slides using the refs
  useEffect(() => {
    slides.current.forEach((slide, index) => {
      if (slide) {
        if(windowWidth >= 1536)
          slide.style.left = `${index * 50}%`;
        else if(windowWidth >= 1280)
          slide.style.left = `${index * 60}%`;
        else if(windowWidth >= 1024)
          slide.style.left = `${index * 65}%`;
        else if(windowWidth >= 768)
          slide.style.left = `${index * 75}%`;
        else if(windowWidth >= 640)
          slide.style.left = `${index * 80}%`;
        else
          slide.style.left = `${index * 100}%`;
      }
    });
  }, []);

  // Handle slide transitions based on currentSlide
  useEffect(() => {
    slides.current.forEach((slide) => {
      if (slide) {
        if(windowWidth >= 1536)
          slide.style.transform = `translateX(-${currentSlide * 50}%)`;
        else if(windowWidth >= 1280)
          slide.style.transform = `translateX(-${currentSlide * 60}%)`;
        else if(windowWidth >= 1024)
          slide.style.transform = `translateX(-${currentSlide * 65}%)`;
        else if(windowWidth >= 768)
          slide.style.transform = `translateX(-${currentSlide * 75}%)`;
        else if(windowWidth >= 640)
          slide.style.transform = `translateX(-${currentSlide * 80}%)`;
        else
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
      }
    });
  }, [currentSlide]);

  const goPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="roboto text-center py-12">
      <h3 className='md:text-4xl text-3xl capitalize font-bold text-red-600'>{heading}</h3>
      <p className='md:text-lg text-base text-gray-600'>{subheading}</p>
      <div className='w-full h-[300px] relative overflow-hidden flex justify-center items-center mt-10 mb-5'>
        {data.map((elem, index) => (
          <ReviewCard
            key={index}
            ref={(el) => (slides.current[index] = el)} // Set ref dynamically for each slide
            data={elem}
          />
        ))}

        {/* Navigation buttons */}
        <button onClick={goPrev} className='absolute top-1/2 md:left-6 left-1 z-50 rounded-full gray-bg-button font-bold w-8 md:h-11 h-8 md:w-11 md:text-xl text-base justify-center text-center items-center flex'> <FaArrowLeft /> </button>
        <button onClick={goNext} className='absolute top-1/2 md:right-6 right-1 z-50 rounded-full gray-bg-button font-bold w-8 md:h-11 h-8 md:w-11 md:text-xl text-base justify-center text-center items-center flex'> <FaArrowRight /> </button>
      </div>

    </section>
  );
};

export default Testimonal;
