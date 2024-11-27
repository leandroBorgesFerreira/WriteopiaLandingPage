import React from 'react';
import '../App.css';

export default function PrivacyPolicy() {    
  return (
    <section className="w-screen h-screen pb-52 pl-8 pr-8 flex flex-col space-y-4 text-start">
      <div>
        <h2 className="mx-auto max-w-[900px] pt-4 pb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Privacy
        </h2>
        <p className="mx-auto max-w-[900px] text-md">
          We take privacy very seriously and we understand how frustrating it is when apps collect your data without your knowledge. <br/><br/>

          Your privacy is critically important to us. At Writeopia fundamental principles:<br/><br/>
          - We don’t share your personal information with anyone except to comply with the law or protect our rights.<br/>
          - We don’t ask you for personal information unless we truly need it.<br/>
          - We don’t store personal information on our servers unless required for the on-going operation of the service.<br/>
        </p> 
      </div>       
    </section>
  )
}