import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const trainers = [
  { id: 1, name: "John Doe", detail: "Web Developer", image: "/user1.jpg" },
  { id: 2, name: "Sarah Smith", detail: "UI/UX Designer", image: "/user2.jpg" },
  { id: 3, name: "Michael Brown", detail: "Project Manager", image: "/user3.jpg" },
  { id: 4, name: "Alice Johnson", detail: "Software Engineer", image: "/user4.jpg" },
  { id: 5, name: "Emma Wilson", detail: "Graphic Designer", image: "/user5.jpg" },
];

const TrainerSlider = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? trainers.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev >= trainers.length - 3 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-gray-100 py-16">
      {/* Slider Container */}
      <div className="relative w-full max-w-5xl overflow-hidden">
        <div
          className="flex items-center transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 33.33}%)` }}
        >
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="flex flex-col items-center flex-shrink-0 w-1/3 px-4 transition-transform duration-700 ease-in-out"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-32 h-32 rounded-full border-4 border-gray-300 object-cover"
              />
              <h3 className="mt-3 text-xl font-semibold">{trainer.name}</h3>
              <p className="text-sm text-gray-500">{trainer.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 p-4 text-white bg-gray-800 rounded-full hover:bg-gray-600"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 p-4 text-white bg-gray-800 rounded-full hover:bg-gray-600"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default TrainerSlider;
