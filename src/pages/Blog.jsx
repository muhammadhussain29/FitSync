import React from 'react'
import SecondaryHeader from '../components/SecondaryHeader';
import Newsletter from '../components/Newsletter';
import BlogsSection from '../components/BlogsSection';

const blogs = [
  {
    title: "Top Supplements for Muscle Growth",
    author: "Sarah Brown",
    date: { day: "10", month: "FEB" },
    excerpt: "Discover the best supplements to maximize muscle gain.",
    image: "images/gallery5.webp",
    text: "Building muscle requires more than just lifting weights—it also depends on proper nutrition. In this article, we explore the best supplements that can enhance muscle recovery, increase protein synthesis, and fuel your workouts effectively."
  },
  {
    title: "The Best Recovery Techniques for Athletes",
    author: "David Lee",
    date: { day: "22", month: "APR" },
    excerpt: "Speed up your recovery with expert-backed methods!",
    image: "images/gallery2.webp",
    text: "Athletes need to recover efficiently to perform at their best. This guide covers active recovery techniques, stretching routines, hydration tips, and nutritional strategies to help you bounce back after intense workouts."
  },
  {
    title: "How to Build a Sustainable Gym Routine",
    author: "Jessica Carter",
    date: { day: "5", month: "JUN" },
    excerpt: "Stay consistent with your fitness goals using this guide.",
    image: "images/gallery8.webp",
    text: "Starting a gym routine is easy, but staying consistent is the real challenge. Learn how to set realistic fitness goals, stay motivated, and develop habits that will keep you on track for long-term success."
  },
  {
    title: "Cardio vs Strength Training: What’s Best for You?",
    author: "Mike Thompson",
    date: { day: "18", month: "JUL" },
    excerpt: "Find out which training style aligns with your fitness goals.",
    image: "images/gallery1.webp",
    text: "Should you focus more on cardio or strength training? This article breaks down the benefits of each and provides insight on how to balance both for optimal fitness results."
  },
  {
    title: "Nutrition Tips for Faster Fat Loss",
    author: "Emily Roberts",
    date: { day: "8", month: "AUG" },
    excerpt: "Burn fat effectively with these science-backed nutrition tips.",
    image: "images/gallery2.webp",
    text: "Losing fat isn’t just about exercise—it’s also about smart eating. Here are the best foods to include in your diet to help burn fat efficiently while maintaining muscle mass."
  },
  {
    title: "Best Home Gym Equipment for Beginners",
    author: "Ryan Wilson",
    date: { day: "12", month: "SEP" },
    excerpt: "Set up your home gym with these must-have essentials.",
    image: "images/gallery4.webp",
    text: "Building a home gym doesn’t have to be expensive. We’ve compiled a list of budget-friendly and essential equipment pieces that will help you get the most out of your workouts at home."
  },
  {
    title: "5 Common Mistakes That Are Hurting Your Gains",
    author: "Jason Scott",
    date: { day: "25", month: "OCT" },
    excerpt: "Avoid these errors to maximize your muscle growth and progress.",
    image: "images/gallery6.webp",
    text: "Many gym-goers unknowingly sabotage their progress. From poor nutrition to improper workout techniques, here are five common mistakes to avoid to see better results."
  },
  {
    title: "The Science Behind Pre-Workout Supplements",
    author: "Sophia Clark",
    date: { day: "3", month: "DEC" },
    excerpt: "Understand how pre-workout formulas boost performance.",
    image: "images/gallery7.webp",
    text: "Pre-workout supplements promise increased energy and endurance, but how do they work? We break down the key ingredients, benefits, and potential side effects of pre-workout formulas."
  },
  {
      title: "Best Home Gym Equipment for Beginners",
      author: "Ryan Wilson",
      date: { day: "12", month: "SEP" },
      excerpt: "Set up your home gym with these must-have essentials.",
      image: "images/gallery3.webp",
      text: "Building a home gym doesn’t have to be expensive. We’ve compiled a list of budget-friendly and essential equipment pieces that will help you get the most out of your workouts at home."
    }
];

const Blog = () => {
  return (
    <div className="roboto">
      {/* Hero Section */}
      <SecondaryHeader heading={"Stay Informed, Stay Fit!"} subheading={"Your Ultimate Guide to Fitness, Nutrition & Wellness"} text={"Explore expert tips, workout guides, and nutrition hacks to take your fitness journey to the next level. Whether you're a beginner or a pro, we've got something for everyone!"} button={["Read Our Blogs","Subscribe for Updates"]}/>
      {/* Recent Blogs */}
      <BlogsSection heading={"Gym Talk: What’s New?"} subheading={"Discover fresh fitness content, from muscle-building tips to recovery strategies!"} blogs={blogs.slice(0,3)} />
      {/* previous blogs */}
      <BlogsSection heading={"Previously on FitSync Blog…"} subheading={"Rewind and read our best fitness articles you might have missed!"} blogs={blogs.slice(3)} />
      {/* Newsletter Signup */}
      <Newsletter/>
    </div>
  );
}

export default Blog