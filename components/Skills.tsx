import React from 'react'
import {motion} from 'framer-motion'
import {CssSkill, JsSkill, HTMLSkill, CSkill, ReactSkill} from './Skill'


type Props = {}

export default function Skills({}: Props) {
  return (
    <div className="h-screen flex flex-col overflow-hidden relative text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
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

        <div className='absolute flex items-end space-x-24'>
            <JsSkill/>
            <CssSkill/>
            <HTMLSkill/>
            <CSkill/>
            <ReactSkill/>
        </div>
        <div className='absolute bottom-0 w-full z-0 h-64 bg-zinc-900 opacity-100 rounded-md'></div>

    </div>
  )
}