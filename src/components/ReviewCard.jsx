import React, { forwardRef } from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const ReviewCard = forwardRef(({ data }, ref) => {
  return (
    <div ref={ref} className='w-full flex justify-center px-3'>
      <div className="relative lg:w-[500px] md:w-[400px] sm:w-[300px] w-[230px] h-[270px] bg-red-600 rounded-xl after:absolute before:absolute before:top-[10px] after:bottom-[10px] md:before:left-[-100px] before:left-[-50px] md:after:right-[-100px] after:right-[-50px] after:rounded-full before:rounded-full md:after:w-[150px] after:w-[80px] md:before:w-[150px] before:w-[80px] md:after:h-[150px] after:h-[80px] md:before:h-[150px] before:h-[80px] after:z-[-10] before:z-[-10] after:bg-orange-500/50 before:bg-orange-500/50">

        <div className="grid grid-rows-[1.3fr_0.7fr] shadow shadow-zinc-700 w-full h-full md:p-5 p-3 relative rounded-xl">
          <FaQuoteRight className='absolute top-0 right-0 m-2 md:text-3xl text-xl text-white' />
          <span className="w-full md:text-lg text-base text-white text-center md:px-6 px-3 md:py-3 py-2 md:leading-6 leading-4">
            {data.review}
          </span>
          <div className="flex flex-col self-end text-left leading-2 mt-2">
            <span className="md:text-xl text-lg font-extrabold leading-4 text-white">{data.name}</span>
            <div className="mt-1 flex justify-between items-center">
              <span className="md:text-base text-sm text-white">{data.location}</span>
              <span className="md:text-base text-sm text-white">{data.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ReviewCard;
