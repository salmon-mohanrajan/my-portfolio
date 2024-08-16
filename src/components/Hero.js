import React from 'react'
import { HERO_CONTENT, SOCIAL_LINK  } from '../constants';
import profilePic from "../assets/kevinRushProfile.png";
import {motion} from "framer-motion";

import { FaLinkedin, FaGithub } from "react-icons/fa6"
import { MdDownload } from "react-icons/md";


const container = (delay) => ({
    hidden: { x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay},
    },
});

const Hero = () => {
    return (
        <div className=' border-b border-neutral-900 pb-4 mt-24 lg:mb-35' id='home'>
            <div className=' flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    {/* Content */}
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            variants={container(0)}
                            initial='hidden'
                            animate='visible'
                            className=' pb-12 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                            Salmon
                        </motion.h1>
                        <motion.span 
                            variants={container(0.5)}
                            initial='hidden'
                            animate='visible'
                            className=' bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial='hidden'
                            animate='visible'
                            className=' my-2 max-w-xl py-6 font-light tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                    {/* Resume */}
                    <div className="flex flex-col lg:items-start mb-8 md:justify-center md:items-center">
                        <motion.a 
                            variants={container(1.5)}
                            initial='hidden'
                            animate='visible'
                            href="https://drive.google.com/file/d/1YCs7UohBsEjKTSbD3M32upBj8BNEV2vs/view?usp=sharing"
                            download= {true} 
                            target='blank'
                            className=" flex items-center justify-center gap-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent border font-bold py-2 px-4 rounded-lg text-base md:w-32 md:items-center">
                            Resume
                            <MdDownload className=' text-pink-300 text-base'/>
                        </motion.a>
                    </div>  
                    {/* Icons */}
                    <div className='flex text-3xl gap-4'>
                        <motion.a 
                            variants={container(2)}                            
                            initial='hidden'
                            animate='visible'
                            target='blank'
                            href={SOCIAL_LINK.linkedin}>
                                <FaLinkedin/>
                        </motion.a>
                        <motion.a 
                            variants={container(2.5)}
                            initial='hidden'
                            animate='visible'
                            target='blank'
                            href={SOCIAL_LINK.github}>
                                <FaGithub/>
                        </motion.a>
                    </div>
                </div>
                {/* Image */}
                <div className=' w-full lg:w-1/2 lg:p-8'>
                    <div className=' flex justify-center'>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1}}
                            transition={{ duration: 1, delay: 1.2}}
                            src={profilePic} alt='ProfilePic'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
