import React from 'react'

const AchievementCard = (props) => {
    return (
        <div className="flex flex-col px-9 py-3 my-4 lg:w-1/4 md:w-2/5 w-full mx-1 rounded-xl overflow-hidden shadow-xl bg-zinc-200">
            <div className="flex items-start relative">
                <div className='bg-red-600 py-0.5 h-5 rounded w-14 mr-2 mt-1 absolute -left-16'></div>
                <h3 className="text-xl text-red-600 capitalize font-bold relative w-full">{props.data.heading}</h3>
            </div>
            <p className="text-base text-zinc-700 pt-2">{props.data.text}</p>
        </div>
    )
}

export default AchievementCard