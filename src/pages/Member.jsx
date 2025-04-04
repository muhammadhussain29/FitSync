import React from "react";
import SecondaryHeader from "../components/SecondaryHeader";
import AchievementCard from "../components/AchievementCard";
import FAQ from "../components/FAQ";

const Member = () => {

  const ChooseUs = [{
    "heading": "Expert Trainers",
    "text": "Work with certified professionals who understand your body and goals."
  }, {
    "heading": "Modern Equipment",
    "text": "Train with the latest gym technology in a clean, safe environment."
  }, {
    "heading": "Flexible Schedules",
    "text": "Choose your time with our extended hours and 24/7 access options."
  }
  ]

  const faqs = [
    {
      "question": "Can I cancel my membership anytime?",
      "answer": "Yes, you can cancel your membership at any time without any cancellation fees. Simply contact our support or visit the front desk."
    },
    {
      "question": "Do you offer trial memberships?",
      "answer": "Yes! We offer a 7-day free trial so you can experience our facilities and classes before committing."
    },
    {
      "question": "Is there a joining fee?",
      "answer": "No, we do not charge any joining or registration fees. What you see in the membership plan is what you pay."
    },
    {
      "question": "Can I switch plans later?",
      "answer": "Absolutely. You can upgrade or downgrade your membership plan at any time via your member dashboard or with our support team."
    },
    {
      "question": "Are classes included in all plans?",
      "answer": "Group classes are included in Standard and Premium plans. Basic members can purchase class passes separately."
    }
  ]
  

  return (
    <div className="text-gray-800 roboto">
      {/* Hero Section */}
      <SecondaryHeader heading={"Join the FitSync Family"} subheading={""} text={"Transform your fitness journey with our premium facilities, expert trainers, and personalized plans tailored for every fitness goal."} button={["Learn More", "Subscribe"]} />

      {/* Why Choose Us Section */}
      <section className="py-12 md:px-16 px-8">
        <h2 className="text-3xl text-center font-bold text-red-600">Why Choose FitSync?</h2>
        <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">
          We provide a unique combination of cutting-edge technology, top-tier fitness
          coaching, and an inclusive community to support your goals.
        </p>
        <div className="flex justify-evenly justify-items-stretch items-stretch flex-wrap mt-6">
          {ChooseUs.map((elem, index) => {
            return <AchievementCard key={index} data={elem} />
          })}
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-12 md:px-16 px-8 bg-gray-100 flex md:flex-row flex-col-reverse">
        <div className="mx-auto md:my-0 my-10">
          {/* left */}
          <div className="flex items-end sm:translate-x-4">
            <img src="/images/gallery4.webp" alt="" className="h-[140px] sm:h-[170px] md:h-[200px] lg:h-[250px] xl:h-[300px] m-2" />
            <img src="/images/gallery21.webp" alt="" className="w-[170px] sm:w-[200px] md:w-[230px] lg:w-[330px] xl:w-[380px] h-full m-2" />
          </div>
          <div className="flex sm:-translate-x-12 -translate-x-8">
            <img src="/images/gallery16.webp" alt="" className="w-[170px] sm:w-[200px] md:w-[230px] lg:w-[280px] xl:w-[330px] h-full m-2" />
            <img src="/images/gallery15.webp" alt="" className="h-[190px] sm:h-[220px] md:h-[200px] lg:h-[250px] xl:h-[300px] m-2" />
          </div>
        </div>
        {/* right */}
        <div className="md:w-2/5 flex flex-col justify-center pl-8">
          <h2 className="xl:text-5xl lg:text-4xl md:text-2xl text-3xl font-bold text-red-600 md:mb-6 mb-2 text-center md:text-left">Top-Class <span className='stroke font-sans'>Equipment</span><br /> Built for Results</h2>
          <p className="xl:text-xl lg:text-lg text-base text-gray-600 text-center md:text-left">At FitSync, we equip our facility with state-of-the-art machines and training tools to help you reach your fitness goals faster and safer. From advanced cardio equipment to strength training machines, we’ve got it all.
          </p>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="py-12 bg-gray-50 text-center  md:px-16 px-8">
        <h2 className="text-4xl font-extrabold text-red-600 ">Flexible Membership Plans</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Choose the plan that fits your lifestyle and fitness goals. No contracts, no hassle—just results.
        </p>

        <div className="flex justify-between items-center flex-wrap gap-8">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition h-full">
            <h3 className="text-2xl font-semibold text-red-600 mb-2">Basic</h3>
            <p className="text-gray-600 mb-4">Ideal for beginners who need just the essentials.</p>
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              <li>✔ Full gym access</li>
              <li>✔ Locker room access</li>
              <li>✔ 1 fitness assessment</li>
              <li>✔ Hydration Station Access</li>
            </ul>
            <p className="text-3xl font-bold text-red-600 mb-4">$29<span className="text-base font-medium">/month</span></p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">Join Now</button>
          </div>

          {/* Standard Plan (Featured) */}
          <div className="bg-white rounded-2xl shadow-2xl border-4 border-red-600 p-10 transform scale-105">
            <h3 className="text-2xl font-semibold text-red-600 mb-2">Standard</h3>
            <p className="text-gray-600 mb-4">Our most popular plan for regular gym-goers.</p>
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              <li>✔ All Basic features</li>
              <li>✔ Unlimited group classes</li>
              <li>✔ Monthly progress tracking</li>
            </ul>
            <p className="text-3xl font-bold text-red-600 mb-4">$49<span className="text-base font-medium">/month</span></p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">Join Now</button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-red-600 mb-2">Premium</h3>
            <p className="text-gray-600 mb-4">For those seeking personalized guidance and results.</p>
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              <li>✔ All Standard features</li>
              <li>✔ Personal trainer access</li>
              <li>✔ Customized nutrition guide</li>
              <li>✔ Weekly 1-on-1 coaching</li>
            </ul>
            <p className="text-3xl font-bold text-red-600 mb-4">$79<span className="text-base font-medium">/month</span></p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">Join Now</button>
          </div>
        </div>
      </section>
          {/* faqs */}
          <FAQ heading={"Frequently Asked Questions"} subheading={"Everything you need to know about our gym memberships, plans, and policies."} faqs={faqs} />
    </div>
  );
};

export default Member;
