import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';
import Experience from '../Experience/Experience';

const Home = () => {
    return (
        <div >
            <Banner />
            <About />
            <Skill />
            <Project />
            <Experience />
            <Contact />
        </div>
    );
};

export default Home;