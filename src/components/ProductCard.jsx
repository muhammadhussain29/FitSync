import React from 'react';

const ProductCard = (props) => {
  return (
    <div className="relative w-[260px] h-[380px] bg-gray-900 rounded-2xl overflow-hidden flex flex-col items-center text-center shadow-lg group">
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
      <div className="relative p-5 flex flex-col items-center z-10">
        <h3 className="text-lg font-medium uppercase tracking-wide text-white">{props.elem.name}</h3>
        <h2 className="text-2xl font-bold text-white">{props.elem.price} €</h2>

        {/* Buy Now Button */}
        <button className="button relative top-8 opacity-0 py-2 px-6 mt-4 uppercase transition-all duration-500 ease-in-out group-hover:top-0 group-hover:opacity-100">
          Buy Now
      </button>

      </div>
    </div>
  );
};

export default ProductCard;
