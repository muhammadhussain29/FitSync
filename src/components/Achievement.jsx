import React from 'react'
import AchievementCard from './AchievementCard'

const data = [
    {
      "heading": "10,000+ Satisfied Members",
      "text": "A thriving fitness community achieving their health goals with FitSync."
    },
    {
      "heading": "Certified Expert Trainers",
      "text": "Our award-winning trainers provide personalized workout plans for all fitness levels."
    },
    {
      "heading": "50+ Fitness Events Organized",
      "text": "Bringing fitness enthusiasts together with engaging challenges, marathons, and boot camps."
    }
  ]
  

const Achievement = () => {
    return (
        <section className='roboto py-12 md:px-16 px-8'>
            <h3 className='md:text-4xl text-3xl text-center capitalize font-bold text-red-600'>Our Achievements</h3>
            <p className='md:text-lg text-base text-center text-gray-600'>Celebrating milestones, success stories, and fitness transformations.</p>
            <div className="flex justify-evenly justify-items-stretch items-stretch flex-wrap mt-6">
                {data.map((elem, index) => {
                    return <AchievementCard key={index} data={elem} />
                })}
            </div>
        </section>
    )
}

export default Achievement