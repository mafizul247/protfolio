import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaGraduationCap, FaAward } from 'react-icons/fa';

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

const education = [
    {
        degree: 'MBA in Human Resource Management (HRM)',
        school: 'Stamford University Bangladesh',
        detail: 'GPA: 3.48/4.00 · 2017',
    },
    {
        degree: 'BBA in Management',
        school: 'National University, Bangladesh',
        detail: 'GPA: 2.75/4.00 · 2013',
    },
];

const Experience = () => {
    return (
        <section id='experience' className='mx-4 md:mx-16 bg-stone-100 shadow-lg px-4 py-12 md:p-12'>
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

            <h2 className='text-3xl font-bold text-gray-800 text-center mt-16 mb-12'>Education</h2>
            <div className='max-w-3xl mx-auto space-y-6'>
                {education.map((edu, index) => (
                    <div
                        key={index}
                        className='bg-white rounded-md shadow-md border-2 border-gray-100 hover:border-purple-400 transition-colors p-6 flex gap-4 items-start'
                    >
                        <div className='bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full'>
                            <FaGraduationCap className='text-xl' />
                        </div>
                        <div>
                            <h3 className='text-xl font-bold text-gray-800'>{edu.degree}</h3>
                            <p className='text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                                {edu.school}
                            </p>
                            <p className='text-gray-600 text-sm font-semibold mt-1'>{edu.detail}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className='text-3xl font-bold text-gray-800 text-center mt-16 mb-12'>Training</h2>
            <div className='max-w-3xl mx-auto'>
                <div className='bg-white rounded-md shadow-md border-2 border-gray-100 hover:border-purple-400 transition-colors p-6 flex gap-4 items-start'>
                    <div className='bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full'>
                        <FaAward className='text-xl' />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold text-gray-800'>Complete Web Development Course (MERN Stack Developer)</h3>
                        <p className='text-gray-600 text-sm font-semibold mt-1'>Duration: 6 Months</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;