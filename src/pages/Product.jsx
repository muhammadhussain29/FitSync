import React, { useContext } from 'react'
import ProductHeader from '../components/ProductHeader';
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
   

  const product = useContext(ProductsList) 

  const featured = product.filter((e)=>{
    if(e.featured)
      return e;
  })

  const supplements = product.filter((e)=>{
    if(e.type == "supplement")
      return e;
  })

  const accessory = product.filter((e)=>{
    if(e.type == "accessory")
      return e;
  }) 

  console.log(accessory);
  

  return (
    <>
      <ProductHeader/>
      {/* Featured Products */}
      <ProductSection heading={"Hot Picks of the Month!"} subheading={"Don't Miss Out on Our Must-Have Gym Essentials."} products={featured} button={false}/>
      {/* Supplements */}
      <ProductSection heading={"Power Up with Essential Supplements"} subheading={"Boost Strength, Endurance, and Recovery with Our Expertly Crafted Formulas."} products={supplements} button={false}/>
      {/* Accessories */}
      <ProductSection heading={" Accessorize Your Fitness Journey!"} subheading={"From Lifting Gloves to Resistance Bands – We've Got You Covered."} products={accessory} button={false}/>
      <ReviewSlider />
      <FAQ heading={"Supplement & Accessory FAQs"} subheading={"Get Insights to Make Informed Choices for Your Fitness Journey."} faqs={faqs}/>

    </>
  )
}

export default Product