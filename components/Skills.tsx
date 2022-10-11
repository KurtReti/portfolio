import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'

type Props = {}

export default function Skills({}: Props) {
  return (
    <div className="h-screen bg-zinc-900 flex flex-col overflow-hidden relative text-left md:flex-row max-w-full px-10 justify-evenly    items-center">
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
        className="absolute pl-4 md:pl-0 top-24 uppercase tracking-[20px]"
      >
        Skills
      </motion.h3>

      <motion.div
      
      className='flex flex-wrap w-full rounded-full md:w-1/2 gap-y-0 gap-0 md:gap-4  justify-evenly '>
   
        <Skill color="#61DBFB" skill="react"proficiency="60"/>
        <Skill color="#F0DB4F" skill="javascript"proficiency="24"/>
        <Skill color="#f06529" skill="html5"proficiency="24"/>
        <Skill color="#2965f1" skill="css3"proficiency="24"/>

        <Skill color="#563d7c" skill="bootstrap"proficiency="60"/>

        <Skill color="#F1502F" skill="git"proficiency="24"/>
        <Skill color="#cc6699" skill="sass"proficiency="24"/>
        <Skill color="#5382a1" skill="java"proficiency="24"/>
 
        <Skill color="#FFD43B" skill="python"proficiency="24"/>
        <Skill color="#8BC3FC" skill="photoshop"proficiency="24"/>
        <Skill color="#f97434" skill="swift"proficiency="24"/>
        <Skill color="#00758F" skill="mysql"proficiency="24"/>

      </motion.div>
 

    </div>
  )
}