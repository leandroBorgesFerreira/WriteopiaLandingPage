import React from 'react';

export default function Pitch() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-12 pt-24 p-6">    
      <DataChoice />
      <AiChoice />
      <OpenFormat />
      <Design />
    </div>
  );
}

function DataChoice() {
  return (
    <div className={`flex flex-col-reverse lg:flex-row items-center py-10`}>   
      <div className={`p-6 px-10 items-center justify-center dark:text-gray-200 text-left max-w-4xl`}>
        <h2 className="text-6xl font-bold">Choose where you data goes.</h2>
        <p className="text-3xl mt-2 text-gray-500 dark:text-gray-400">Your notes stay with you. Store them locally on your device for complete offline access, or sync with a cloud service of your choice—your data, your control.</p>
      </div>     
      
      <div className='w-10'/>

      <img src="/data_choice.svg" alt="Choose where you data goes." className="max-w-[400px] max-h-[600px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] w-80 h-80 object-cover" />
    </div>
  );
}

function AiChoice() {
  return (
    <div className={`flex flex-col lg:flex-row items-center py-10`}>        
      <img src="/ai_choice.svg" alt="Choose your AI agent." className="max-w-[400px] max-h-[600px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] w-80 h-80 object-cover" />

      <div className='w-10'/>

      <div className={`p-6 px-10 items-center justify-center dark:text-gray-200 text-left max-w-4xl`}>
        <h2 className="text-6xl font-bold">Choose your AI agent.</h2>
        <p className="text-3xl mt-2 text-gray-500 dark:text-gray-400">You can choose from a variety of open-source AI agents to suit your needs. Run then locally for privacy.</p>
      </div>
    </div>
  );
}

function OpenFormat() {
  return (
    <div className={`flex flex-col-reverse lg:flex-row items-center py-10`}>   
      <div className={`p-6 px-10 items-center justify-center dark:text-gray-200 text-left max-w-4xl`}>
        <h2 className="text-6xl font-bold">No lock-in.</h2>
        <p className="text-3xl mt-2 text-gray-500 dark:text-gray-400">We use public file formats and make it easy to export your data. No lock in to a specific system or service.</p>
      </div>     
      
      <div className='w-10'/>

      <img src="/open_format.svg" alt="No lock-in." className="max-w-[400px] max-h-[600px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] w-80 h-80 object-cover" />
    </div>
  );
}

function Design() {
  return (
    <div className={`flex flex-col lg:flex-row items-center pt-10`}>        
      <img src="/web_design.svg" alt="Beautifully designed." className="max-w-[400px] max-h-[600px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] w-80 h-80 object-cover" />

      <div className='w-10'/>

      <div className={`p-6 px-10 items-center justify-center dark:text-gray-200 text-left max-w-4xl`}>
        <h2 className="text-6xl font-bold">Beautifully designed.</h2>
        <p className="text-3xl mt-2 text-gray-500 dark:text-gray-400">"Our text editor is fast, responsive, and designed to keep up with you. With a sleek, modern interface, it’s both functional and visually appealing. Enjoy smooth, efficient note-taking every time."</p>
      </div>
    </div>
  );
}

