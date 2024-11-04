import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Spiral as Hamburger } from 'hamburger-react'
import LargeButton from "./large-button"
import '../../App.css';
import Divider from './divider';
import HeaderLink from './header-link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <header className='flex w-screen flex-row pt-6 pb-6'>
        <img className='header-logo z-50 ml-6' src="/logo.png" alt="Writeopia logo" />
        <nav className="ml-auto pr-10 hidden md:flex items-center">
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/product">Product</HeaderLink>
          <HeaderLink to="/coming">What's coming</HeaderLink>
        </nav>
        <div className={`z-50 ml-auto ${isOpen ? 'visible' : 'md:hidden'}  mr-6`}>
          <Hamburger toggled={isOpen} toggle={toggleMenu} size={20} />
        </div>                      
        <div className={`fixed inset-0 bg-white dark:bg-gray-900  z-40 pt-6 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

          <nav className="flex flex-col items-start gap-6 w-screen pt-28">
            <LargeButton>Home</LargeButton>
            <Divider />        
            <LargeButton>Product</LargeButton>
            <Divider />
            <LargeButton>What's coming</LargeButton>
          </nav>
        </div>
      </header>
  );
}

