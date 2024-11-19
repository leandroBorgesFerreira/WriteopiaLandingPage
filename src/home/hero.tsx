import React from 'react';
import '../App.css';
import DefaultButton from '../components/ui/default-button';
import VariantButton from '../components/ui/variant-button';

export default function Hero() {
  return (
      <div className="subheader">    
        <p className='text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold dark:text-gray-200 tracking-tighter p-8'>Free documentation. <span className="highlight">For the brave and true.</span> </p>        
        <p className="max-w-[440px] text-gray-500 dark:text-gray-400 font-semibold text-xl">Write your ideas. Keep you docs safe and private. Decide where your data goes.</p>

        <div className="space-x-4 mb-20">
          <DefaultButton>Join Waitlist</DefaultButton>    
          <VariantButton to='https://docs.writeopia.io/'>Learn More</VariantButton>
        </div>

        <img src="/usage_screenshot.png" className='responsive-image' alt="Screenshot of Writeopia" />
      </div>
  );
}
