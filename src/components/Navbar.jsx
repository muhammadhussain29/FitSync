import React, { useRef, useState, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const navbar = useRef(null);
    const lastScrollTop = useRef(0); // Store previous scroll position

    const showNav = () => setNav(!nav);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (navbar.current) {
                if (scrollTop > lastScrollTop.current) {
                    navbar.current.style.top = '-80px'; // Hide navbar on scroll down
                } else {
                    navbar.current.style.top = '0'; // Show navbar on scroll up
                }
            }
            lastScrollTop.current = scrollTop;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup event listener
        };
    }, []);

    return (
        <nav ref={navbar} className='roboto text-white fixed top-0 w-full flex justify-between items-end md:px-16 px-8 py-4 bg-black/50 transition-all duration-300'>
            <div className="md:text-3xl text-2xl font-bold">
                <h3 className='text-red-600 playwrite'>FitSync</h3>
            </div>

            <ul className={`md:w-auto md:flex md:flex-row md:static w-full items-center absolute top-14 left-0 flex-col ${nav ? 'flex' : 'hidden'} lg:gap-6 md:gap-4 gap-3 md:text-lg text-base bg-black md:bg-transparent`}>
                <li>Home</li>
                <li>Blog</li>
                <li>Products</li>
                <li>Gallery</li>
                <button className='w-auto bg-red-600 rounded-full text-white px-4 py-2 text-nowrap'>Join FitSync</button>
            </ul>

            <button onClick={showNav} className='md:hidden block text-3xl'>
                <IoMenu />
            </button>
        </nav>
    );
};

export default Navbar;
