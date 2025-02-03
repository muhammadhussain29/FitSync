import React from 'react';
import ProductCard from './ProductCard'; 
import { Link } from 'react-router-dom';

const ProductSection = () => {

    const product = [
        {
          "image": "/product1.png",
          "name": "Whey Protein",
          "price": 19.99
        },
        {
          "image": "/product2.png",
          "name": "Pre Workout",
          "price": 29.99
        },
        {
          "image": "/product3.png",
          "name": "Lifting Gloves",
          "price": 39.99
        },
        {
          "image": "/product4.png",
          "name": "Smart Water Bottle",
          "price": 49.99
        }
      ]

  return (
    <section className="text-center py-12 md:px-16 px-8">
      {/* Heading */}
      <h3 className='text-4xl capitalize font-bold text-red-600'>Our Latest Products</h3>
        <p className='text-lg'>Discover the best deals on high-quality products</p>

      {/* Product Cards Grid */}
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 justify-items-center">
        {product.map((elem ,index)=>{
            return <ProductCard elem={elem} key={index} />
        })}
        
      </div>

      {/* Button */}
      <button className="button mx-auto">
        <Link className='px-6 py-2' to="/product">View All Products</Link>
      </button>
    </section>
  );
};

export default ProductSection;
