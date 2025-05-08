import React, { useEffect, useState, useRef } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const searchRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, []);

    // event listener to clear the search bar
    if (searchRef.current && !searchRef.current.contains(event.trgetr)) {
        setShowSearch(false); // Hide search bar if clicked outside
    }

    return (
        <div className='flex justify-between items-center relative p-1.5 mx-2.5 sm:mx-16 z-50'>

            <div>
                <h1 data-aos="zoom" className='text-2xl font-bold border-l-4 border-t-4 pl-5'>Agboedo</h1>
            </div>

            <div data-aos="zoom" data-aos-delay='300' className='flex gap-3 sm:gap-97'>
                <FaBars onClick={() => setShowMenu(true)} className='cursor-pointer sm:hidden' />
                <FaTimes onClick={() => setShowMenu(false)} className={`${showMenu ? 'block z-50 cursor-pointer' : 'hidden'}`} />
                <ul className={`sm:flex sm:gap-4 ${showMenu ? 'w-screen absolute -top-[100%] -left-68 bg-green-800 h-fit flex flex-col gap-2.5 justify-center align-middle text-center max-h-screen ' : 'hidden'}`}>

                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Product</li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>

                <div data-aos="zoom" data-aos-delay='500' className='relative flex items-center'>
                    <FaSearch
                        className='cursor-pointer'
                        onClick={() => setShowSearch(!showSearch)} // Toggle search bar visibility
                    />
                    <div
                        className={`absolute -top-1 right-5 transition-all duration-300 ${showSearch ? 'opacity-100 visible' : 'opacity-0 invisible'
                            }`}
                    >
                        <input
                            type='text'
                            placeholder='Search...'
                            className='border border-gray-300 rounded-md p-2 w-48 shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-500'
                        />
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Navbar;