import React from "react";
import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion"
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return(
   <header className="sticky  top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">

    <motion.div
    initial={{
        opacity: 0,

    }}
    animate={{
        opacity: 1,
        scale: 1
    }}
    transition={{
        duration: 2,
        delay: 3.5
    }}
    className="flex grayscale opacity-20 flex-row">
        <SocialIcon url="https://github.com/KurtReti"  fgColor="#FFFFFF"  bgColor="transparent" />
        <SocialIcon url="https://www.linkedin.com/in/kurt-reti-aa469924a/" fgColor="#FFFFFF" bgColor="transparent" />
        <SocialIcon url="https://twitter.com/KurtReti" fgColor="#FFFFFF" bgColor="transparent" />
    </motion.div>

    <Link href="#hero">
    <motion.img
    initial={{
        opacity: 0,

    }}
    animate={{
        opacity: 1,
        scale: 1
    }}
    transition={{
        duration: 2,
        delay: 3.5
    }}
    className=" cursor-pointer hidden md:block tracking-tighter h-12 w-16" 
    src="https://cdn.discordapp.com/attachments/216749490747473921/1024659158257127434/KR_1.png"/>
    </Link> 

    <Link href="#contact">
    <motion.div
    initial={{
        opacity: 0,

    }}
    animate={{
        opacity: 1,
        scale: 1
    }}
    transition={{
        duration: 2,
        delay: 3.5
    }} className="flex flex-row items-center cursor-pointer">
        <SocialIcon network="email" bgColor="transparent" fgColor="#FFFFFF" />
        <p className="hidden uppercase text-white pt-[3px] md:block">Get in touch</p>
    </motion.div>
    </Link>

  </header>);
}
