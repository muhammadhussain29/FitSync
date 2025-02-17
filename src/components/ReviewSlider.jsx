import React, { useRef, useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const data = [
  {
    "name": "John Doe",
    "review": "FitSync has completely transformed my workout routine. The tracking features are easy to use, and the workout plans are top-notch. Highly recommend!",
    "location": "New York, NY",
    "rating": 5
  },
  {
    "name": "Sarah Lee",
    "review": "I love how FitSync helps me stay motivated. The interface is user-friendly, and the progress tracking is excellent. It's the perfect app for anyone serious about fitness.",
    "location": "Los Angeles, CA",
    "rating": 4
  },
  {
    "name": "Michael Johnson",
    "review": "FitSync is a great product, but I think it could benefit from more advanced customization options for workout routines. Otherwise, it's a solid choice for tracking workouts.",
    "location": "Chicago, IL",
    "rating": 4
  },
  {
    "name": "Emily Davis",
    "review": "I’ve been using FitSync for a few months now, and it has really helped me stay on track with my fitness goals. The integration with my smartwatch is seamless.",
    "location": "Miami, FL",
    "rating": 5
  },
  {
    "name": "David Smith",
    "review": "The app is good, but I wish there were more community features to connect with other users. Overall, the workout plans are helpful, and the tracking works well.",
    "location": "Austin, TX",
    "rating": 3
  }
]


const Testimonal = () => {
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
      <h3 className='md:text-4xl text-3xl capitalize font-bold text-red-600'>User Reviews</h3>
      <p className='md:text-lg text-base text-gray-600'>See the difference FitSync can make for you.</p>
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
