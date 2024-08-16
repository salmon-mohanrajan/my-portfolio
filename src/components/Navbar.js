import React, { useState } from 'react';
import logo from "../assets/salmonLogo.png";
import { FaBarsStaggered} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='fixed top-0 left-0 w-full z-50 mb-4 px-14 flex items-center justify-between py-6 bg-transparent'>
            <div className='flex flex-shrink-0 items-center'>
                <img className='mx-2 w-10' src={logo} alt='logo'/>
            </div>
            <div className='hidden md:flex items-center justify-center gap-4 text-2xl'>
                <ul className="flex text-white gap-8 text-lg cursor-pointer">
                    <li><Link to="home" smooth={true} duration={500} spy={true} offset={-70}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500} spy={true} offset={-70}>About</Link></li>
                    <li><Link to="experience" smooth={true} duration={500} spy={true} offset={-70}>Experience</Link></li>
                    <li><Link to="projects" smooth={true} duration={500} spy={true} offset={-70}>Projects</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} spy={true} offset={-70}>Contact</Link></li>
                </ul>
            </div>
            <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'>
                <FaBarsStaggered className='text-white h-5' />
            </button>
            {toggleMenu && (
                <nav className="block md:hidden absolute top-0 left-0 w-full bg-black p-4">
                    <button onClick={() => setToggleMenu(false)} className="absolute top-4 right-4 text-white">
                        <FaTimes className='h-6 w-6' />
                    </button>
                    <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav cursor-pointer">
                        <li><Link to="home" smooth={true} duration={500} spy={true} offset={-70}>Home</Link></li>
                        <li><Link to="about" smooth={true} duration={500} spy={true} offset={-70}>About</Link></li>
                        <li><Link to="experience" smooth={true} duration={500} spy={true} offset={-70}>Experience</Link></li>
                        <li><Link to="projects" smooth={true} duration={500} spy={true} offset={-70}>Projects</Link></li>
                        <li><Link to="contact" smooth={true} duration={500} spy={true} offset={-70}>Contact</Link></li>
                    </ul>
                </nav>
            )}
        </nav>
    );
};

export default Navbar;
