import React from 'react';
import '../App.css';
import DefaultLink from '../components/ui/default-link';
import VariantLink from '../components/ui/variant-link';

export default function Hero() {
  return (
    <div className="subheader">    
      <p className='text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold dark:text-gray-200 tracking-tighter p-8'>Write like nobody’s watching. <span className="highlight">Because they aren’t.</span> </p>        
      <p className="max-w-[440px] text-gray-500 dark:text-gray-400 font-semibold text-xl">Write your ideas. Keep you docs safe and private. Decide where your data goes.</p>

      <div className="space-x-4 mb-20">
        <DefaultLink to='https://forms.gle/QFoewRrehmkXWuMo8'>Join Waitlist</DefaultLink>    
        <VariantLink to='https://docs.writeopia.io/'>Documentation</VariantLink>
      </div>

      <img src="/usage_screenshot.png" className='responsive-image' alt="Screenshot of Writeopia" />
    </div>
  );
}
