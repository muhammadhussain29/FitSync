import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const ProductSection = (props) => {

  return (
    <section className="roboto text-center py-12 md:px-16 px-8">
      {/* Heading */}
      <h3 className='md:text-4xl text-3xl capitalize font-bold text-red-600'>{props.heading}</h3>
      <p className='md:text-lg text-base text-gray-600' >{props.subheading}</p>

      {/* Product Cards Grid */}
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
        {props.products.map((elem, index) => {
          return <ProductCard elem={elem} key={index} />
        })}
      </div>

      {/* Button */}
      <button className={`${props.button ? "button":"hidden"} mx-auto`}>
        <Link className='px-6 py-2' to="/product">{props.button}</Link>
      </button>
    </section>
  );
};

export default ProductSection;
