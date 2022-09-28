import React from "react";
import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion"
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return(
   <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">

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
    className="flex flex-row">
        <SocialIcon url="https://github.com/KurtReti" fgColor="#a1a1aa" bgColor="transparent" />
        <SocialIcon url="https://www.linkedin.com/in/kurt-reti-aa469924a/" fgColor="#a1a1aa" bgColor="transparent" />
        <SocialIcon url="https://twitter.com/KurtReti" fgColor="#a1a1aa" bgColor="transparent" />
    </motion.div>

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
    className=" cursor-default tracking-tighter h-12 w-16" 
    src="https://cdn.discordapp.com/attachments/216749490747473921/1024659158257127434/KR_1.png"/>


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
        <SocialIcon network="email" bgColor="transparent" fgColor="#a1a1aa" />
        <p className="hidden uppercase text-zinc-400 pt-1 md:block">Get in touch</p>
    </motion.div>
    </Link>

  </header>);
}
