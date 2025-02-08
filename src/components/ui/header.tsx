import React, { useState } from 'react';
import { Spiral as Hamburger } from 'hamburger-react'
import LargeButton from "./large-button"
import '../../App.css';
import Divider from './divider';
import HeaderLink from './header-link';
import AnimatedDropDown from './hover-animated-dropdown';
import { Link } from 'react-router-dom';
import MediumLink from './medium-button';
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isProductOpen, setIsProductOpen] = useState(false);

  const toggleProductScreen = () => {
    setIsProductOpen(!isProductOpen);
  };

  const [isComunityOpen, setIsComunityOpen] = useState(false);

  const toggleComunityScreen = () => {
    setIsComunityOpen(!isComunityOpen);
  };

  const secondItems = [
    { label: 'Download App - Mac', href: 'https://github.com/leandroBorgesFerreira/Writeopia/releases/download/app-macos-alpha16/Writeopia-alpha16.dmg' },
    { label: 'Download App - Mac (Intel)', href: 'https://github.com/leandroBorgesFerreira/Writeopia/releases/download/app-macos-alpha16/Writeopia-alpha16-intel.dmg' },
    // { label: 'Sample', href: 'https://sample.writeopia.io/' },
    { label: 'Guide', href: 'https://docs.writeopia.io/' },
  ];

  const thirdItems = [
    { label: 'Github', href: 'https://github.com/leandroBorgesFerreira/Writeopia' },
    { label: 'Linkedin', href: 'https://www.linkedin.com/company/writeopia/' },
  ];

  return (
      <header className='flex w-screen flex-row pt-6 pb-6'>
        <Link to="/" className="z-40">
          <img className='header-logo z-40 ml-6' src="/logo.png" alt="Writeopia logo" />
        </Link>
        <nav className="ml-auto pr-10 hidden md:flex items-center">
          <HeaderLink to="/">Home</HeaderLink>
          <AnimatedDropDown menuItems={secondItems} label="Product" />
          <AnimatedDropDown menuItems={thirdItems} label="Comunity" />          
        </nav>
        <div className={`z-40 ml-auto ${isOpen ? 'visible' : 'md:hidden'}  mr-6`}>
          <Hamburger toggled={isOpen} toggle={toggleMenu} size={20} />
        </div>                      
        <div className={`fixed inset-0 bg-gray-100 dark:bg-gray-900  z-30 pt-6 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <nav className="flex flex-col items-start gap-6 w-screen pt-28">
            <LargeButton>Home</LargeButton>
            <Divider />        
            <LargeButton onClick={toggleProductScreen}>
              Product
              {
                <motion.div
                  animate={{ rotate: !isProductOpen ? 0 : -180 }}
                  transition={{ duration: 0.150 }}
                  className="ml-2 -mr-1 h-5 w-5 inline-flex items-center justify-center"
                >
                  <ChevronDown className="h-5 w-5" aria-hidden="true" />
                </motion.div>
              }               
            </LargeButton>            
            <div className={`flex flex-col ${isProductOpen ? 'visible' : 'hidden'}`}>              
              {secondItems.map((item) => (
                <MediumLink to={item.href}>{item.label}</MediumLink>
              ))}              
            </div>
            <Divider />        
            <LargeButton onClick={toggleComunityScreen}>
              Comunity            
                {
                  <motion.div
                    animate={{ rotate: !isComunityOpen ? 0 : -180 }}
                    transition={{ duration: 0.150 }}
                    className="ml-2 -mr-1 h-5 w-5 inline-flex items-center justify-center"
                  >
                    <ChevronDown className="h-5 w-5" aria-hidden="true" />
                  </motion.div>
                }
              </LargeButton>
            <div className={`flex flex-col ${isComunityOpen ? 'visible' : 'hidden'}`}>
              {thirdItems.map((item) => (
                <MediumLink to={item.href}>{item.label}</MediumLink>
              ))}              
            </div>
            <Divider />    
          </nav>
        </div>
      </header>
  );
}


