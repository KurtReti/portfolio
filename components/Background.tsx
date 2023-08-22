import React from "react";
import { motion } from "framer-motion";
type Props = {};

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
        duration: 4,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute z-0 bg-red-400 opacity-50 border-zinc-700 rounded-full h-[300px] w-[300px]" />
      {/* <motion.p
        initial={{
          scale: 1
        }}
        animate={{
          scale: 0
        }}
        transition={{
          duration: 1,
          delay: 2.2
        }}
        
        className='absolute z-10 text-white text-9xl'>KR</motion.p> */}
    </motion.div>
  );
}
