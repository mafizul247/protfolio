import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skill', label: 'Skill' },
    { to: 'project', label: 'Project' },
    { to: 'experience', label: 'Experience' },
    { to: 'contact', label: 'Contact' },
];

const NavBer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className='fixed top-0 left-0 right-0 z-20 bg-white/80 backdrop-blur-md shadow-sm'>
            <div className='max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12'>
                <div className='flex items-center justify-between h-20'>
                    {/* Logo */}
                    <Link
                        to='home'
                        smooth={true}
                        duration={2500}
                        className='cursor-pointer text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'
                    >
                        Mafizul Islam
                    </Link>

                    {/* Desktop nav (lg and up) */}
                    <ul className='hidden lg:flex items-center gap-8'>
                        {navLinks.map((item) => (
                            <li key={item.to}>
                                <Link
                                    to={item.to}
                                    activeClass='text-purple-600 after:w-full'
                                    smooth={true}
                                    spy={true}
                                    duration={2500}
                                    offset={-80}
                                    className='relative cursor-pointer font-semibold text-gray-700 hover:text-purple-600 transition-colors after:content-[""] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-purple-600 after:to-pink-600 after:transition-all after:duration-300'
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <Link
                        to='contact'
                        smooth={true}
                        spy={true}
                        duration={2500}
                        offset={-80}
                        className='hidden lg:inline-block cursor-pointer btn btn-sm pt-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none hover:from-pink-600 hover:to-purple-600'
                    >
                        Get Hired
                    </Link>

                    {/* Mobile / tablet toggle button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='lg:hidden text-2xl text-gray-700 p-2'
                        aria-label='Toggle navigation menu'
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile / tablet menu (below lg) */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-md shadow-md ${isOpen ? 'max-h-[28rem] py-4' : 'max-h-0'
                    }`}
            >
                <ul className='flex flex-col items-center gap-1 px-4'>
                    {navLinks.map((item) => (
                        <li key={item.to} className='w-full text-center'>
                            <Link
                                to={item.to}
                                activeClass='text-purple-600'
                                smooth={true}
                                spy={true}
                                duration={2500}
                                offset={-80}
                                onClick={closeMenu}
                                className='block cursor-pointer py-3 font-semibold text-gray-700 hover:text-purple-600 transition-colors'
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li className='w-full text-center pt-2'>
                        <Link
                            to='contact'
                            smooth={true}
                            spy={true}
                            duration={2500}
                            offset={-80}
                            onClick={closeMenu}
                            className='inline-block cursor-pointer btn btn-sm pt-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none'
                        >
                            Get Hired
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBer;