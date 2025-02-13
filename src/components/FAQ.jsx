import React, { useState } from "react";

const faqs =[
    {
      "question": "What is FitSync?",
      "answer": "FitSync is a premium fitness platform designed to help you track your workouts, find training programs, and stay motivated on your fitness journey."
    },
    {
      "question": "Do I need a membership to access FitSync services?",
      "answer": "While some features are free, a membership unlocks exclusive workout plans, personalized coaching, and advanced tracking features."
    },
    {
      "question": "Can I book personal training sessions through FitSync?",
      "answer": "Yes! You can schedule 1-on-1 training sessions with certified trainers directly through our platform."
    },
    {
      "question": "Is there a mobile app for FitSync?",
      "answer": "Yes! FitSync has a mobile app available for both iOS and Android, making it easy to track your workouts on the go."
    },
    {
      "question": "What types of workout programs does FitSync offer?",
      "answer": "FitSync offers a variety of programs, including strength training, weight loss, HIIT, yoga, and customized personal training plans."
    }
  ];
  

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="roboto py-12 md:px-16 mb-10 px-8 max-w-[1000px] mx-auto">
      <h2 className="md:text-4xl text-3xl capitalize font-bold text-red-600 text-center">Got Questions? We've Got Answers!</h2>
      <p className='md:text-lg text-base text-gray-600 text-center md:mb-12'>Explore our FAQs to learn more about FitSync and how we can help you achieve your fitness goals</p>
      <div className="space-y-4 mt-10">
        {/* Faqs mapping */}
        {faqs.map((faq, index) => (
          <div key={index} className="shadow-xl rounded-lg overflow-hidden">
            <button
              className="w-full p-4 text-left flex justify-between items-center bg-gray-100 hover:bg-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold">{faq.question}</span>
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-600 border-l-2">{faq.answer}</div>
            )}
          </div>
        ))}
        {/* Faqs mapping */}
      </div>
    </div>
  );
};

export default FAQ;
