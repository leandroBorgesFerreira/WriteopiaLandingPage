import React from 'react';
import '../App.css';

function Hero() {
  return (
      <div className="subheader">    
        <p className='text-3xl font-bold tracking-tighter sm:text-7xl mb-8 mt-10'>Free documentation. <span className="highlight">For the brave and true.</span> </p>        
        <p className="max-w-[440px] text-gray-500 font-semibold text-xl">Write your ideas. Keep you docs safe and prive. Decide where you data goes.</p>

        <div className="space-x-4 mb-20">
          <button className='default-button'>Join Waitlist</button>
          <button className='variant-button'>Learn More</button>
        </div>

        <img src="/usage_screenshot.png" className='responsive-image' alt="Screenshot of Writeopia" />
      </div>
  );
}

export default Hero;
