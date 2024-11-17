import React from 'react';
import '../App.css';
import DefaultButton from '../components/ui/default-button';
import VariantButton from '../components/ui/variant-button';

export default function Hero() {
  return (
      <div className="subheader">    
        <p className='text-7xl font-bold dark:text-gray-200 tracking-tighter sm:text-7xl p-8'>Free documentation. <span className="highlight">For the brave and true.</span> </p>        
        <p className="max-w-[440px] text-gray-500 dark:text-gray-400 font-semibold text-xl">Write your ideas. Keep you docs safe and prive. Decide where you data goes.</p>

        <div className="space-x-4 mb-20">
          <DefaultButton>Join Waitlist</DefaultButton>    
          <VariantButton>Learn More</VariantButton>        
        </div>

        <img src="/usage_screenshot.png" className='responsive-image' alt="Screenshot of Writeopia" />
      </div>
  );
}
