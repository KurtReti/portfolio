import React from 'react'
import {motion} from 'framer-motion'
import DevIcon from "devicon-react-svg"
const devIconStyle = {
    fill: "white",
    width: "64px",
};

type Props = {}

export default function Skill({skill, proficiency}) {
    const prof = proficiency
  return (
    <div className=''>
      <motion.div
        whileHover={{
            scale:1.15
        }}

      className={` flex justify-center opacity-60 group hover:opacity-100  text-white hover:shadow-xl hover:shadow-zinc-900 transition-opacity duration-500  h-24 rounded-full   w-${24}`}>    
        <DevIcon icon={skill} style={devIconStyle} viewBox="0 0 32 32"/>
        <p className='opacity-0 group-hover:opacity-100'>{proficiency}%</p>
      </motion.div> 

    </div>
    
  )
}