import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';
import resume from './../../../assets/resume/CV_of_Mafizul_Islam.pdf'
import image from './../../../assets/images/about-image.jpg'
import Social from '../../Social/Social';

const About = () => {
    return (
        <section id='about' className='mx-4 md:mx-16 bg-lime-50 shadow-lg px-4 py-12 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
            <div className='order-2 md:order-1 flex justify-center md:justify-start'>
                <img className='rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-full md:h-auto object-cover shadow-md' src={image} alt='Mafizul Islam' />
            </div>
            <div className='order-1 md:order-2 space-y-3'>
                <h2 className='text-3xl font-bold text-gray-800'>About Me</h2>
                <hr className='w-36 my-2 border-2 border-gray-600' />
                <h3 className='text-2xl sm:text-3xl font-bold'>
                    As a <br />
                    <span className='text-3xl sm:text-4xl font-bold my-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                        Jr. Software Engineer
                    </span>
                </h3>
                <p className='text-justify font-semibold text-base sm:text-lg md:text-xl'>
                    I'm a full-stack web developer specializing in the MERN stack, with proficiency in HTML5, JavaScript,
                    React, and CSS/Tailwind/Bootstrap. Committed to continuous learning and staying updated with industry
                    trends, I focus on building responsive user interfaces and secure, well-structured RESTful APIs from
                    front end to back end.
                </p>
                <div className='flex flex-wrap gap-4 mt-4'>
                    <a href={resume} download>
                        <button className='btn btn-success gap-2'>
                            Download Resume <FaDownload />
                        </button>
                    </a>
                    <Link to='project' smooth={true} duration={2500} offset={-80} className='cursor-pointer'>
                        <button className='btn btn-outline btn-success'>Projects</button>
                    </Link>
                </div>
                <Social />
            </div>
        </section>
    );
};

export default About;