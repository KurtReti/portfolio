import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='h-[500px] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden snap-center p-10 bg-zinc-800 flex flex-col items-center rounded-lg space-y-7 flex-shrink-0 w-[420px] md:w-[600px] xl:w-[800px]'>
    <motion.img 

    initial={{
        y: -100,
        opacity: 0,
    }}

    whileInView={{
        y: 0,
        opacity: 1
    }}

    transition={{
        duration: 1.5
    }}

    viewport={{
        once:true,
    }}

    className="h-24 w-24 rounded-full object-cover object-center" 
    src="https://cdn.discordapp.com/attachments/216749490747473921/1024626312117239829/Screen_Shot_2022-09-28_at_8.18.48_pm.png" alt="" >
    </motion.img>
    <div>
    <h4 className='text-4xl font-light'>
        University of Wollongong
    </h4>
    <p className='text-2xl font-bold mt-1'>
        Bachelor of Computer Science 
    </p>
    {/* <div className='flex space-x-2 my-2'>

    </div> */}
    <p className='uppercase py-4 text-zinc-500'>
        2019-2022
    </p>

    <ul className='list-disc space-y-4 ml-5 text-md'>
        <li>Major in Cybersecurity</li>
        <li>Major in Software Engineering</li>
  
    </ul>
    </div>

    </article>
  )
}