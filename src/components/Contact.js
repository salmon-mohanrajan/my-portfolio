import React from 'react'
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

import { FaPhoneAlt } from "react-icons/fa";
import { MdDownload, MdMailOutline } from "react-icons/md";

const Contact = () => {

    return (
        <div className=' border-b border-neutral-900 pb-20' id='contact'>
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className=' my-10 text-center text-4xl'>
                    Get in Touch
            </motion.h2>
            <div className=' text-center tracking-tighter'>
                {/* <motion.p 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className=' my-4'>
                        {CONTACT.address}
                </motion.p> */}
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className=' flex justify-center items-center gap-4'>
                    <FaPhoneAlt className=' w-5 h-5'/>
                    <p className=' my-4'>
                        {CONTACT.phoneNo}
                    </p>
                </motion.div>
                {/* <motion.p 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className=' my-4'>
                    {CONTACT.phoneNo}       
                </motion.p> */}
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className=' flex justify-center items-center gap-4'>
                    <MdMailOutline className=' w-7 h-7'/>
                    <a href='#email' className=' border-b'>{CONTACT.email}</a>
                </motion.div>
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-col my-8 md:justify-center md:items-center">
                    <a 
                        href="https://drive.google.com/file/d/1YCs7UohBsEjKTSbD3M32upBj8BNEV2vs/view?usp=sharing"
                        download={true} 
                        target='blank'
                        className=" flex items-center justify-center gap-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent border font-bold py-2 px-4 rounded-lg text-base md:w-32 md:items-center">
                        Resume
                        <MdDownload className=' text-pink-300 text-base'/>
                    </a>
                </motion.div>  
            </div>
        </div>
    )
}

export default Contact
