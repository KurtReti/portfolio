import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'

type Props = {}

export default function Skills({}: Props) {
  return (
    <div className="h-screen flex flex-col overflow-hidden relative text-left md:flex-row max-w-full px-10 justify-evenly    items-center">
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
          once: true,
        }}
        className="absolute top-24 uppercase tracking-[20px]"
      >
        Skills
      </motion.h3>

      <motion.div
      
      className='flex flex-wrap w-full rounded-full md:w-1/2 gap-y-8 gap-4  justify-evenly '>
   
        <Skill skill="react"proficiency="60"/>
        <Skill skill="javascript"proficiency="24"/>
        <Skill skill="html"proficiency="24"/>
        <Skill skill="css"proficiency="24"/>
 
        <Skill skill="NEXT.JS"proficiency="24"/>
        <Skill skill="NEXT.JS"proficiency="24"/>
        <Skill skill="NEXT.JS"proficiency="24"/>
        <Skill skill="NEXT.JS"proficiency="24"/>
 
        <Skill skill="NEXT.JS"proficiency="24"/>
        <Skill skill="NEXT.JS"proficiency="24"/>
        <Skill skill="NEXT.JS"proficiency="24"/>
        <Skill skill="NEXT.JS"proficiency="24"/>

      </motion.div>
 

    </div>
  )
}