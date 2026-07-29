import React from 'react';
import { Link } from 'react-scroll';
import Social from '../Social/Social';

const footerLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skill', label: 'Skill' },
    { to: 'project', label: 'Project' },
    { to: 'experience', label: 'Experience' },
    { to: 'contact', label: 'Contact' },
];

const Footer = () => {
    return (
        <footer className='bg-gray-200 mt-8'>
            <div className='max-w-screen-2xl mx-auto px-4 md:px-16 py-8 flex flex-col items-center gap-4 text-center'>
                <h2 className='text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                    Mafizul Islam
                </h2>
                <ul className='flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-700 font-semibold text-sm sm:text-base'>
                    {footerLinks.map((item) => (
                        <li key={item.to}>
                            <Link
                                to={item.to}
                                smooth={true}
                                duration={2500}
                                offset={-80}
                                className='cursor-pointer hover:text-purple-600 transition-colors'
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Social />
                <p className='text-sm text-gray-500 pt-2'>
                    Copyright &copy; {new Date().getFullYear()} All Rights Reserved by Mafizul Islam
                </p>
            </div>
        </footer>
    );
};

export default Footer;