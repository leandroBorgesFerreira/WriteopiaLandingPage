import React from 'react';

const features = [
  {
    title: "Choose where you data goes.", 
    description: "Your notes stay with you. Store them locally on your device for complete offline access, or sync with a cloud service of your choice—your data, your control.", 
    align: "left",
    imageUrlLight: "/choices.jpg",
    imageUrlDark: "/choices.jpg"
  },
  {
    title: "Choose your AI agent.", 
    description: "You can choose from a variety of open-source AI agents to suit your needs. Run then locally for privacy.", 
    align: "right",
    imageUrlLight: "/choose_ai.png",
    imageUrlDark: "/choose_ai.png"
  },
  { 
    title: "No lock-in.", 
    description: "We use public file formats and make it easy to export your data. No lock in to a specific system or service.", 
    align: "left",
    imageUrlLight: "/breakfree.jpg",
    imageUrlDark: "/breakfree.jpg"
  },
  { title: "Beautifully designed.", 
    description: "Our text editor is fast, responsive, and designed to keep up with you. With a sleek, modern interface, it’s both functional and visually appealing. Enjoy smooth, efficient note-taking every time.",
    align: "right",
    imageUrlLight: "/ai_question_light.png",
    imageUrlDark: "/ai_question_dark.png"
  }
];


export default function Pitch() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-12 pt-24 p-6">
      {features.map((feature) => (
        <div className={`flex flex-col lg:flex-row items-center ${feature.align === "right" ? "flex-row-reverse" : ""} py-20`}>        
          <div>
            <img src={feature.imageUrlLight} alt={feature.title} className="max-w-[400px] max-h-[600px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] object-cover dark:hidden" />
            <img src={feature.imageUrlDark} alt={feature.title} className="max-w-[400px] max-h-[600px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] object-cover hidden dark:block" />
          </div>

          <div className='w-10'/>

          <div className={`p-6 px-10 items-center justify-center dark:text-gray-200 text-left max-w-4xl`}>
            <h2 className="text-6xl font-bold">{feature.title}</h2>
            <p className="text-3xl mt-2 text-gray-500 dark:text-gray-400">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

