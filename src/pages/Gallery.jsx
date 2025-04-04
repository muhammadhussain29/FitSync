import React from "react";
import SecondaryHeader from '../components/SecondaryHeader';
import GallerySection from '../components/GallerySection';
import ReviewSlider from '../components/ReviewSlider';
import Achievement from "../components/Achievement";

const testimonals = [
  {
    "name": "Emily Carter",
    "review": "FitSync has been a game changer for me! The personalized workout plans and nutrition guidance have helped me stay consistent and achieve my fitness goals.",
    "rating": 5
  },
  {
    "name": "Michael Johnson",
    "review": "I love how easy it is to track my progress with FitSync. The app keeps me motivated and helps me push my limits every day!",
    "rating": 5
  },
  {
    "name": "Sarah Williams",
    "review": "The FitSync community is amazing! Seeing others' progress and getting support from trainers has made my fitness journey so much more enjoyable.",
    "rating": 4.5
  },
  {
    "name": "David Brown",
    "review": "As someone who struggled with consistency, FitSync has been a lifesaver. The reminders and structured programs keep me on track.",
    "rating": 5
  },
  {
    "name": "Sophia Martinez",
    "review": "The variety of workouts and exercises available on FitSync is incredible! It keeps my workouts fresh and exciting every day.",
    "rating": 4.8
  }
]


const Gallery = () => {
  return (
    <>
      {/* Hero Section */}
      <SecondaryHeader heading={"Step Inside FitSync"} subheading={"World-class facilities, top-notch equipment, and an unbeatable atmosphere."} text={"Our gallery captures the energy, discipline, and passion of FitSync members. From intense workouts to inspiring achievements, take a look at what makes FitSync special."} button={["Take a Virtual Tour"]}/>
      {/* Achievements Section */}
      <Achievement />

      {/* Main Gallery */}
      <GallerySection heading={"FitSync in Action"} subheading={"Explore our gallery of inspiring fitness journeys, achievements, and community events."} btn={"View More"} />

      {/* Testimonials Section */}
      <ReviewSlider heading={"What Our Members Say"} subheading={"Read testimonials from fitness enthusiasts who found their strength with us."} data={testimonals} />
      
        {/* CTA Section */}
      <section className="py-12 px-8 text-center ">
      <h3 className='md:text-4xl text-3xl capitalize font-bold text-red-600'>Join FitSync Today!</h3>
      <p className='md:text-lg text-base text-gray-600'>Experience the best in fitness and training.</p>
        <button className="mt-4 px-6 py-3 button mx-auto">Get Started</button>
      </section>
      
    </>
  );
};

export default Gallery;
