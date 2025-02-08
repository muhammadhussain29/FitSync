import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const ProductSection = () => {

  const product = [
    {
      "image": "/products/product1.png",
      "name": "Whey Protein",
      "price": 54.99
    },
    {
      "image": "/products/product2.png",
      "name": "Pre Workout",
      "price": 49.99
    },
    {
      "image": "/products/product3.png",
      "name": "Lifting Gloves",
      "price": 44.99
    },
    {
      "image": "/products/product4.png",
      "name": "Smart Water Bottle",
      "price": 39.99
    },
    {
      "image": "/products/product5.png",
      "name": "Mass Gainer",
      "price": 59.99
    },
    {
      "image": "/products/product6.png",
      "name": "Wrist Wraps",
      "price": 19.99
    },
    {
      "image": "/products/product7.png",
      "name": "Weight Lifting Belt",
      "price": 34.99
    },
    {
      "image": "/products/product8.png",
      "name": "Shaker",
      "price": 24.99
    },
    {
      "image": "/products/product9.png",
      "name": "Shaker",
      "price": 19.99
    },
    {
      "image": "/products/product10.png",
      "name": "Sweat Proof Towel",
      "price": 24.99
    },
    {
      "image": "/products/product11.png",
      "name": "Wrist Wrap and Straps",
      "price": 49.99
    },
    {
      "image": "/products/product12.png",
      "name": "Blender Bottle",
      "price": 29.99
    },
    {
      "image": "/products/product13.png",
      "name": "Sweat Proof Towel",
      "price": 19.99
    },
  ]

  return (
    <section className="roboto text-center py-12 md:px-16 px-8">
      {/* Heading */}
      <h3 className='text-4xl capitalize font-bold text-red-600'>Our Latest Products</h3>
      <p className='text-lg text-gray-600' >Discover the best deals on high-quality products</p>

      {/* Product Cards Grid */}
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 justify-items-center">
        {product.slice(0, 4).map((elem, index) => {
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
