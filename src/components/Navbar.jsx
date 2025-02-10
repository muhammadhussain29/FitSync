import React, { useRef, useState, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const navbar = useRef(null);
    // const navList = useRef(null);
    const lastScrollTop = useRef(0); // Store previous scroll position

    const showNav = () => setNav(!nav);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (navbar.current) {
                if (scrollTop <= '130') {
                    navbar.current.style.top = '0'; // Show navbar on scroll up
                    navbar.current.style.background = 'transparent';
                }
                else if (scrollTop > lastScrollTop.current) {
                    navbar.current.style.top = '-180px'; // Hide navbar on scroll down
                    navbar.current.style.background = 'transparent';
                    setNav(false);
                } else {
                    navbar.current.style.top = '0'; // Show navbar on scroll up
                    navbar.current.style.background = '#00000080';
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
        <nav ref={navbar} className='z-50 roboto text-white fixed top-0 w-full flex justify-between items-center md:px-16 px-8 py-2 bg-black/50 transition-all duration-300'>
            <div className="md:text-3xl text-2xl font-bold">
                <h3 className='text-red-600 playwrite'>
                    <Link to="/">FitSync</Link>
                </h3>
            </div>

            <ul className={`md:w-auto md:flex md:flex-row md:static w-full items-center absolute top-16 py-3 left-0 flex-col ${nav ? 'flex' : 'hidden'} lg:gap-6 md:gap-4 gap-3 md:text-lg text-base bg-black/50 md:bg-transparent`}>
                <li className='hover:text-red-600 hover:scale-110 transition '><Link to="/">Home</Link></li>
                <li className='hover:text-red-600 hover:scale-110 transition '><Link to="/blog">Blog</Link></li>
                <li className='hover:text-red-600 hover:scale-110 transition '><Link to="/product">Product</Link></li>
                <li className='hover:text-red-600 hover:scale-110 transition '><Link to="/gallery">Gallery</Link></li>
                <li>
                    <button className='button'>
                        <Link className=' px-4 py-2' to="/member">Join FitSync</Link>
                    </button>
                </li>
            </ul>

            <button onClick={showNav} className='md:hidden block text-3xl'>
                <IoMenu />
            </button>
        </nav>
    );
};

export default Navbar;
