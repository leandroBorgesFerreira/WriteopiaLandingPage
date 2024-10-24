import React, { useState } from 'react';
import { Menu, X } from "lucide-react"
import '../App.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <header className="header">
        <img className='header-logo' src="/logo.png" alt="Writeopia logo" />
        <nav className="hidden md:flex ml-4">
          <button className="header-button">Home</button>
          <button className="header-button">Product</button>
          <button className="header-button">What's coming</button>
        </nav>

        <Menu className="ml-auto mr-10 md:hidden" onClick={toggleMenu}/>

        <div className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-start pt-6 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <X className="h-6 w-6 ml-auto mr-10" onClick={toggleMenu}/>
          <nav className="flex flex-col items-center gap-8">
          <button className="header-button">Home</button>
          <button className="header-button">Product</button>
          <button className="header-button">What's coming</button>
          </nav>
        </div>
      </header>
  );
}

export default Header;
