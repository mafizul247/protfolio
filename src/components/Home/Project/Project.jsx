import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaServer } from 'react-icons/fa';

// TODO: replace these placeholder links with your real Live Site / Client / Server repo links
const projects = [
    {
        title: 'Smart Deal',
        subtitle: 'E-Commerce Website',
        description:
            'A responsive full-stack e-commerce web application with secure user authentication, product management, and a protected dashboard. Firebase handles auth, JWT secures private routes, and Axios Secure powers authenticated API calls.',
        tech: ['React.js', 'React Router', 'Axios', 'Firebase Auth', 'JWT', 'Tailwind CSS', 'DaisyUI'],
        live: 'https://smart-deals-232.netlify.app/',
        client: 'https://github.com/mafizul247/smart-deals-client.git',
        server: 'https://github.com/mafizul247/smart-deals-server.git',
    },
    {
        title: 'ToyVerse',
        subtitle: 'Toy Shop Website',
        description:
            'An interactive car toy marketplace where users can browse a large toy collection, search and sort by price, and add, update, or delete their own listings with full control over product management.',
        tech: ['React.js', 'Node.js', 'Express.js', 'Firebase', 'MongoDB', 'Tailwind CSS', 'DaisyUI'],
        live: 'https://toy-marketplace-39472.web.app/',
        client: 'https://github.com/mafizul247/toy-marketplace-client.git',
        server: 'https://github.com/mafizul247/toy-marketplace-server.git',
    },
    {
        title: 'Movie World',
        subtitle: 'Movie Server Website',
        description:
            "A movie server site where users add, update, and delete their own movies and browse others'. Logged-in users get a personal watch-list to collect movies they want to track.",
        tech: ['React JS', 'Node JS', 'Express JS', 'MongoDB', 'Firebase Auth', 'imgbb-api', 'Tailwind CSS', 'DaisyUI'],
        live: 'https://movideworld.web.app/',
        client: 'https://github.com/mafizul24h/movie-world-server.git',
        server: 'https://github.com/mafizul24h/movie-world-server.git',
    },
];

const Project = () => {
    return (
        <section id='project' className='mx-4 md:mx-16 bg-lime-50 shadow-lg px-4 py-12 md:p-12'>
            <h2 className='text-3xl font-bold text-gray-800 text-center mb-12'>Project</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className='bg-white rounded-md shadow-md border-2 border-gray-100 hover:border-purple-400 transition-colors p-6 flex flex-col'
                    >
                        <h3 className='text-2xl font-bold my-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                            {project.title}
                        </h3>
                        <p className='text-sm font-semibold text-gray-500 mb-3'>{project.subtitle}</p>
                        <p className='text-gray-700 text-justify flex-grow'>{project.description}</p>

                        <div className='flex flex-wrap gap-2 my-4'>
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className='text-xs font-semibold px-2 py-1 rounded-full border-2 border-orange-500 text-gray-700'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className='flex flex-wrap gap-2 mt-auto pt-2'>
                            <a href={project.live} target='_blank' rel='noreferrer'>
                                <button className='btn btn-sm btn-success gap-2'>
                                    Live Site <FaExternalLinkAlt />
                                </button>
                            </a>
                            <a href={project.client} target='_blank' rel='noreferrer'>
                                <button className='btn btn-sm btn-outline btn-success gap-2'>
                                    Client Code <FaGithub />
                                </button>
                            </a>
                            <a href={project.server} target='_blank' rel='noreferrer'>
                                <button className='btn btn-sm btn-outline btn-success gap-2'>
                                    Server Code <FaServer />
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;