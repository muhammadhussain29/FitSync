import React from 'react';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="roboto text-white bg-red-600 md:px-16 px-8 pt-8 pb-2 ">
            <div className='flex flex-wrap justify-between gap-6'>
                {/* Brand Info */}
                <div className="w-full md:w-2/7">
                    <h3 className="text-3xl playwrite font-bold">FitSync</h3>
                    <p className="text-base mt-4">
                        At FitSync, we are committed to helping you achieve your fitness goals with expert guidance, top-notch facilities, and a supportive community. Join us on the journey to a healthier, stronger you!
                    </p>
                    <p className="mt-3 flex items-center gap-3"><FaLocationArrow /> House 123/C, XYZ Road, City</p>
                    <p className='flex items-center gap-3'> <FaPhoneAlt /> 000-000-000</p>
                    <div className="flex gap-4 mt-3 text-xl">
                        <div className='cursor-pointer bg-white text-red-600 hover:text-red-700 p-1 rounded-full transition hover:scale-110'>
                            <FaFacebook className="text-xl " />
                        </div>
                        <div className='cursor-pointer bg-white text-red-600 hover:text-red-700 p-1 rounded-full transition hover:scale-110'>
                            <FaInstagram className="text-xl" />
                        </div>
                        <div className='cursor-pointer bg-white text-red-600 hover:text-red-700 p-1 rounded-full transition hover:scale-110'>
                            <MdEmail className="text-xl" />
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="w-full md:w-1/6">
                    <h3 className="text-3xl font-bold">Quick Links</h3>
                    <ul className="text-lg mt-4">
                        <li className="mt-3 hover:text-gray-400"><Link to="/">Home</Link></li>
                        <li className="mt-3 hover:text-gray-400"><Link to="/blog">Blog</Link></li>
                        <li className="mt-3 hover:text-gray-400"><Link to="/product">Product</Link></li>
                        <li className="mt-3 hover:text-gray-400"><Link to="/gallery">Gallery</Link></li>
                        <li className="mt-3 hover:text-gray-400"><Link to="/member">Join FitSync</Link></li>
                    </ul>
                </div>

                {/* Latest Blogs */}
                <div className="w-full md:w-1/5">
                    <h3 className="text-3xl font-bold">Latest Blogs</h3>
                    <ul className="text-lg mt-4 space-y-2">
                        <li className="hover:text-gray-400 mt-3 leading-5">
                            <Link to="/blog/fitness-tips">
                                <p>Top 10 Fitness Tips </p><p className=''>10-Oct-2024</p></Link>
                        </li>
                        <li className="hover:text-gray-400 mt-3 leading-5">
                            <Link to="/blog/nutrition-guide"><p>Essential Nutrition Guide</p><p>10-Oct-2024</p></Link></li>
                        <li className="hover:text-gray-400 mt-3 leading-5">
                            <Link to="/blog/workout-plans"><p>Best Workout Plans</p><p>10-Oct-2024</p></Link></li>
                        <li className="hover:text-gray-400 mt-3 leading-5">
                            <Link to="/blog/mental-health"><p>Mind & Body  Wellness</p><p>10-Oct-2024</p></Link></li>
                    </ul>
                </div>

                {/* Newsletter Signup */}
                <div className="w-full md:w-1/4">
                    <h3 className="text-3xl font-bold">Reach Out to Us</h3>
                    <p className="text-sm mt-2">Have questions or need assistance? Drop us a message, and we'll get back to you soon!</p>
                    <form className="mt-3 space-y-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-2 rounded text-gray-600 bg-white outline-none focus:ring-2 focus:ring-gray-300"
                        />
                        <textarea
                            placeholder="Your message"
                            className="w-full p-2 rounded text-gray-600 bg-white h-16 outline-none focus:ring-2 focus:ring-gray-300"
                        ></textarea>
                        <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 w-full transition">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <hr className='mt-7  text-gray-900' />
            <div>
                <p className='text-right'>copyright @ 2025</p>
            </div>
        </footer>
    );
}

export default Footer;
