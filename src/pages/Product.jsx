import React, { useContext } from 'react'
import SecondaryHeader from '../components/SecondaryHeader';
import ProductSection from '../components/ProductSection';
import FAQ from '../components/FAQ';
import ReviewSlider from '../components/ReviewSlider';
import { ProductsList } from '../context/productData';

const Product = () => {

  const faqs = [
    {
      "question": "What factors should I consider when choosing supplements?",
      "answer": "Consider your fitness goals, dietary needs, and consult with a healthcare professional before choosing supplements."
    },
    {
      "question": "Are supplements necessary for muscle growth?",
      "answer": "Supplements can support muscle growth but should complement a balanced diet and consistent training."
    },
    {
      "question": "How can I ensure I’m buying high-quality gym accessories?",
      "answer": "Look for reputable brands, read customer reviews, and check material quality and warranty options."
    },
    {
      "question": "What payment methods are available when purchasing products?",
      "answer": "We accept credit/debit cards, PayPal, and other secure payment options for your convenience."
    },
    {
      "question": "How long does delivery take for orders?",
      "answer": "Delivery typically takes 3-7 business days, depending on your location and product availability."
    }
  ]

  const reviews = [
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


  const product = useContext(ProductsList)

  const featured = product.filter((e) => {
    if (e.featured)
      return e;
  })

  const supplements = product.filter((e) => {
    if (e.type == "supplement")
      return e;
  })

  const accessory = product.filter((e) => {
    if (e.type == "accessory")
      return e;
  })

  console.log(accessory);


  return (
    <>
      <SecondaryHeader heading={"Gear Up. Power On."} subheading={"Explore Premium Gym Products for Every Fitness Level"} text={"At FitSync, we offer a curated selection of premium gym equipment, stylish apparel, and performance-boosting supplements. Whether you're a beginner or a seasoned athlete, our products are designed to help you train smarter, recover faster, and stay motivated on your fitness journey. Gear up and stay ahead!"} button={["View Best Sellers", "Explore Products"]} />
      {/* Featured Products */}
      <ProductSection heading={"Hot Picks of the Month!"} subheading={"Don't Miss Out on Our Must-Have Gym Essentials."} products={featured} button={false} />
      {/* Supplements */}
      <ProductSection heading={"Power Up with Essential Supplements"} subheading={"Boost Strength, Endurance, and Recovery with Our Expertly Crafted Formulas."} products={supplements} button={false} />
      {/* Accessories */}
      <ProductSection heading={" Accessorize Your Fitness Journey!"} subheading={"From Lifting Gloves to Resistance Bands – We've Got You Covered."} products={accessory} button={false} />
      <ReviewSlider heading={"User Reviews"} subheading={"See the difference FitSync can make for you."} data={reviews} />
      <FAQ heading={"Supplement & Accessory FAQs"} subheading={"Get Insights to Make Informed Choices for Your Fitness Journey."} faqs={faqs} />

    </>
  )
}

export default Product