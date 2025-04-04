import React from 'react';

const ProductCard = (props) => {
  return (
    <div className="roboto relative xl:w-[280px] lg:w-[220px] w-[240px] h-[380px] bg-gray-900 rounded-2xl overflow-hidden flex flex-col items-center text-center shadow-lg group mx-2">
      {/* Animated Background */}
      <div className="absolute top-[-50%] w-full h-full bg-red-600 skew-y-[-10deg] transition-all duration-500 ease-in-out group-hover:top-[-65%] group-hover:skew-y-[15deg]"></div>

      {/* Image Box */}
      <div className="relative w-full flex justify-center items-center pt-5 z-10">
        <img
          src={props.elem.image}
          alt="props.elem.name"
          className="h-[180px] w-auto transition-transform duration-500 ease-in-out group-hover:scale-90"
        />
      </div>

      {/* Content Box */}
      <div className="relative md:p-5 p-3 flex flex-col items-center top-10 group-hover:top-2 z-10 transition-all">
        <h3 className="text-lg font-medium uppercase md:tracking-wide tracking-tight text-white">{props.elem.name}</h3>
        <h2 className="text-2xl font-bold text-white">{props.elem.price} €</h2>

        {/* Buy Now Button */}
        <button className="button relative top-8 opacity-0 py-2 px-6 mt-5 uppercase transition-all duration-500 ease-in-out group-hover:top-0 group-hover:opacity-100">
          Buy Now
        </button>

      </div>
    </div>
  );
};

export default ProductCard;
