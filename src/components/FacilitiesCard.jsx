import React from 'react'

const FacilitiesCard = ({ elem }) => {
  return (
    <div className='roboto h-auto border rounded-2xl bg-white text-red-600 text-center w-[18vw] px-2 py-4 shadow-2xl'>
      <div className='text-2xl inline-block bg-red-600 text-white p-4 rounded-full mb-3'>
        {elem.Icon}
      </div>
      <h4 className='text-2xl font-medium'>{elem.Title}</h4>
      <p className='text-base text-gray-600'>{elem.Text}</p>
    </div>
  )
}

export default FacilitiesCard