import React from 'react';
import '../App.css';

export default function Hero() {
  return (
    <div className="subheader">    
      <p className='text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold dark:text-gray-200 tracking-tighter p-8'>Write like nobody’s watching. <span className="highlight">Because they aren’t.</span> </p>        
      <p className="max-w-[440px] text-gray-500 dark:text-gray-400 font-semibold text-xl pb-20">Write your ideas. Keep you docs safe and private. Decide where your data goes.</p>
      

      {/* <div className='w-full flex flex-col items-center pt-20'> */}
        <img src="/hero_light.png" alt="Screenshot of Writeopia" className="responsive-image object-cover dark:hidden" />
        <img src="/hero_dark.png" alt="Screenshot of Writeopia" className="responsive-image object-cover hidden dark:block" />
      {/* </div> */}
    </div>
  );
}
