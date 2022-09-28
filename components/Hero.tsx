import React from 'react'
import Background from './Background'
import {motion} from 'framer-motion'

type Props = {}

export default function ({}: Props) {
  return (
    <div className='h-screen flex flex-col  items-center justify-center text-center
    overflow-hidden '>
      <Background />
      
      <motion.div
      initial={{
        opacity:0
      }}
      animate={{
        opacity:1
      }}
      transition={{
        delay:3,
        duration: 1.5
      }}>
      
      <p className=' text-5xl relative text-white z-10'>Kurt Reti, Frontend Developer</p>
      <div className='relative'>
        <button className="heroButton">About</button>
        <button className="heroButton">Experience</button>
        <button className="heroButton">Skills</button>
        <button className="heroButton">Projects</button>
      </div>
      </motion.div>
    </div>
  )
}