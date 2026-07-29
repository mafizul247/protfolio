import React from 'react';
import { FaDownload } from 'react-icons/fa'
import { Link } from 'react-scroll';

import resume from './../../../assets/resume/CV_of_Mafizul_Islam.pdf'
import image from './../../../assets/images/banner-image.jpg'
import Social from '../../Social/Social';

const Banner = () => {
    return (
        <div id='home' className='pt-24 py-12 mx-4 md:mx-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-slate-100 px-4 md:px-12 shadow-lg'>
            <div className='text-gray-800 order-2 md:order-1'>
                <h1 className='text-4xl sm:text-5xl font-bold'>Hi, I'm </h1>
                <h1 className='text-5xl sm:text-6xl font-bold my-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600'>
                    Mafizul Islam
                </h1>
                <h1 className='text-2xl sm:text-3xl text-red-500 font-bold my-3'>Full Stack Web Developer (MERN)</h1>
                <p className='text-base sm:text-lg md:text-xl font-semibold text-justify'>
                    Self-taught programmer with proficiency in the MERN stack, solid understanding of HTML5, JavaScript,
                    React JS, and CSS, Bootstrap, Tailwind. Committed to continuous learning and staying updated with
                    industry trends. Skilled in creating responsive user interfaces and building RESTful APIs.
                </p>
                <div className='flex flex-wrap gap-4 mt-4'>
                    <a href={resume} download>
                        <button className='btn btn-success gap-2'>
                            Download Resume <FaDownload />
                        </button>
                    </a>
                    <Link to='contact' smooth={true} duration={2500} offset={-80} className='cursor-pointer'>
                        <button className='btn btn-outline btn-success'>Contact Me</button>
                    </Link>
                </div>
                <Social />
            </div>
            <div className='order-1 md:order-2 flex justify-center'>
                <img
                    className='w-48 h-48 sm:w-64 sm:h-64 md:w-full md:h-auto lg:w-3/4 md:mx-auto rounded-full object-cover'
                    src={image}
                    alt='Mafizul Islam'
                />
            </div>
        </div>
    );
};

export default Banner;