import React, { useState } from 'react';
import '../App.css';
import DefaultButton from '../components/ui/default-button';

export default function NewsletterSection() {
    const [email, setEmail] = useState('')
  
    // const handleSubmit = (e: React.FormEvent) => {
    //   e.preventDefault()
    //   // Handle newsletter signup logic here
    //   console.log('Signed up with email:', email)
    //   setEmail('')
    // }
  
    return (
      <section className="w-screen pt-12 md:pt-24 lg:pt-32 pb-52 flex flex-col space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Be the First to Know
        </h2>
        <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                Sign up for our newsletter to get early access and exclusive updates about our text editor.
        </p>  
        <div className="space-y-2 space-x-2">
          <input 
            className="max-w-lg flex-1 p-3 rounded-xl border-2" 
            placeholder="Enter your email" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <DefaultButton type="submit">Subscribe</DefaultButton>
        </div>
      </section>
    )
  }