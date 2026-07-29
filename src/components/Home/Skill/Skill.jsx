import React from 'react';
import htmlLogo from './../../../assets/icons/html-icon.webp'
import cssLogo from './../../../assets/icons/css.jpg'
import bootstrapLogo from './../../../assets/icons/bootstrap-5-logo-icon.webp'
import taildwindLogo from './../../../assets/icons/tailwind-css.jpg'
import javascriptLogo from './../../../assets/icons/javascript.webp'
import reactLogo from './../../../assets/icons/react.png'
import daisyuiLogo from './../../../assets/icons/daisyui.png'
import firebaseLogo from './../../../assets/icons/firebase.png'
import emailJsLogo from './../../../assets/icons/email-js.png'
import rechartLogo from './../../../assets/icons/recharts.png'
import transtacLogo from './../../../assets/icons/Tanstack.png'
import expressJsLogo from './../../../assets/icons/express-js.png'
import nodeJsLogo from './../../../assets/icons/node-js.png'
import mongoDBLogo from './../../../assets/icons/MongoDB_Logo.svg.png'
import restAPILogo from './../../../assets/icons/restAPI.png'
import jwtLogo from './../../../assets/icons/jwt.png'
import axiosLogo from './../../../assets/icons/axios.png'
import stripeLogo from './../../../assets/icons/stripe.png'
import sqlServerLogo from './../../../assets/icons/sql-server.png'
import mySqlLogo from './../../../assets/icons/Mysql_logo.png'
import gitHubLogo from './../../../assets/icons/github.png'
import figmaLogo from './../../../assets/icons/figma.png'
import netlifyLogo from './../../../assets/icons/netlify.png'
import vercelLogo from './../../../assets/icons/vercel.png'
import npmLogo from './../../../assets/icons/Npm-logo.svg.png'
import vsCodeLogo from './../../../assets/icons/Visual_Studio_Code.png'
import devToolsLogo from './../../../assets/icons/window-dev-tools.svg'
import gitBashLogo from './../../../assets/icons/GitBashLogo.jpg'
import postManLogo from './../../../assets/icons/Postman.png'
import thunderClientLogo from './../../../assets/icons/thunder.png'

const skillGroups = [
    {
        title: 'Frontend',
        items: [
            { logo: htmlLogo, label: 'HTML' },
            { logo: cssLogo, label: 'CSS' },
            { logo: bootstrapLogo, label: 'Bootstrap' },
            { logo: taildwindLogo, label: 'Tailwind' },
            { logo: javascriptLogo, label: 'JavaScript' },
            { logo: reactLogo, label: 'React JS' },
            { logo: daisyuiLogo, label: 'DaisyUI' },
            { logo: firebaseLogo, label: 'Firebase' },
            { logo: emailJsLogo, label: 'Email JS' },
            { logo: rechartLogo, label: 'Recharts' },
            { logo: transtacLogo, label: 'Tanstack Query' },
            { label: 'Context API' },
        ],
    },
    {
        title: 'Backend',
        items: [
            { logo: expressJsLogo, label: 'Express JS' },
            { logo: nodeJsLogo, label: 'Node JS' },
            { logo: mongoDBLogo, label: 'MongoDB' },
            { logo: restAPILogo, label: 'Rest API' },
        ],
    },
    {
        title: 'Familiar',
        items: [
            { logo: jwtLogo, label: 'JWT' },
            { logo: axiosLogo, label: 'Axios' },
            { logo: stripeLogo, label: 'Stripe JS' },
            { logo: sqlServerLogo, label: 'SQL Server' },
            { logo: mySqlLogo, label: 'MySQL' },
            { logo: gitHubLogo, label: 'GitHub' },
            { logo: figmaLogo, label: 'Figma' },
            { logo: netlifyLogo, label: 'Netlify' },
            { logo: vercelLogo, label: 'Vercel' },
            { logo: npmLogo, label: 'NPM' },
            { label: 'SEO' },
        ],
    },
    {
        title: 'Tools',
        items: [
            { logo: vsCodeLogo, label: 'VS Code' },
            { logo: devToolsLogo, label: 'Dev Tools' },
            { logo: gitBashLogo, label: 'Git Bash' },
            { logo: postManLogo, label: 'Postman' },
            { logo: thunderClientLogo, label: 'Thunder Client' },
        ],
    },
];

const SkillCard = ({ logo, label }) => (
    <div className='flex justify-center items-center gap-2 border-2 border-gray-200 hover:border-purple-400 bg-white p-3 sm:p-4 rounded-md transition-colors overflow-hidden'>
        {logo && (
            <img
                className='h-8 sm:h-10 w-auto max-w-[2.5rem] sm:max-w-[3rem] object-contain shrink-0'
                src={logo}
                alt={label}
            />
        )}
        <h3 className='text-sm sm:text-lg font-bold text-gray-700 text-center truncate'>{label}</h3>
    </div>
);

const Skill = () => {
    return (
        <div id='skill' className='mx-4 md:mx-16 bg-slate-50 shadow-lg px-4 py-12 md:p-12'>
            <h2 className='text-3xl font-bold text-gray-800 text-center mb-12'>Skill</h2>
            {skillGroups.map((group) => (
                <div key={group.title} className='mb-8 last:mb-0'>
                    <h3 className='text-2xl font-bold my-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                        {group.title}:
                    </h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4'>
                        {group.items.map((item) => (
                            <SkillCard key={item.label} logo={item.logo} label={item.label} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skill;