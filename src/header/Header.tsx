import React, { useState } from 'react';
import { Spiral as Hamburger } from 'hamburger-react'
import '../App.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <header className='flex w-screen flex-row pt-2'>
        <img className='header-logo ml-4' src="/logo.png" alt="Writeopia logo" />
        <nav className="ml-auto pr-10 hidden md:flex items-center">
          <button className="header-button">Home</button>
          <button className="header-button">Product</button>
          <button className="header-button">What's coming</button>
        </nav>
        <div className="mr-10 z-50 ml-auto mr-2 md:hidden">
          <Hamburger toggled={isOpen} toggle={toggleMenu} size={20} />
        </div>                      
        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-start pt-6 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <nav className="flex flex-col items-center gap-8 w-screen items-center">
            <button className="header-button">Home</button>
            <button className="header-button">Product</button>
            <button className="header-button">What's coming</button>
          </nav>
        </div>
      </header>
  );
}

export default Header;
