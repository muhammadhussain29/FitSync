import React from 'react'

const Newsletter = () => {
    return (
        <section className="text-center py-12 px-6">
            <h3 className="text-center md:text-4xl text-3xl capitalize font-bold text-red-600">Stay Updated</h3>
            <p className="text-center md:text-lg text-base text-gray-600">Subscribe to our newsletter for fitness tips & exclusive offers!</p>
            <form className="mt-4 outline-red-600 outline-2 inline-block rounded-lg overflow-hidden">
                <input type="email" placeholder="Enter your email" className="p-2 w-72 text-black  focus:outline-none" />
                <button className="bg-red-600 text-white px-6 py-2 hover:bg-red-700">Subscribe</button>
            </form>
        </section>
    )
}

export default Newsletter