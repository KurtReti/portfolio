import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

export default function Background({}: Props) {
  return (
    <motion.div
    initial={{
        scale: 0,
        opacity: 0,
    }}
    animate={{
        scale: 1,
        opacity: 1,
    }}
    transition={{
        duration: 3,
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute z-0 bg-red-400 opacity-50  animate-[spin_10s_linear_infinite] border-zinc-700 rounded-full h-[300px] w-[300px]' />
    </motion.div>
  )
}