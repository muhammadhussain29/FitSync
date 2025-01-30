import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";


const Navbar = () => {

    const [nav, setNav] = useState(false)

    let showNav = ()=>{
        nav ? setNav(false) : setNav(true);
    }

  return (
    <nav className='flex justify-between items-end md:px-16 px-8 py-4'>
        <div className="md:text-3xl text-2xl font-bold ">
            <h3>FitSync</h3>
        </div>

        <ul className={`md:w-auto md:flex md:flex-row md:static w-full items-center absolute top-14 left-0 flex-col ${nav ? 'flex':'hidden'} lg:gap-6 md:gap-4 gap-3 md:text-lg text-base font-semibold`}>
            <li>Home</li>
            <li>Blog</li>
            <li>Products</li>
            <li>Gallery</li>
            <button className='w-auto bg-red-600 rounded-full text-white px-4 py-2 text-nowrap'>Become Member</button>
        </ul>

        <button onClick={showNav} className='md:hidden block text-3xl'>
        <IoMenu />
        </button>
    </nav>
)
}

export default Navbar       