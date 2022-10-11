import React, { useState } from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import Background from './Background';


export default function Contact({}) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [ isAlertVisible, setIsAlertVisible ] = React.useState(false);

    const showAlert = () => {
       setIsAlertVisible(true);
       setTimeout(() => {
                    setIsAlertVisible(false);
                }, 3000);
    }
    

  async function handleOnSubmit(e){
    e.preventDefault();
    const formData = {}
    Array.from(e.currentTarget).forEach(field => {
      if ( !field.name ) return;
      formData[field.name] = field.value;
      field.value="";
    });
    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData)
    })
    setIsSubmitting(true);
    setTimeout(setIsSubmitting, 10000)
    
    console.log(formData);
  }
  
    
  return (
    <div className="h-screen bg-zinc-900 flex text-white flex-col relative text-center md:text-left md:flex-row  px-10 justify-evenly mx-auto items-center">
      <motion.h3
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{
            once: true
        }}
        className="absolute top-16 text-zinc-400 z-10 uppercase tracking-[20px]"
      >
        Contact Me
      </motion.h3>        
        
          <form className=" border-0 flex flex-col max-w-3xl max-h-[500px] mt-12 md:mt-0 backdrop-blur-sm md:border bg-zinc-900 w-full md:w-4/6 h-4/5 relative z-10 border-white px-12 py-8 " method="post" onSubmit={handleOnSubmit}>
            <div className="w-full justify-start flex flex-col md:flex-row md:space-y-0 md:space-x-4">
              <p className='flex flex-col mb-2 md:w-1/2'>
                <label className="uppercase font-light tracking-widest " htmlFor="name">Subject</label>
                <input className="text-sm  py-1 px-2 font-light bg-transparent border-b border-white " type="text" name="name" required />
              </p>
              <p className=' flex flex-col md:w-1/2 '>
              <label className="uppercase font-light tracking-widest " htmlFor="email">Email</label>
                <input className="text-sm py-1 px-2 font-light bg-transparent border-b border-white " type="email" name="email" required/>
              </p>
            </div>
            <div className="flex align space-y-4 md:space-y-0 flex-col  mt-4">
              <label className="self-start uppercase font-light mb-4 tracking-widest" htmlFor="message">Message</label>
              <textarea className="px-2 py-2 text-sm bg-transparent font-light border  border-white w-full h-80 md:h-48 " name="message" required />
       
            </div>
            <motion.button
         
            whileTap={{
                scaleY:0.9,
                scaleX: 0.95
            }}

            disabled={isSubmitting} className="border h-8 mt-8 w-1/2 self-center border-white px-4 py-1 uppercase font-light"
            
            onClick={showAlert}>
              Submit
            </motion.button>
            
          </form>

          {isSubmitting && isAlertVisible && <div className='absolute bottom-12 md:bottom-32 '>
              <div className='text-white flex gap-4 flex-row md:flex-col'>
                <p>Message submitted.</p>
                <p>I will be in touch soon!</p>
              </div>
          </div>}

      <footer className="bg-transparent justify-center absolute text-zinc-400 font-light uppercase tracking-widest text-xs md:text-sm bottom-0 p-5 flex mx-auto max-w-7xl w-full z-20">
        <p> All rights reserved <a className="text-zinc-500 cursor-pointer ">Kurt Reti</a></p>
      </footer>

    </div>
  )
}
