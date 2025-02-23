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
{/* <section className="py-16 px-8 text-center bg-gray-100">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-red-600">Our Achievements</h2>
    <p className="text-lg text-gray-700 mt-2">
      Celebrating milestones, success stories, and fitness transformations.
    </p>
  </div> */}

  {/* Achievement Cards */}
  {/* <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0">
    
    <div className="bg-white shadow-xl p-8 rounded-lg border-t-4 border-red-600 transform hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-semibold text-gray-900">1000+ Happy Members</h3>
      <p className="text-gray-600 mt-2">A thriving fitness community growing stronger every day.</p>
    </div>

    <div className="bg-white shadow-xl p-8 rounded-lg border-t-4 border-red-600 transform hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-semibold text-gray-900">Award-Winning Trainers</h3>
      <p className="text-gray-600 mt-2">Certified professionals dedicated to your fitness journey.</p>
    </div>

    <div className="bg-white shadow-xl p-8 rounded-lg border-t-4 border-red-600 transform hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-semibold text-gray-900">10+ Major Fitness Events</h3>
      <p className="text-gray-600 mt-2">Uniting fitness enthusiasts through exciting challenges.</p>
    </div>

  </div>
</section> */}


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
