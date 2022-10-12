import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';



const Contact = () => {

    const [result, showresult] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'service_yh1whzy', e.target , '3hxuCzkHx006S68g9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset(); 
        showresult(true)
    };


  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 text-whtie'>
  
     
        <p className='text-xl text-white'>eshwartangirala11@gmail.com</p>


    </div>
  )
}

export default Contact;