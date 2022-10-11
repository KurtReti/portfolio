import Image from 'next/image'
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import DevIcon from "devicon-react-svg"
import Link from 'next/link'

type Props = {}

export default function Project({title, description, project_link, github_link, image, skill1, skill2, skill3}) {
    const devIconStyle= {
        fill: "white",
        width: "24px",
    };

  return (
    <div className='h-[600px] w-[400px] pb-10 '>
        <img className='object-cover h-3/5 w-full ' src={image}>
        </img>

        <div className='flex py-4 flex-col h-2/5 w-full bg-transparent space-y-4'>
            <h2 className='uppercase text-2xl text-white tracking-widest'>{title}</h2>
            <p className=' text-sm '>{description}</p>

            <div className='flex flex-row justify-between '>
                <div className='flex gap-2 flex-row flex-wrap'>
                    <DevIcon icon={skill1} style={devIconStyle} viewBox="0 0 32 32"/>
                    <DevIcon icon={skill2} style={devIconStyle} viewBox="0 0 32 32"/>
                    <DevIcon icon={skill3} style={devIconStyle} viewBox="0 0 32 32"/>

                </div>
                <div className='flex flex-col gap-2'>
                
                <motion.button
                whileHover={{
                    scale:1.1
                }}
                
                className='bg-red-400/50 text-md hover:opacity-100 rounded-md px-2 text-white  self-end'>View Project</motion.button>

                <Link href={github_link}>
                <button className='self-end  text-sm text-zinc-500 hover:text-white hover:underline hover:underline-offset-4'>View Github Repo</button>
                </Link>
                </div>
            </div>
            
           
        </div>



    </div>
  )
}

