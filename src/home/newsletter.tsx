import React from 'react';
import '../App.css';
import DefaultLink from '../components/ui/default-link';

export default function NewsletterSection() {    
  return (
    <section className="w-screen pt-12 md:pt-24 lg:pt-32 pb-52 pl-8 pr-8 flex flex-col space-y-4 text-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Be the First to Know
      </h2>
      <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
              Sign up for our newsletter to get early access and exclusive updates about our text editor.
      </p>  
      <div className="space-y-2 space-x-2 pt-3">              
        <DefaultLink to='https://forms.gle/QFoewRrehmkXWuMo8'>Subscribe</DefaultLink>
      </div>
    </section>
  )
}