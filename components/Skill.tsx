import React from 'react'
import {motion} from 'framer-motion'


type Props = {}


// ghetto skill fix 

export function CssSkill({}: Props) {
  return (
    <div className='flex flex-col space-y-5 items-center'>
        <motion.div
        initial={{
            y: 400
        }}
        whileInView={{
            y:0
        }}
        transition={{
            duration: 5,
            delay: 1
        }}
        viewport={{
            once: true,
          }}

        className='relative flex flex-col space-y-5 items-center justify-evenly'>
            <div className='relative z-0 h-96 py-24 w-24 hover:opacity-100 transition-opacity duration-200 bg-red-400 opacity-50 rounded-md'></div>
           
        </motion.div> 
        <p className='relative z-10'>CSS</p>
    </div>
    
    
  )
}

export function HTMLSkill({}: Props) {
    return (
      <div className='flex flex-col space-y-5 items-center'>
          <motion.div
          initial={{
              y: 400
          }}
          whileInView={{
              y:0
          }}
          transition={{
              duration: 6,
              delay: 3
          }}
          viewport={{
            once: true,
          }}
          
  
          className='relative flex flex-col space-y-5 items-center justify-evenly'>
              <div className='relative z-0 h-96 py-24 w-24 hover:opacity-100 transition-opacity duration-200 bg-red-400 opacity-50 rounded-md'></div>
             
          </motion.div> 
          <p className='relative z-10'>HTML</p>
      </div>
      
      
    )
  }

  export function JsSkill({}: Props) {
    return (
      <div className='flex flex-col space-y-5 items-center'>
          <motion.div
          initial={{
              y: 400
          }}
          whileInView={{
              y:0
          }}
          transition={{
              duration: 2
          }}
          viewport={{
            once: true,
          }}

  
          className='relative flex flex-col space-y-5 items-center justify-evenly'>
              <div className='relative z-0 h-96 py-24 w-24 hover:opacity-100 transition-opacity duration-200 bg-red-400 opacity-50 rounded-md'></div>
             
          </motion.div> 
          <p className='relative z-10'>JS</p>
      </div>
      
      
    )
  }

  export function CSkill({}: Props) {
    return (
      <div className='flex flex-col space-y-5 items-center'>
          <motion.div
          initial={{
              y: 400
          }}
          whileInView={{
              y:0
          }}
          transition={{
              duration: 2
          }}
          viewport={{
            once: true,
          }}
          
  
          className='relative flex flex-col space-y-5 items-center justify-evenly'>
              <div className='relative z-0 h-96 py-24 w-24 hover:opacity-100 transition-opacity duration-200 bg-red-400 opacity-50 rounded-md'></div>
             
          </motion.div> 
          <p className='relative z-10'>C++</p>
      </div>
      
      
    )
  }

  export function ReactSkill({}: Props) {
    return (
      <div className='flex flex-col space-y-5 items-center'>
          <motion.div
          initial={{
              y: 400
          }}
          whileInView={{
              y:0
          }}
          transition={{
              duration: 2
          }}
          viewport={{
            once: true,
          }}
  
          className='relative flex flex-col space-y-5 items-center justify-evenly'>
              <div className='relative z-0 h-96 py-24 w-24 hover:opacity-100 transition-opacity duration-200 bg-red-400 opacity-50 rounded-md'></div>
             
          </motion.div> 
          <p className='relative z-10'>React</p>
      </div>
      
      
    )
  }