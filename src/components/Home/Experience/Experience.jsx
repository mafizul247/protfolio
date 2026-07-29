import React from 'react';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';

// TODO: double check these dates — the CV has this role overlapping with the
// Assistant Manager role below at the same company; confirm before publishing.
const experiences = [
    {
        role: 'Jr. Software Engineer (MERN Stack)',
        company: 'Technology and Business Solutions Ltd',
        location: 'Dhaka, Bangladesh',
        period: 'January 2026 - Continue',
    },
    {
        role: 'Assistant Manager, HR & Admin',
        company: 'Technology and Business Solutions Ltd',
        location: 'Dhaka, Bangladesh',
        period: 'July 2018 - December 2026',
    },
];


const Experience = () => {
    return (
        <section id='experience' className='mx-4 md:mx-16 bg-slate-100 shadow-lg px-4 py-12 md:p-12'>
            <h2 className='text-3xl font-bold text-gray-800 text-center mb-12'>Experience</h2>
            <div className='max-w-3xl mx-auto space-y-6'>
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className='bg-white rounded-md shadow-md border-2 border-gray-100 hover:border-purple-400 transition-colors p-6 flex gap-4 items-start'
                    >
                        <div className='bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full'>
                            <FaBriefcase className='text-xl' />
                        </div>
                        <div>
                            <h3 className='text-xl font-bold text-gray-800'>{exp.role}</h3>
                            <p className='text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                                {exp.company}
                            </p>
                            <div className='flex flex-wrap gap-4 mt-1 text-gray-600 text-sm font-semibold'>
                                <span className='flex items-center gap-1'>
                                    <FaMapMarkerAlt /> {exp.location}
                                </span>
                                <span>{exp.period}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;