import React from 'react'
import Background from './Background'
import {motion} from 'framer-motion'
import Link from 'next/link'

type Props = {}

export default function ({}: Props) {
  return (
    <div className='h-screen flex flex-col  items-center justify-center text-center
    overflow-hidden z-0'>
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
        <Link href="#about">
        <button className="heroButton">About</button>
        </Link>

        <Link href="#experience">
        <button className="heroButton">Experience</button>
        </Link>

        <Link href="#skills">
        <button className="heroButton">Skills</button>
        </Link>

        <Link href="#projects">
        <button className="heroButton">Projects</button>
        </Link>
      </div>
      </motion.div>
    </div>
  )
}